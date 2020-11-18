window.addEventListener('DOMContentLoaded', init);

let myData = {};


function init() {

    document.querySelector("#situation_1_tab").addEventListener("click", displayData);
    document.querySelector("#situation_2_tab").addEventListener("click", displayData);
    document.querySelector("#situation_3_tab").addEventListener("click", displayData);
    document.querySelector("#situation_4_tab").addEventListener("click", displayData);
    document.querySelector("#situation_5_tab").addEventListener("click", displayData);
    document.querySelector("#situation_6_tab").addEventListener("click", displayData);
    document.querySelector("#situation_7_tab").addEventListener("click", displayData);
    document.querySelector("#situation_8_tab").addEventListener("click", displayData);
    document.querySelector("#situation_9_tab").addEventListener("click", displayData);

    getData();
}

function getData() {

    fetch('http://createsimple.dk/ap_data/wordpress/wp-json/wp/v2/life_situation')
        .then(response => response.json())
        .then(data => {
            myData = data;
            displayData();
        });
}

function displayData(event) {

    if (event !== undefined) {
        console.dir(event.target.dataset.situation_list);
        let targetStringNumber = event.target.dataset.situation_list;
        let targetIntNumber = parseInt(targetStringNumber)

        showText(myData[targetIntNumber]);

    } else {
        showText(myData[0]); // DEFAULT 1. TIME
    }
}

function showText(singleDataObj) {

    document.querySelector("#info_right").innerHTML = "";
    const template = document.querySelector("#template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("img").src = singleDataObj.icon.guid;
    copy.querySelector("h2").textContent = singleDataObj.title.rendered;
    copy.querySelector("h3").textContent = singleDataObj.short_description;
    copy.querySelector("p").textContent = singleDataObj.long_description;
    copy.querySelector(".call_us a").textContent = singleDataObj.phone;
    copy.querySelector(".email_us a").textContent = singleDataObj.email;

    document.querySelector("#info_right").appendChild(copy);
}
