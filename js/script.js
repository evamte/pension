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
    const template = document.querySelector("#information").content;

    const copy = template.cloneNode(true);
    console.log(template)

    copy.querySelector(".info_left h2").textContent = life_situation.title.rendered;

    //console.log(life_situation.title.rendered)
    copy.querySelector("img").src = life_situation.icon.guid;
    copy.querySelector(".info_right h2").textContent = life_situation.title.rendered;
    copy.querySelector(".info_right h3").textContent = life_situation.short_description;
    copy.querySelector(".info_right p").textContent = life_situation.long_description;
    copy.querySelector(".call_us a").textContent = life_situation.phone;
    copy.querySelector(".email_us a").textContent = life_situation.email;

    document.querySelector("main").appendChild(copy);
}
