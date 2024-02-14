function lägg_blue_i_vagn() {
    let produkt = {
        namn: "White",
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
    console.log("produkt_fält: "+person_fält);
    produkt_fält_json = JSON.stringify(produkt_fält);
    window.localStorage.setItem("produkt_fält",produkt_fält_json);
    visa_produkter(produkt_fält);
}

function lägg_grey_i_vagn() {
    console.log("Grey               $120");
    console.log("*1")
}

function lägg_pink_i_vagn() {
    console.log("Pink               $120");
    console.log("*1")
}

function lägg_white_i_vagn() {
    console.log("White              $120");
    console.log("*1")
}

function lägg_red_i_vagn() {
    console.log("Red                $120");
    console.log("*1")
}

function lägg_goof_i_vagn() {
    console.log("Goof               $120");
    console.log("*1")
}

function visa_produkter() {
    if (!produkt) {
        console.log("visa_produkter TOM");
        return;
    }
}