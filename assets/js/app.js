"use strict";

/*
const sites = [
    "http://gir.gheeraert.be:8282/",
    "http://tokheim.gheeraert.be/cgi-bin/index.php",
    "https://my.gheeraert.be/",
    "https://gheeraert.spencer.co/news",
    "https://cam.gheeraert.be:7443/login",
    "https://etransweb.eurotracs.com/",
    "https://etransweb2.eurotracs.com/Home/Index",
    "https://gheeraert.3cx.be:5001/"
];

const statusDiv = document.getElementById('status');

sites.forEach(site => {
    fetch(site, { mode: 'no-cors' })
        .then(() => {
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status', 'up');
            statusMessage.innerHTML = `✅ <a href="${site}" target="_blank">${site}</a> is online`;
            statusDiv.appendChild(statusMessage);
        })
        .catch(() => {
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status', 'down');
            statusMessage.innerHTML = `❌ <a href="${site}" target="_blank">${site}</a> is offline`;
            statusDiv.appendChild(statusMessage);
        });
});
*/

function checkLinks() {
    document.querySelectorAll(".itemButtons a").forEach(link => {
        const site = link.href;

        fetch(site, { mode: 'no-cors' })
            .then(() => { 
                const statusMessage = document.createElement('span');
                statusMessage.classList.add('status', 'up');
                statusMessage.innerHTML = '<p>✅  is online</p>';
                link.parentElement.appendChild(statusMessage);
            })
            .catch(() => {
                const statusMessage = document.createElement('span');
                statusMessage.classList.add('status', 'down');
                statusMessage.innerHTML = '<p>⚠️  Kan niet laden</p>';
                link.parentElement.appendChild(statusMessage);
            });
    });
}
checkLinks()


setInterval(() => {
    location.reload();
    }, 180000);


/*
const statusMessage = document.createElement('span');
            statusMessage.classList.add('status', 'down');
            statusMessage.innerHTML = '<p>❌  is offline</p>';
            link.parentElement.appendChild(statusMessage);


document.querySelectorAll(".itemButtons a").forEach(link => {
    const site = link.href;
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(site)}`;

    fetch(proxyUrl)
        .then(response => {
            const statusMessage = document.createElement('span');

            if(response.ok) {
                statusMessage.classList.add('status', 'up');
                statusMessage.innerHTML = '<p>✅ is online</p>';
            } else {
                statusMessage.classList.add('status', 'off');
                statusMessage.innerHTML = `<p>❌ Fout (${response.status})</p>`;
            }

            link.parentElement.appendChild(statusMessage);
        })
        .catch(error => {
            const statusMessage = document.createElement('span');
            statusMessage.classList.add('status', 'down');
            statusMessage.innerHTML = '<p>⚠️ Kan niet laden</p>';
            link.parentElement.appendChild(statusMessage);
        });
});

*/