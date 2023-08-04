function parseUrls(url) {
    if (result = url.href.match(/^https?:\/\/(?:www\.)?twitter.com\/([a-zA-Z0-9_-]+)\/status\/\d+/)) {
        url.insertAdjacentHTML('beforeBegin', "<i class=\"fab fa-twitter fa-fw\"></i>");
        url.text = "Tweet by @" + result[1];
    } else
        if (/^.*\.pdf/g.test(url.href)) {
            url.insertAdjacentHTML('beforeBegin', "<i class=\"fas fa-file-pdf fa-fw\" title=\"PDF file\"></i>");
            url.text = url.hostname;
        } else
            if (result = url.href.match(/^https?:\/\/(?:www\.)?github.com\/([a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)?)(\/|$)/)) {
                url.insertAdjacentHTML('beforeBegin', "<i class=\"fab fa-github fa-fw\" title=\"GitHub repo\"></i>");
                url.text = result[1];
            } else
                if (url.hostname.endsWith("youtube.com")) {
                    url.insertAdjacentHTML('beforeBegin', "<i class=\"fab fa-youtube fa-fw\" title=\"YouTube video\"></i>Video on ");
                    url.text = "YouTube";
                } else {
                    url.insertAdjacentHTML('beforeBegin', "<i class=\"fas fa-external-link-alt fa-fw\" title=\"Web page\"></i>");
                    url.text = url.hostname;
                }
}

function downloadSigma(target){
    target.href = 'data:text/yaml;base64,' + btoa(document.querySelector('div.yaml-tab-selected code[data-lang=yml]').textContent);
}

function changeYamlDefinition(target){
    yaml_selected = target.textContent.toLowerCase();
    // Update tabs
    curentOffset = document.querySelector('.yaml-tab-selected code')?.scrollTop
    document.querySelector('.yaml-tab-selected')?.classList.remove('yaml-tab-selected')
    document.querySelector('#yaml-'+yaml_selected).classList.add('yaml-tab-selected')
    document.querySelector('#yaml-'+yaml_selected + ' code').scrollTop = curentOffset
    // Update buttons
    document.querySelector('.yaml-button-selected')?.classList.remove('yaml-button-selected')
    target.classList.add('yaml-button-selected')
    // Update feed url
    document.querySelector('#yaml-feed-url').href = document.querySelector('#yaml-feed-url').href.replace(/sigma_feed_.*?.yml/i, "sigma_feed_"+yaml_selected+".yml")
}

function goBack(){
    if(document.referrer && (document.referrer.indexOf("localhost") > 0 || document.referrer.toLowerCase().indexOf("hijacklibs") > 0)){
        history.back();
        window.location = "/";
    } else {
        window.location = "/";
    }
}

function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return  "over " + Math.floor(interval) + " year" + (interval>2 ? "s" : "") + " ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return "about " + Math.floor(interval) + " month" + (interval>2 ? "s" : "") + " ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " day" + (interval>2 ? "s" : "") + " ago";
    }
    return "Today"
}

function isValidGitHubUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "https:" && url.hostname==="github.com";
  }

function getLastModified(path) {
    fetch("https://api.github.com/repos/"+github_repo+"/commits?path="+encodeURIComponent(path), { headers: { "Content-Type": "application/json; charset=utf-8" }})
    .then(res => res.json())
    .then(commits => {
        try {
            date = commits[0]['commit']['committer']['date'].slice(0,10);
            url = commits[0]['html_url']
            if(/^\d{4}-\d{2}-\d{2}$/.test(date) && isValidGitHubUrl(url))
                document.querySelector('div#last-updated').innerHTML = '<a href="'+url+'" class="link-dotted"><time datetime="'+date+'" title="'+date+'">'+timeSince(new Date(date))+'</time></a>';

        } catch {
            console.error("Could not parse JSON")
        }
    })
    .catch(err => {
        console.error("Could not load JSON:", err);
    });
}


const load = () => { document.querySelectorAll('a.reference').forEach((x) => { parseUrls(x); });
if(window.location.pathname.startsWith('/entries/'))
    getLastModified(window.location.pathname.replace("/entries/", "/yml/").replace(".html", ".yml"))
}
window.onload = load;
