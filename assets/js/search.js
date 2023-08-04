var data = null;

function contains(elem, val) {
    return elem.toLowerCase().indexOf(val) > -1
}

function getSearchString() {
    return $.trim($('#search').val()).replace(/ +/g, ' ').toLowerCase()
}

function getFilters() {
    return Array.from($('#filters input:checked')).map(x => x.getAttribute('data-text'));
}

function updatePageAnchor(string, override) {
    if(string === undefined)
        string = getSearchString();

    hash = "#" + encodeURI(getSearchString());
    if (window.history.pushState && override !== undefined)
        window.history.replaceState({}, null, hash);
    else
        window.location.hash = hash;
}

function highlight(line, search) {
    search_escaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    term = new RegExp("(" + search_escaped + ")", 'i');
    return line.replace(term, '<span class="highlight">$1</span>')
}
function triggerSearch(searchValue){
    $('#search')[0].value = searchValue;
    handleSearch();
}

function handleSearch() {
    while (data == null) { }
    $('#results').text("");

    var searchValue = getSearchString();
    var types = getFilters();
    updatePageAnchor(searchValue, true);
    if (searchValue.length == 0) {
        generateHome();
    } else {
        $('#intro').css("display", "none");
        $('.back').css("visibility", "visible");
        if (searchValue.length <= 2) {
            $('#status').text("Enter at least three characters.");
            return;
        }

        if(searchValue.substr(0,4) == 'app:'){
            searchValueApp = searchValue.substr(4);
            if (searchValueApp.length <= 2) {
                $('#status').text("Enter at least three characters for the application name.");
                return;
            }
            foundEntries = Object.entries(data).filter(function (elem) {
                return  data[elem[0]]['types'].some(x => types.includes(x));
                });
            foundEntries = addResultsExe(foundEntries, searchValueApp);
        } else {
            if(searchValue.substr(0,7) == 'vendor:'){
                searchValueVendor = searchValue.substr(7);
                if (searchValueVendor.length <= 2) {
                    $('#status').text("Enter at least three characters for the vendor name.");
                    return;
                }
                foundEntries = Object.keys(data).filter(function (elem) {
                    return  contains(data[elem]['vendor'], searchValueVendor)
                            && data[elem]['types'].some(x => types.includes(x));
                    });
            } else {
                foundEntries = Object.keys(data).filter(function (elem) {
                    return  (contains(elem, searchValue)
                                || data[elem]['executables'].some(x => contains(x, searchValue))
                            )
                            && data[elem]['types'].some(x => types.includes(x));
                    });
            }
            addResultsDll(foundEntries, searchValue);
        }

        if (foundEntries !== undefined && foundEntries.length > 0) {
            let verb = foundEntries.length == 1 ? "entry" : "entries";
            $('#status').text(foundEntries.length + " " + verb + " found.");

        } else {
            $('#status').html("No results.<br /><span style=\"font-style: italic; font-size: small;\">Missing an entry? Open a <a href=\"https://www.github.com/"+github_repo+"/pulls\" data-visit-click=\"gh-pull\">pull request</a></span>!");
        }
    }
}


function addResultsExe(foundEntries, searchValue){
    if(searchValue === undefined || searchValue == null || searchValue == "" ) return
    let target = $('<ul></ul>');

    let exeMapping = {};
    foundEntries.forEach(dll => dll[1]['executables'].forEach(exe => {exe = exe.toLowerCase(); Object.keys(exeMapping).includes(exe) ? exeMapping[exe].push(dll[0]) : (exeMapping[exe] = [dll[0]])}));
    let foundExes = Object.keys(exeMapping).filter(function (elem) { return elem.toLowerCase().includes(searchValue.toLowerCase()) })

    foundExes.forEach(function (exe) {
        var foundDlls = exeMapping[exe].sort()
        let output = $('<li class="exe-file"></li>')
        let div = $("<div class=\"result-row\"><a>" + highlight(exe, searchValue) + "</a></div>")
        let div2 = $("<div style='min-width: 200px; max-width: 200px'></div>")
        foundDlls.forEach(function (d) {
            div2.append('<div class="pill results-dll"><img alt="DLL icon" src="/assets/img/dll.png" style="height: 1.25em; width: 1.25em; vertical-align: middle;"> <a href="' + data[d]['url'] + '" onclick="updatePageAnchor()" title="'+d+' is loaded by '+exe+'.">'+d+'</a></div>')
        });
        div.append(div2)
        output.append(div);
        target.append(output);
    });
    $('#results').append(target);
    return foundExes;
}

function addResultsDll(foundEntries, searchValue){
    let target = $('<ul></ul>');

    foundEntries.forEach(function (d) {
        let found_exes = data[d]['executables'].filter(function (elem) { return contains(elem, searchValue); })
        let output = $('<li class="dll-file"></li>')
        let div = $("<div class=\"result-row\"><a href=\"" + data[d]['url'] + "\" onclick=\"updatePageAnchor()\">" + highlight(d, searchValue) + "</a></div>")
        if (found_exes.length > 0) { found_exes.forEach(function (exe) { div.append("<pre class=\"exe pill\" title=\"This executable loads " + d + ".\">" + highlight(exe, searchValue) + "</pre>"); }) }
        output.append(div);
        target.append(output);
    });
    $('#results').append(target);
}

function addLatestEntryPills(target, foundEntries){
    foundEntries.forEach(function (d) {
        let found_exes = data[d]['executables'];
        let output = $("<div class=\"pill home-dll margin-right\"><img alt=\"DLL icon\" src=\"/assets/img/dll.png\" style=\"height: 1.25em; width: 1.25em; vertical-align: middle;\" /> <a href=\"" + data[d]['url'] + "\" onclick=\"updatePageAnchor()\" title=\""+d+" is loaded by "+found_exes.length+" vulnerable executable"+ (found_exes.length > 1 ? "s" : "") + ".\">" + d + "</a></div>")
        target.append(output)
    });
}

function addVendorPills(target, foundEntries){
    Object.entries(foundEntries).forEach(function (d) {
        let output = $("<div class=\"pill home-vendor margin-right\"><a href=\"javascript:\" onclick=\"triggerSearch('vendor:"+d[0]+"')\" title=\"There are "+d[1]+" DLL Hijacking entries associated with " + d[0] + ".\">" + d[0] + "</a><div class=\"counter\">"+d[1]+"</div></div>")
        target.append(output)
    });
}

function createCommaAnd(array){
    const last = array.pop();
    return array.join(', ') + ' and ' + last;
}


function generateHome(){
    // Display intro
    $('#intro').css("display", "block");
    $('.back').css("visibility", "hidden");

    // Create a mapping with type => number of entries
    stats_type = {}
    stats_vendor = {}
    for (const [key, value] of Object.entries(data)) {
        value['types'].forEach(function(d) {
            stats_type[d] = (stats_type[d] || 0) + 1
        });
        stats_vendor[value['vendor']] = (stats_vendor[value['vendor']] || 0) + 1
    }

    // Reset status and filter bars
    $('#status').html('');
    generateFilter = $('#filters')[0].children.length == 0;

    // Order grouped entries by their size
    result = []
    stats_type = Object.entries(stats_type);
    stats_type.sort((a, b) => b[1] - a[1]);
    for (const [key, value] of stats_type) {
            // Add filter buttons
            if(generateFilter){
                sanitised = encodeURIComponent(key).toLowerCase().replace(/\.|%[0-9a-z]{2}/gi, '');
                $('#filters').append($('<input type="checkbox" id="filter_'+sanitised+'" onchange="handleSearch()" data-text="'+key+'" checked><label for="filter_'+sanitised+'">'+key+'</label>'));
            }
            // Add stat to status bar
            result.push(value + " <em>" + key + "</em>");
    }

    // Show latest entries by default
    let latestItemsWrapper = $('<div style="display: flex; flex-direction: flow;"><div style="white-space:nowrap; margin-right: 5px; width: 120px; flex-shrink: 0;"><strong>Latest entries:</strong></div></div>')
    let latestItems = $('<div style="display: flex; flex-wrap: wrap;"></div>')
    latestItemsWrapper.append(latestItems);

    let vendorWrapper = $('<div style="display: flex; flex-direction: flow;"><div style="white-space:nowrap; margin-right: 5px; width: 120px; flex-shrink: 0;"><strong>By vendor:</strong></div></div>')
    let vendorItems = $('<div style="display: flex; flex-wrap: wrap;"></div>')
    vendorWrapper.append(vendorItems);

    // Update status bar
    $('#status').append(latestItemsWrapper);
    $('#status').append(vendorWrapper);
    items = Object.keys(data).sort(function(a,b){return data[a].date-data[b].date}).reverse()
    addLatestEntryPills(latestItems, items.slice(0,10));
    addVendorPills(vendorItems, stats_vendor);
    $('#status').append('<br /><span class="stats">The database contains '+ createCommaAnd(result) +' entries. To see all available DLL hijacking entries, click <a href="javascript:" onclick="triggerSearch(\'.exe\')">here</a>.</span>')
}

$(function () {
    if (window.location.hash != "" && window.location.hash != "#") {
        try {
            hashSearchString = decodeURIComponent(window.location.hash.substr(1));
            if (getSearchString() != hashSearchString) {
                $('#search').val(hashSearchString);
            }
        } catch { console.error("Could not decode anchor link", window.location.hash) }
    }

    $.getJSON("/entries.json", function (jdata) {
        data = jdata;

        generateHome();

        searchString = getSearchString()
        if (searchString) handleSearch();
        $('#search').keyup(debounce(handleSearch, 100));
    }).fail(function (e, f) {
        console.error("Could not load JSON:", f);
    });
});

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
