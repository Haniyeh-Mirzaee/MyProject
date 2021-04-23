// remove button

var x, x1;
var ven_del;

function dlt() {
    var delete1 = document.getElementById("pro_del1");
    delete1.remove();

    sum1 = 0;
    sum = sum1 + sum2 + sum3;
    document.getElementById("sumcircle").innerHTML = sum.toString();

    x = false;

    if (x == false && x1 == false) {
        ven_del = document.getElementById("vendor_del");
        ven_del.remove();
    }
}

function dlt2() {
    var delete2 = document.getElementById("pro_del2");
    delete2.remove();

    sum2 = 0;
    sum = sum1 + sum2 + sum3;
    document.getElementById("sumcircle").innerHTML = sum.toString();

    x1 = false;

    if (x == false && x1 == false) {
        ven_del = document.getElementById("vendor_del");
        ven_del.remove();
    }
}

function dlt3() {
    var delete3 = document.getElementById("pro_del3");
    delete3.remove();

    sum3 = 0;
    sum = sum1 + sum2 + sum3;
    document.getElementById("sumcircle").innerHTML = sum.toString();

    ven_del2 = document.getElementById("vendor_del2");
    ven_del2.remove();
}

// increase button

var sum = 3;
var sum1 = 1;
var sum2 = 1;
var sum3 = 1;


var pls1 = 1;

function increase1() {
    ++pls1;
    document.getElementById("inc").innerHTML = pls1.toString();

    ++sum1;
    sum = sum1 + sum2 + sum3;
    document.getElementById("sumcircle").innerHTML = sum.toString();
}

let myvar1;

function IncreaseSpeed(duration) {
    myvar1 = setTimeout(() => {

        pls1 += 1;
        document.getElementById("inc").innerHTML = pls1;

        ++sum1;
        sum = sum1 + sum2 + sum3;
        document.getElementById("sumcircle").innerHTML = sum.toString();

        IncreaseSpeed(duration - 50);

    }, duration)
}

function DecreaseSpeed() {
    clearTimeout(myvar1);
}

var pls2 = 1;

function increase2() {
    ++pls2;
    document.getElementById("inc2").innerHTML = pls2.toString();

    ++sum2;
    sum = sum1 + sum2 + sum3;
    document.getElementById("sumcircle").innerHTML = sum.toString();
}


var myvar2;
function myinterval2() {
    myvar2 = setInterval(increase2, 200);
}
function stopMyInterval2() {
    clearInterval(myvar2);
}


var pls3 = 1;

function increase3() {
    ++pls3;
    document.getElementById("inc3").innerHTML = pls3.toString();

    ++sum3;
    sum = sum1 + sum2 + sum3;
    document.getElementById("sumcircle").innerHTML = sum.toString();
}

var myvar3;
function myinterval3() {
    myvar3 = setInterval(increase3, 200);
}
function stopMyInterval3() {
    clearInterval(myvar3);
}


// decrease button

function decrease1() {
    if (pls1 > 1) {
        --pls1;
        document.getElementById("inc").innerHTML = pls1.toString();

        --sum1;
        sum = sum1 + sum2 + sum3;
        document.getElementById("sumcircle").innerHTML = sum.toString();
    }
}

let Dmyvar1;

function DIncreaseSpeed(duration) {
    Dmyvar1 = setTimeout(() => {

        if (pls1 > 1) {

            pls1 -= 1;
            document.getElementById("inc").innerHTML = pls1;

            --sum1;
            sum = sum1 + sum2 + sum3;
            document.getElementById("sumcircle").innerHTML = sum.toString();
        }

        DIncreaseSpeed(duration - 500);

    }, duration)
}

function DDecreaseSpeed() {
    clearTimeout(Dmyvar1);
}


function decrease2() {
    if (pls2 > 1) {
        --pls2;
        document.getElementById("inc2").innerHTML = pls2.toString();

        --sum2;
        sum = sum1 + sum2 + sum3;
        document.getElementById("sumcircle").innerHTML = sum.toString();
    }
}

var Dmyvar2;
function MyInterval_dec2() {
    Dmyvar2 = setInterval(decrease2, 200);
}
function stopMyInterval_dec2() {
    clearInterval(Dmyvar2);
}

function decrease3() {
    if (pls3 > 1) {
        --pls3;
        document.getElementById("inc3").innerHTML = pls3.toString();

        --sum3;
        sum = sum1 + sum2 + sum3;
        document.getElementById("sumcircle").innerHTML = sum.toString();
    }
}

var Dmyvar3;
function MyInterval_dec3() {
    Dmyvar3 = setInterval(decrease3, 200);
}
function stopMyInterval_dec3() {
    clearInterval(Dmyvar3);
}


// change titr's color

function BasketFunc() {
    document.getElementsByClassName('BasketTitr')[0].style.color = '#DF3856';
    document.getElementsByClassName('hr1')[0].style.borderBottomColor = '#DF3856';
    document.getElementsByClassName('NextShopTitr')[0].style.color = '#000000';
    document.getElementsByClassName('hr2')[0].style.borderBottomColor = '#DFDFDF';
}

function NextShopFunc() {
    document.getElementsByClassName('NextShopTitr')[0].style.color = '#DF3856';
    document.getElementsByClassName('hr2')[0].style.borderBottomColor = '#DF3856';
    document.getElementsByClassName('BasketTitr')[0].style.color = '#000000';
    document.getElementsByClassName('hr1')[0].style.borderBottomColor = '#DFDFDF';
}