const bagsArr = [
    {
        link: "https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/7F/F7/882ef9e8-f016-4b22-9b67-835c8322173a.jpg.webp",
        brand: "ANOUK",
        name: 'Maxi Dress',
        price: "1756",
        originalPrice: "Rs. 2195",
        discount: "20",
    },
    {
        link: "https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/55/08/eee6d080-2bd2-4894-8a5d-26961f910a3c.jpeg.webp",
        brand: "AKS",
        name: "Maxi Dress",
        price: "550",
        originalPrice: "Rs. 2,499",
        discount: "78",
    },
    {
        link: "https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/A4/C4/abca3204-698e-4134-9c30-8bdf424f4e51.jpg.webp",
        brand: "BIBA",
        name: 'Maxi Dress',
        price: "881",
        originalPrice: "Rs. 2300",
        discount: "63",
    },
    {
        link: "https://imgaz3.staticbg.com/thumb/large/oaupload/ser1/banggood/images/3A/47/119cf652-7440-42da-a4fb-75eb87104a05.jpg.webp",
        brand: "VONDA",
        name: "Maxi Dress",
        price: "666",
        originalPrice: "Rs. 1,799",
        discount: "63",
    },
    {
        link: "https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/59/00/f698163d-8903-4291-a5ff-c63012a91781.jpg.webp",
        brand: "GRACILLA",
        name: 'Maxi Dress',
        price: "1120",
        originalPrice: "Rs. 3,499",
        discount: "68",
    },
    {
        link: "https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/54/92/275954a4-54bb-433a-97ff-479b29906c1d.jpg.webp",
        brand: "LIBAS",
        name: "Maxi Dress",
        price: "1712",
        originalPrice: "Rs. 2195",
        discount: "22",
    },
    {
        link: "https://imgaz3.staticbg.com/thumb/large/oaupload/ser1/banggood/images/3A/47/119cf652-7440-42da-a4fb-75eb87104a05.jpg.webp",
        brand: "VONDA",
        name: 'Maxi Dress',
        price: "675",
        originalPrice: "Rs. 1499",
        discount: "55",
    },
    {
        link: "https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/52/4E/c749cc2e-5910-4e4f-a8f5-bc11f1d341a5.jpg.webp",
        brand: "LIBAS",
        name: "Maxi Dress",
        price: "1678",
        originalPrice: "Rs. 3,050",
        discount: "45",
    },
    {
        link: "https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/59/00/f698163d-8903-4291-a5ff-c63012a91781.jpg.webp",
        brand: "VONDA",
        name: 'Maxi Dress',
        price: "805",
        originalPrice: "Rs. 2299",
        discount: "65",
    },
    {
        link: "https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/73/11/2d59b689-266d-45fa-807c-51e0d45f362a.jpg.webp",
        brand: "AKS",
        name: 'Maxi Dress',
        price: "650",
        originalPrice: "Rs. 1299",
        discount: "50",
    },
    {
        link: "https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/54/92/275954a4-54bb-433a-97ff-479b29906c1d.jpg.webp",
        brand: "VONDA",
        name: "Maxi Dress",
        price: "1150",
        originalPrice: "Rs. 2299",
        discount: "50",
    },
    {
        link: "https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/52/4E/c749cc2e-5910-4e4f-a8f5-bc11f1d341a5.jpg.webp",
        brand: "AKS",
        name: "Maxi Dress",
        price: "900",
        originalPrice: "Rs. 1799",
        discount: "50",
    },
];

if (localStorage.getItem("Bags") == null)
    localStorage.setItem("Bags", JSON.stringify(bagsArr));

function showList(arr) {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;

    arr.forEach(function (obj) {
        var div = document.createElement("div");
        var image = document.createElement("img");
        var name = document.createElement("p");
        var brand = document.createElement("p");
        var price = document.createElement("p");
        var originalPrice = document.createElement("p");
        var discount = document.createElement("p");
        var combine = document.createElement("div");
        var anchor = document.createElement("a");

        anchor.href = "american.html";
        anchor.append(image);
        image.src = obj.link;
        brand.innerHTML = obj.brand;
        brand.style.color = "rosybrown";

        price.innerHTML = `Rs. ${obj.price} `;
        price.style.fontWeight = "bold";
        price.style.display = "inline";

        name.innerHTML = obj.name;
        originalPrice.innerHTML = obj.originalPrice;
        originalPrice.style.textDecoration = "line-through";
        originalPrice.style.display = "inline";

        discount.innerHTML = ` (${obj.discount} % off)`;
        discount.style.color = "rosybrown";
        discount.style.display = "inline";

        combine.append(price, originalPrice, discount);
        combine.style.textAlign = "center";

        div.append(anchor, brand, name, combine);
        div.style.lineHeight = "25px";

        mainDiv.append(div);
        mainDiv.setAttribute("class", "default");
    });
}

showList(JSON.parse(localStorage.getItem("Bags")));

function changeGrid() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;

    var arr = JSON.parse(localStorage.getItem("Bags"));

    arr.forEach(function (obj) {
        var div = document.createElement("div");
        var image = document.createElement("img");
        var name = document.createElement("p");
        var brand = document.createElement("p");
        var price = document.createElement("p");
        var originalPrice = document.createElement("p");
        var discount = document.createElement("p");
        var combine = document.createElement("div");
        onclick = "check()";
        var anchor = document.createElement("a");

        anchor.href = "productDetails.html";
        anchor.append(image);

        image.src = obj.link;
        brand.innerHTML = obj.brand;
        brand.style.color = "rosybrown";

        price.innerHTML = `Rs. ${obj.price} `;
        price.style.fontWeight = "bold";
        price.style.display = "inline";

        name.innerHTML = obj.name;
        originalPrice.innerHTML = obj.originalPrice;
        originalPrice.style.textDecoration = "line-through";
        originalPrice.style.display = "inline";

        discount.innerHTML = ` (${obj.discount} % off)`;
        discount.style.color = "rosybrown";
        discount.style.display = "inline";

        combine.append(price, originalPrice, discount);
        combine.style.textAlign = "center";

        div.append(anchor, brand, name, combine);
        div.style.lineHeight = "25px";

        mainDiv.append(div);
        mainDiv.setAttribute("class", "change");
    });
}

// Drop down list

function selectOpt() {
    var option = document.getElementById("opt").value;
    var arr = JSON.parse(localStorage.getItem("Bags"));

    if (option === "prce-asc") {
        console.log(arr);
        arr.sort(function (a, b) {
            return a.price - b.price;
        });
        console.log(arr);

        showList(arr);
    } else if (option === "prce-desc") {
        arr.sort(function (a, b) {
            return b.price - a.price;
        });

        showList(arr);
    } else if (option === "discount-desc") {
        arr.sort(function (a, b) {
            return b.discount - a.discount;
        });

        showList(arr);
    } else showList(arr);
}

function three() {
    var arr = JSON.parse(localStorage.getItem("Bags"));

    showList(arr);
}

// Filter

function expand() {
    up = document.getElementById("up");
    up.style.zIndex = "1";
    down = document.getElementById("down");
    down.style.zIndex = "-1";

    var all = document.querySelector(".all");
    all.style.display = "block";
}

function contract() {
    down = document.getElementById("down");
    down.style.zIndex = "1";

    up = document.getElementById("up");
    up.style.zIndex = "-1";

    var all = document.querySelector(".all");
    all.style.display = "none";
}

// Filter Categories

//Price

function addition1() {
    add = document.getElementById("add1");
    add.style.zIndex = "1";

    sub = document.getElementById("sub1");
    sub.style.zIndex = "-1";

    check = document.querySelector(".check-1");
    check.style.display = "none";
}

function subtract1() {
    sub = document.getElementById("sub1");
    sub.style.zIndex = "1";

    add = document.getElementById("add1");
    add.style.zIndex = "-1";

    check = document.querySelector(".check-1");
    check.style.display = "block";
}

//Brand

function addition2() {
    add = document.getElementById("add2");
    add.style.zIndex = "1";

    sub = document.getElementById("sub2");
    sub.style.zIndex = "-1";

    check = document.querySelector(".check-2");
    check.style.display = "none";
}

function subtract2() {
    sub = document.getElementById("sub2");
    sub.style.zIndex = "1";

    add = document.getElementById("add2");
    add.style.zIndex = "-1";

    check = document.querySelector(".check-2");
    check.style.display = "block";
}

//filter by brand
let finalArr = []; //declaration of finalArr
function checkbox() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    var checkBox = document.getElementById("myCheck"); //check
    var arr = JSON.parse(localStorage.getItem("Bags"));

    if (checkBox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.price < 1000) {
                return el;
            }
        });
        finalArr = finalArr.concat(data);
        showList(finalArr);
    } else {
        finalArr = finalArr.filter(function (el) {
            if (el.price > 1001) {
                return el;
            }
        });

        if (finalArr.length == 0) {
            showList(arr);
        } else {
            showList(finalArr);
        }
    }
}

function checkbox2() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    var checkBox = document.getElementById("myCheck2");
    var arr = JSON.parse(localStorage.getItem("Bags"));

    if (checkBox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.price > 1001 && el.price < 1501) {
                return el;
            }
        });
        finalArr = finalArr.concat(data);
        showList(finalArr);
    } else {
        // console.log(arr);
        finalArr = finalArr.filter(function (el) {
            if (el.price < 1001 || el.price > 1501) {
                return el;
            }
        });

        if (finalArr.length == 0) {
            showList(arr);
        } else {
            showList(finalArr);
        }
    }
}
// // if (el.price > 1501 && el.price <= 2000) {
//       return el;
//     }
function checkbox3() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    var checkBox = document.getElementById("myCheck3");
    var arr = JSON.parse(localStorage.getItem("Bags"));

    if (checkBox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.price > 1501 && el.price <= 2000) {
                return el;
            }
        });
        finalArr = finalArr.concat(data);
        showList(finalArr);
    } else {
        // console.log(arr);
        finalArr = finalArr.filter(function (el) {
            if (el.price < 1501) {
                return el;
            }
        });

        if (finalArr.length == 0) {
            showList(arr);
        } else {
            showList(finalArr);
        }
    }
}

//filter by brands

let brandArr = [];
function brand1() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    let checkbox = document.getElementById("brandCheck1");
    var arr = JSON.parse(localStorage.getItem("Bags"));
    if (checkbox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.brand === "ANOUK") {
                return el;
            }
        });

        brandArr = brandArr.concat(data);
        showList(brandArr);
    } else {
        brandArr = brandArr.filter(function (el) {
            if (el.brand != "ANOUK") {
                return el;
            }
        });
        if (brandArr.length == 0) {
            showList(arr);
        } else {
            showList(brandArr);
        }
    }
}
function brand3() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    let checkbox = document.getElementById("brandCheck3");
    var arr = JSON.parse(localStorage.getItem("Bags"));
    if (checkbox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.brand === "GRACILLA") {
                return el;
            }
        });

        brandArr = brandArr.concat(data);
        showList(brandArr);
    } else {
        brandArr = brandArr.filter(function (el) {
            if (el.brand != "GRACILLA") {
                return el;
            }
        });
        console.log(brandArr);
        if (brandArr.length == 0) {
            showList(arr);
        } else {
            showList(brandArr);
        }
    }
}
function brand10() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    let checkbox = document.getElementById("brandCheck10");
    var arr = JSON.parse(localStorage.getItem("Bags"));
    if (checkbox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.brand == "ANOUK") {
                return el;
            }
        });

        brandArr = brandArr.concat(data);
        showList(brandArr);
    } else {
        brandArr = brandArr.filter(function (el) {
            if (el.brand != "ANOUK") {
                return el;
            }
        });
        if (brandArr.length == 0) {
            showList(arr);
        } else {
            showList(brandArr);
        }
    }
}
