var data = null;
var github_repo = undefined;

function contains(elem, val) {
    return elem.toLowerCase().indexOf(val) > -1
}

function getSearchString() {
    return document.getElementById('search').value.trim().replace(/ +/g, ' ').toLowerCase()
}

function getFilters() {
    return Array.from(document.querySelectorAll('#filters input:checked')).map(x => x.getAttribute('data-text'));
}

function updatePageAnchor(string, override) {
    if (string === undefined)
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

    let result = document.createDocumentFragment();

    line.split(term).forEach((x, i) => {
        if (i % 2 == 1) {
            let span = document.createElement("mark");
            span.innerText = x;
            result.appendChild(span);
        } else {
            result.appendChild(document.createTextNode(x));
        }
    });
    return result;
}
function triggerSearch(searchValue) {
    document.getElementById('search').value = searchValue;
    handleSearch();
}

function handleSearch() {
    while (data == null) { }
    document.getElementById('results').innerHTML = "";

    var searchValue = getSearchString();
    var types = getFilters();
    updatePageAnchor(searchValue, true);
    if (searchValue.length == 0) {
        generateHome();
    } else {
        document.getElementById('intro').style.display = "none";
        Array.from(document.querySelectorAll('.back')).map(item => { item.style.visibility = 'visible'; });

        if (searchValue.length <= 2) {
            document.getElementById('status').innerText = "Enter at least three characters.";
            return;
        }

        if (searchValue.substr(0, 4) == 'app:') {
            searchValueApp = searchValue.substr(4);
            if (searchValueApp.length <= 1) {
                document.getElementById('status').innerText = "Enter at least two characters for the application name.";
                return;
            }
            foundEntries = Object.entries(data).filter(function (elem) {
                return data[elem[0]]['types'].some(x => types.includes(x));
            });
            foundEntries = addResultsExe(foundEntries, searchValueApp);
        } else {
            if (searchValue.substr(0, 7) == 'vendor:') {
                searchValueVendor = searchValue.substr(7);
                if (searchValueVendor.length <= 1) {
                    document.getElementById('status').innerText = "Enter at least two characters for the vendor name.";
                    return;
                }
                foundEntries = Object.keys(data).filter(function (elem) {
                    return contains(data[elem]['vendor'], searchValueVendor)
                        && data[elem]['types'].some(x => types.includes(x));
                });
            } else {
                foundEntries = Object.keys(data).filter(function (elem) {
                    return (contains(elem, searchValue)
                        || data[elem]['executables'].some(x => contains(x, searchValue))
                    )
                        && data[elem]['types'].some(x => types.includes(x));
                });
            }
            addResultsDll(foundEntries, searchValue);
        }

        if (foundEntries !== undefined && foundEntries.length > 0) {
            let verb = foundEntries.length == 1 ? "entry" : "entries";
            document.getElementById('status').innerText = foundEntries.length + " " + verb + " found.";

        } else {
            t1 = document.createTextNode("No results.\n");
            s2 = document.createElement("span"); s2.classList.add("mitre-text");
            s2_1 = document.createTextNode("Missing an entry? Open a ");
            s2_2 = document.createElement("a"); s2_2.href = `https://www.github.com/${github_repo}/pulls`; s2_2.dataset.visitClick = "gh-pull"; s2_2.text = "pull request";
            s2_3 = document.createTextNode("!");
            s2.appendChild(s2_1); s2.appendChild(s2_2); s2.appendChild(s2_3);


            document.getElementById('status').innerHTML = '';
            document.getElementById('status').appendChild(t1);
            document.getElementById('status').appendChild(document.createElement("br"));
            document.getElementById('status').appendChild(s2);
        }
    }
}


function addResultsExe(foundEntries, searchValue) {
    if (searchValue === undefined || searchValue == null || searchValue == "") return
    let target = document.createElement("ul");

    let exeMapping = {};
    foundEntries.forEach(dll => dll[1]['executables'].forEach(exe => { exe = exe.toLowerCase(); Object.keys(exeMapping).includes(exe) ? exeMapping[exe].push(dll[0]) : (exeMapping[exe] = [dll[0]]) }));
    let foundExes = Object.keys(exeMapping).filter(function (elem) { return elem.toLowerCase().includes(searchValue.toLowerCase()) })

    foundExes.forEach(function (exe) {
        var foundDlls = exeMapping[exe].sort()
        let output = document.createElement("li");
        output.classList.add("exe-file");

        let div = document.createElement("div");
        div.classList.add("result-row");
        let a = document.createElement('a');
        a.appendChild(highlight(exe, searchValue))
        div.appendChild(a)

        let div2 = document.createElement("div");
        div2.classList.add("result-row-exe");

        foundDlls.forEach(function (dll) {
            let d = document.createElement("div")
            d.classList.add('pill');
            d.classList.add('results-dll');

            let i = document.createElement('img')
            i.alt = "DLL icon";
            i.src = "/assets/img/dll.png";
            i.classList.add('logo-inline');

            let a = document.createElement("a");
            a.href = data[dll]['url'];
            a.title = `${dll} is loaded by ${exe}.`;
            a.innerText = dll;
            a.addEventListener("click", _ => updatePageAnchor());

            d.appendChild(i)
            d.appendChild(a)

            div2.insertAdjacentElement('beforeend', d);
        });
        div.appendChild(div2)
        output.appendChild(div);
        target.appendChild(output);
    });
    document.getElementById('results').appendChild(target);
    return foundExes;
}

function addResultsDll(foundEntries, searchValue) {
    let target = document.createElement("ul");

    foundEntries.forEach(function (d) {
        let found_exes = data[d]['executables'].filter(function (elem) { return contains(elem, searchValue); })
        let output = document.createElement("li");
        output.classList.add("dll-file");

        let div = document.createElement("div");
        div.classList.add("result-row");
        let a = document.createElement("a");
        a.href = data[d]['url'];
        a.addEventListener("click", _ => updatePageAnchor());
        a.appendChild(highlight(d, searchValue))
        div.appendChild(a)

        if (found_exes.length > 0) {
            found_exes.forEach(function (exe) {
                let pre = document.createElement("pre"); pre.classList.add("exe", "pill"); pre.title = `This executable loads ${d}`; pre.appendChild(highlight(exe, searchValue)); div.insertAdjacentElement("beforeend", pre);
            })
        }
        output.appendChild(div);
        target.appendChild(output);
    });
    document.getElementById('results').append(target);
}

function addLatestEntryPills(target, foundEntries) {
    foundEntries.forEach(function (dll) {
        let found_exes = data[dll]['executables'];

        let d = document.createElement("div")
        d.classList.add("pill", "home-dll");

        let i = document.createElement('img')
        i.alt = "DLL icon";
        i.src = "/assets/img/dll.png";
        i.classList.add('logo-inline');

        let a = document.createElement("a");
        a.href = data[dll]['url'];
        a.title = `${dll} is loaded by ${found_exes.length} vulnerable executable${found_exes.length > 1 ? "s" : ""}.`;
        a.innerText = dll;
        a.addEventListener("click", _ => updatePageAnchor());

        d.appendChild(i)
        d.appendChild(a)

        target.insertAdjacentElement('beforeend', d);
    });
}

function addVendorPills(target, foundEntries) {
    let res = Object.entries(foundEntries)
    res = res.sort((a, b) =>
        b[1] - a[1] || a[0].localeCompare(b[0])
    );
    res.forEach(function (vendor_entry) {
        let d = document.createElement("div")
        d.classList.add("pill", "home-vendor");

        let a = document.createElement("a");
        a.title = `There are ${vendor_entry[1]} DLL Hijacking entries associated with ${vendor_entry[0]}.`;
        a.innerText = vendor_entry[0];
        a.addEventListener("click", _ => triggerSearch(`vendor:${vendor_entry[0]}`));

        let dc = document.createElement("div")
        dc.classList.add("counter")
        dc.innerText = vendor_entry[1];

        d.appendChild(a)
        d.appendChild(dc)

        target.insertAdjacentElement('beforeend', d);

    });
}

function createCommaAnd(array, result) {
    const last = array.pop();
    array.forEach(x => { result.appendChild(x); result.appendChild(document.createTextNode(", ")) });
    result.appendChild(document.createTextNode(" and "))
    result.appendChild(last);
}

function generateHome() {
    // Display intro
    document.getElementById('intro').style.display = 'block';
    Array.from(document.querySelectorAll('.back')).map(item => { item.style.visibility = 'hidden'; });

    // Create a mapping with type => number of entries
    stats_type = {}
    stats_vendor = {}
    for (const [key, value] of Object.entries(data)) {
        value['types'].forEach(function (d) {
            stats_type[d] = (stats_type[d] || 0) + 1
        });
        stats_vendor[value['vendor']] = (stats_vendor[value['vendor']] || 0) + 1
    }

    // Reset status and filter bars
    document.getElementById('status').innerHTML = '';
    generateFilter = document.getElementById('filters').children.length == 0;

    // Order grouped entries by their size
    result = []
    stats_type = Object.entries(stats_type);
    stats_type.sort((a, b) => b[1] - a[1]);
    for (const [key, value] of stats_type) {
        // Add filter buttons
        if (generateFilter) {
            sanitised = encodeURIComponent(key).toLowerCase().replace(/\.|%[0-9a-z]{2}/gi, '');

            input = document.createElement("input");
            input.type = "checkbox";
            input.id = `filter_${sanitised}`
            input.addEventListener("change", _ => handleSearch())
            input.dataset.text = key;
            input.checked = true;

            label = document.createElement("label");
            label.for = input.id;
            label.appendChild(input);
            label.appendChild(document.createTextNode(key))

            document.getElementById('filters').appendChild(label);
        }
        // Add stat to status bar
        let span = document.createElement("span");
        let t1 = document.createTextNode(`${value} `)
        let em = document.createElement("em");
        em.textContent = key;
        span.appendChild(t1);
        span.appendChild(em);
        result.push(span);
    }

    // Show latest entries by default
    let latestItemsWrapper = document.createElement("div");
    latestItemsWrapper.classList.add('latest-items-wrapper');
    let d = document.createElement("span")
    d.classList.add("headline")
    d.innerText = "Latest entries";

    let latestItems = document.createElement("div");
    latestItems.classList.add('latest-items');
    latestItemsWrapper.appendChild(latestItems);
    latestItems.insertAdjacentElement('beforeend', d)

    let d2 = document.createElement("span")
    d2.classList.add("headline")
    d2.innerText = "By vendor";

    let vendorItems = document.createElement("div")
    vendorItems.classList.add('latest-items')
    latestItemsWrapper.appendChild(vendorItems)
    vendorItems.insertAdjacentElement('beforeend', d2)

    // Update status bar
    document.getElementById('status').appendChild(latestItemsWrapper);
    items = Object.keys(data).sort(function (a, b) { return data[a].date - data[b].date }).reverse()
    addLatestEntryPills(latestItems, items.slice(0, 10));
    addVendorPills(vendorItems, stats_vendor);

    let ss = document.createElement("div");
    ss.classList.add("stats");

    ss.appendChild(document.createTextNode(`The database contains `));
    createCommaAnd(result, ss)
    ss.appendChild(document.createTextNode(` entries. To see all available DLL hijacking entries, click `))
    let a = document.createElement("a"); a.innerText = "here"; a.addEventListener("click", _ => triggerSearch(".exe")); a.classList.add("clickable");
    ss.appendChild(a);
    ss.appendChild(document.createTextNode(`.`))

    document.getElementById('status').insertAdjacentElement('afterbegin', ss);
}

document.addEventListener('DOMContentLoaded', function (event) {
    github_repo = document.getElementsByTagName("body")[0].dataset['githubRepo'];

    if (window.location.hash != "" && window.location.hash != "#") {
        try {
            hashSearchString = decodeURIComponent(window.location.hash.substring(1));
            if (getSearchString() != hashSearchString) {
                document.getElementById('search').value = hashSearchString;
            }
        } catch { console.error("Could not decode anchor link", window.location.hash) }
    }

    fetch("/entries.json").then(r => r.json())
        .then(gdata => {
            data = gdata
            generateHome();
            searchString = getSearchString()
            if (searchString) handleSearch();
            document.getElementById('search').addEventListener("keyup", debounce(handleSearch, 100));
        })
        .catch(e => console.error("Could not load JSON:", e));

    document.getElementById("back-button-search").addEventListener("click", _ => triggerSearch(''))
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
