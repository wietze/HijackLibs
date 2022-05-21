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
    console.log(document.referrer)
    if(document.referrer && (document.referrer.indexOf("localhost") > 0 || document.referrer.toLowerCase().indexOf("hijacklibs") > 0)){
        history.back();
        window.location = "/";
    } else {
        window.location = "/";
    }
}


const load = () => { document.querySelectorAll('a.reference').forEach((x) => { parseUrls(x); }); }
window.onload = load;
