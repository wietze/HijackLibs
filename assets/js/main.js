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
    target.href = 'data:text/yaml;base64,' + btoa(document.querySelector('code[data-lang=yml]').textContent);
}

function goBack(){
    history.back();
    window.location = "/";
}


const load = () => { document.querySelectorAll('a.reference').forEach((x) => { parseUrls(x); }); }
window.onload = load;
