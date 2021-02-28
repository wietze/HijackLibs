function parseUrls(url) {
    if(result = url.href.match(/^https?:\/\/(?:www\.)?twitter.com\/([a-zA-Z0-9_-]+)\/status\/\d+/)){
        url.insertAdjacentHTML('beforeBegin', "<i class=\"fab fa-twitter fa-fw\"></i> Tweet by ");
        url.text = "@"+result[1];
    } else
    if(/^.*\.pdf/g.test(url.href)){
        url.insertAdjacentHTML('beforeBegin', "<i class=\"fas fa-file-pdf fa-fw\"></i> ");
        url.text = url.hostname;
    } else
    if(result = url.href.match(/^https?:\/\/(?:www\.)?github.com\/([a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)?)(\/|$)/)){
        url.insertAdjacentHTML('beforeBegin', "<i class=\"fab fa-github fa-fw\"></i> ");
        url.text = result[1];
    } else
    if(url.hostname.endsWith("youtube.com")){
        url.insertAdjacentHTML('beforeBegin', "<i class=\"fab fa-youtube fa-fw\"></i> Video on ");
        url.text = "YouTube";
    } else {
        url.insertAdjacentHTML('beforeBegin', "<i class=\"fas fa-external-link-alt fa-fw\"></i> ");
        url.text = url.hostname;
    }
}


const load = () => {
    document.querySelectorAll('a.reference').forEach((x) => {parseUrls(x);});
    console.log("load event detected!");
  }
  window.onload = load;


// $(document).ready(function(){
//     $('a.reference').each(function() {
//         $(this).html(parseUrls($(this).html()));
//     });
// });
