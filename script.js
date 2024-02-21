

function lägg_blue_i_vagn() {
    let produkt = {
        namn: "Blue",
        pris: "$120",
        mängd: "*1"
    }
    console.log("Blue               $120");
    console.log("*1")
    let produkt_fält = [];
    let produkt_fält_json = window.localStorage.getItem("produkt_fält");
    if (produkt_fält_json) {
        produkt_fält = JSON.parse(produkt_fält_json);
    }
    produkt_fält.push(produkt);
    console.log("produkt_fält: "+produkt_fält);
    produkt_fält_json = JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält",produkt_fält_json);
    visa_produkter(produkt_fält);
}

function lägg_grey_i_vagn() {
    let produkt = {
        namn: "Grey",
        pris: "$120",
        mängd: "*1"
    }
    console.log("Grey               $120");
    console.log("*1")
    let produkt_fält = [];
    let produkt_fält_json = window.localStorage.getItem("produkt_fält");
    if (produkt_fält_json) {
        produkt_fält = JSON.parse(produkt_fält_json);
    }
    produkt_fält.push(produkt);
    console.log("produkt_fält: "+produkt_fält);
    produkt_fält_json = JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält",produkt_fält_json);
    visa_produkter(produkt_fält);
}

function lägg_pink_i_vagn() {
    let produkt = {
        namn: "Pink",
        pris: "$120",
        mängd: "*1"
    }
    console.log("Pink               $120");
    console.log("*1")
    let produkt_fält = [];
    let produkt_fält_json = window.localStorage.getItem("produkt_fält");
    if (produkt_fält_json) {
        produkt_fält = JSON.parse(produkt_fält_json);
    }
    produkt_fält.push(produkt);
    console.log("produkt_fält: "+produkt_fält);
    produkt_fält_json = JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält",produkt_fält_json);
    visa_produkter(produkt_fält);
}

function lägg_white_i_vagn() {
    let produkt = {
        namn: "White",
        pris: "$120",
        mängd: "*1"
    }
    console.log("White              $120");
    console.log("*1")
    let produkt_fält = [];
    let produkt_fält_json = window.localStorage.getItem("produkt_fält");
    if (produkt_fält_json) {
        produkt_fält = JSON.parse(produkt_fält_json);
    }
    produkt_fält.push(produkt);
    console.log("produkt_fält: "+produkt_fält);
    produkt_fält_json = JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält",produkt_fält_json);
    visa_produkter(produkt_fält);
}

function lägg_red_i_vagn() {
    let produkt = {
        namn: "Red",
        pris: "$120",
        mängd: "*1"
    }
    console.log("Red                $120");
    console.log("*1")
    let produkt_fält = [];
    let produkt_fält_json = window.localStorage.getItem("produkt_fält");
    if (produkt_fält_json) {
        produkt_fält = JSON.parse(produkt_fält_json);
    }
    produkt_fält.push(produkt);
    console.log("produkt_fält: "+produkt_fält);
    produkt_fält_json = JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält",produkt_fält_json);
    visa_produkter(produkt_fält);
}

function lägg_goof_i_vagn() {
    let produkt = {
        namn: "Goof",
        pris: "$120",
        mängd: "*1"
    }
    console.log("Goof               $120");
    console.log("*1")
    let produkt_fält = [];
    let produkt_fält_json = window.localStorage.getItem("produkt_fält");
    if (produkt_fält_json) {
        produkt_fält = JSON.parse(produkt_fält_json);
    }
    produkt_fält.push(produkt);
    console.log("produkt_fält: "+produkt_fält);
    produkt_fält_json = JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält",produkt_fält_json);
    visa_produkter(produkt_fält);
}

function visa_produkter(produkt) {
    if (!produkt) {
        console.log("visa_produkter TOM");
        return;
    }
    let produkt_div = document.querySelector(".kundvagn");
    produkt_div.innerHTML="";
    for (let i = 0; i< produkt.length; i++){
        let article = document.createElement("article");
        let p = document.createElement("p");
        p.innerHTML=produkt[i].namn+"      "+produkt[i].pris+"          "+produkt[i].mängd;
        article.append(p);
        produkt_div.append(article);
    }
}
function tom_kundvagn(){
    let produkt_div = document.querySelector(".kundvagn");
    produkt_div.innerHTML="";
    localStorage.removeItem("produkt_fält");
}
