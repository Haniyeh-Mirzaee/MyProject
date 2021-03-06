// remove button

var x, x1;
var ven_del;

function dlt() {
    var delete1 = document.getElementById("pro_del1");
    delete1.remove();

    x = false;

    if (x == false && x1 == false) {
        ven_del = document.getElementById("vendor_del");
        ven_del.remove();
    }
}

function dlt2() {
    var delete2 = document.getElementById("pro_del2");
    delete2.remove();

    x1 = false;

    if (x == false && x1 == false) {
        ven_del = document.getElementById("vendor_del");
        ven_del.remove();
    }
}

function dlt3() {
    var delete3 = document.getElementById("pro_del3");
    delete3.remove();

    ven_del2 = document.getElementById("vendor_del2");
    ven_del2.remove();
}

// increase button
var pls1 = 0;
function increase() {
    pls1 == (document.getElementById("inc"));
    pls1++;
    document.getElementById("inc").innerHTML = pls1.toString();
}

var pls2 = 1;
function increase2() {
    document.getElementById("inc2").innerHTML = pls2.toString();
    pls2++;
    return pls2;
}

var pls3 = 1;
function increase3() {
    document.getElementById("inc3").innerHTML = pls3.toString();
    pls3++;
    return pls3;
}

// decrease button

function decrease1() {
    pls1 == (document.getElementById("inc"));
    --pls1;
    document.getElementById("inc").innerHTML = pls1.toString();
    // if (pls1 <= 0) {
    //     pls1 = 1;
    // }

    if (pls1 <= 1) {
        pls1 = 2;
    }
}

function decrease2() {
    pls2 == (document.getElementById("inc2"));
    --pls2;
    document.getElementById("inc2").innerHTML = pls2.toString();

    if (pls1 <= 1) {
        pls1 = 2;
    }
}

function decrease3() {
    pls3 == (document.getElementById("inc3"));
    --pls3;
    document.getElementById("inc3").innerHTML = pls3.toString();
    
    if (pls3 <= 0) {
        pls3 = 1;
    }
}
