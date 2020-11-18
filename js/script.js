window.addEventListener('DOMContentLoaded', getData);


function getData() {
    let life_situation = fetch("http://createsimple.dk/ap_data/wordpress/wp-json/wp/v2/life_situation")
        .then(response => response.json())
        //.then(showText);

        .then(() => console.log(life_situation))
}

/*let allData = {
    lifeSituation: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation2: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation3: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation4: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation5: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation6: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation7: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation8: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    },

    lifeSituation9: {
        img_src: life_situation.icon.guid,
        info_right_h2: life_situation.title.rendered,
        info_right_h3: life_situation.short_description,
        info_right_p: life_situation.long_description,
        call_us_a: life_situation.phone,
        email_us_a: life_situation.email,
    }

}*/

/*
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
    situation_1_tab: 'lifeSituation',
    situation_2_tab: 'lifeSituation2',
    situation_3_tab: 'lifeSituation3',
    situation_4_tab: 'lifeSituation4',
    situation_5_tab: 'lifeSituation5',
    situation_6_tab: 'lifeSituation6',
    situation_7_tab: 'lifeSituation7',
    situation_8_tab: 'lifeSituation8',
    situation_9_tab: 'lifeSituation9',
}

window.onload = function () {
    document.getElementById('info_right').innerHTML = tabToText.situation_1_tab;
};

function showText(tabId) {

    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    copy.querySelector("img").src = allData.lifeSituation.img_src;
    copy.querySelector("#info_right h2").textContent = allData.lifeSituation.info_right_h2;
    copy.querySelector("#info_right h3").textContent = allData.lifeSituation.info_right_h3;
    copy.querySelector("#info_right p").textContent = allData.lifeSituation.info_right_p;
    copy.querySelector(".call_us a").textContent = allData.lifeSituation.call_us_a;
    copy.querySelector(".email_us a").textContent = allData.lifeSituation.email_us_a;

    document.getElementById('info_right').innerHTML = tabToText[lifeSituation];

    document.querySelector("main").appendChild(copy);
}
*/
