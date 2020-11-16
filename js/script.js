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

    copy.querySelector("#info_left .selected").innerHTML = life_situation.title.rendered;
    //copy.querySelector("#info_right").innerHTML = life_situation.short_description;
    //copy.querySelector(".call_us").textContent = life_situation.phone;
    //copy.querySelector(".email_us").textContent = life_situation.e-mail;

    document.querySelector("main").appendChild(copy);
}
