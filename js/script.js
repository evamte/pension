window.addEventListener('DOMContentLoaded', getData);


function getData() {
    fetch("http://createsimple.dk/ap_data/wordpress/wp-json/wp/v2/life_situation")
        .then(response => response.json())
        .then(handleData);
}

function handleData(life_situation) {
    //console.log(situation)
    life_situation.forEach(showSituation)
}

function showSituation(life_situation) {
    //console.log(situation)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);
    console.log(template)

    copy.querySelector("img").src = life_situation.icon.guid;
    copy.querySelector("#info_right h2").textContent = life_situation.title.rendered;
    copy.querySelector("#info_right h3").textContent = life_situation.short_description;
    copy.querySelector("#info_right p").textContent = life_situation.long_description;
    copy.querySelector(".call_us a").textContent = life_situation.phone;
    copy.querySelector(".email_us a").textContent = life_situation.email;

    document.querySelector("main").appendChild(copy);
}

var buttonIdToTabId = {
    situation_1_button: "situation_1_tab",
    situation_2_button: "situation_2_tab",
    situation_3_button: "situation_3_tab",
    situation_4_button: "situation_4_tab",
    situation_5_button: "situation_5_tab",
    situation_6_button: "situation_6_tab",
    situation_7_button: "situation_7_tab",
    situation_8_button: "situation_8_tab",
    situation_9_button: "situation_9_tab",

}

var buttonClickedStates = {
    situation_1_button: false,
    situation_2_button: false,
    situation_3_button: false,
    situation_4_button: false,
    situation_5_button: false,
    situation_6_button: false,
    situation_7_button: false,
    situation_8_button: false,
    situation_9_button: false,
}

var tabToText = {
    situation_1_tab: 'situation text number 1',
    situation_2_tab: 'situation text number 2',
    situation_3_tab: 'situation text number 3',
    situation_4_tab: 'situation text number 4',
    situation_5_tab: 'situation text number 5',
    situation_6_tab: 'situation text number 6',
    situation_7_tab: 'situation text number 7',
    situation_8_tab: 'situation text number 8',
    situation_9_tab: 'situation text number 9',
}

window.onload = function() {
    document.getElementById('info_right').innerHTML = tabToText.situation_1_tab;
};

function showText(tabId) {
    document.getElementById('info_right').innerHTML = tabToText[tabId];
}
