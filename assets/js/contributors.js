document.addEventListener('DOMContentLoaded', async function () {
    const repo = document.getElementsByTagName("body")[0].dataset['githubRepo'];
    let contributors = await (await fetch(`https://api.github.com/repos/${repo}/contributors`)).json();
    contributors.forEach(function (x) {
        var div = document.createElement('div');
        div.innerHTML = `<a href="https://github.com/${x['login']}" target="_blank"><img src="https://avatars.githubusercontent.com/u/${x['id']}?s=16&v=4" alt="Avatar of ${x['login']}" class="external-favicon" /></a> <a href="https://github.com/${repo}/commits?author=${x['login']}" target="_blank">${x['login']}</a>`;
        document.getElementById("contributors").appendChild(div);
    });
});