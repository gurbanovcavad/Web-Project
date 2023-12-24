const btn1 = document.querySelector("#btn1");
const infoBtn = document.getElementById("info-btn");
const body = document.body;
const closeBtn = document.querySelector(".btn-close");
const button1 = document.getElementById("display1");
const animation = document.getElementById("animation");
const animation1 = document.getElementById("animation1");
const animationHolder = document.getElementById("animationHolder");
const animation2 = document.getElementById("animation2");
const uni=document.querySelector("#uni");
const tedris=document.querySelector("#tedris");
const elm=document.querySelector("#elm");
const telebe=document.querySelector("#telebe");
const diplom=document.querySelector("#diplom");
const xidmet=document.querySelector("#e-xidmetler");
const first=document.querySelector("#first");
const second=document.querySelector("#second");
const third=document.querySelector("#third");
const fourth=document.querySelector("#fourth");
const fifth=document.querySelector("#fifth");
const sixth=document.querySelector("#sixth");
const u_paragraph=document.getElementById("uni-paragraph");
const t_paragraph=document.getElementById("tedris-paragraph");
const e_paragraph=document.getElementById("elm-paragraph");
const telebe_paragraph=document.getElementById("telebe-paragraph");
const d_paragraph=document.getElementById("diplom-paragraph");
const x_paragraph=document.getElementById("xidmet-paragraph");

btn1.addEventListener("click", open);
closeBtn.addEventListener("click", closing);
button1.addEventListener("click", closing);
uni.addEventListener("mouseover",function(){
    first.src="./images/headerbtn2.png";
    u_paragraph.style.color="rgb(214, 143, 55)";
});
uni.addEventListener("mouseout",function(){
    first.src="./images/headerbtn.png";
    u_paragraph.style.color="#959595";
});

tedris.addEventListener("mouseover",function(){
    t_paragraph.style.color="rgb(214, 143, 55)";
    second.src="./images/headerbtn2.png";
});
tedris.addEventListener("mouseout",function(){
    t_paragraph.style.color="#959595";
    second.src="./images/headerbtn.png";
});

elm.addEventListener("mouseover",function(){
    e_paragraph.style.color="rgb(214, 143, 55)";
    third.src="./images/headerbtn2.png";
});
elm.addEventListener("mouseout",function(){
    e_paragraph.style.color="#959595";
    third.src="./images/headerbtn.png";
});

telebe.addEventListener("mouseover",function(){
    telebe_paragraph.style.color="rgb(214, 143, 55)";
    fourth.src="./images/headerbtn2.png";
});
telebe.addEventListener("mouseout",function(){
    telebe_paragraph.style.color="#959595";
    fourth.src="./images/headerbtn.png";
});

diplom.addEventListener("mouseover",function(){
    d_paragraph.style.color="rgb(214, 143, 55)";
    fifth.src="./images/headerbtn2.png";
});
diplom.addEventListener("mouseout",function(){
    d_paragraph.style.color="#959595";
    fifth.src="./images/headerbtn.png";
});

xidmet.addEventListener("mouseover",function(){
    x_paragraph.style.color="rgb(214, 143, 55)";
    sixth.src="./images/headerbtn2.png";
});
xidmet.addEventListener("mouseout",function(){
    x_paragraph.style.color="#959595";
    sixth.src="./images/headerbtn.png";
});

animationfunc1();
function animationfunc1() {
    animation2.style.display = "none";
    animation1.style.display = "inline";
    animation.style.width = "67px";
    animation.style.height = "67px";
    animation.style.marginLeft = "73px";
    animation.style.backgroundImage = "url(./images/adpu.png)";
    animation.style.animation = "rotating 5s linear infinite";
    animationHolder.style.paddingTop = "4px";
    setTimeout(animationfunc2,4000);
}

function animationfunc2() {
    animation1.style.display = "none";
    animation2.style.display = "inline";
    animation.style.width = "53px";
    animation.style.height = "53px";
    animation.style.marginLeft = "72px";
    animation.style.backgroundImage = "url(./images/study-inlogo.png)";
    animation.style.animation = "zoomAnimation 0.7s linear infinite";
    animationHolder.style.paddingTop = "21px";
    setTimeout(animationfunc1,4000);
}

function closing() {
    infoBtn.style.animationName = 'animation2';
    setTimeout(close, 150);
}

function close() {
    infoBtn.style.display = "none";
    button1.style.display = "none";
    infoBtn.style.animationName = "animation1";
    body.style.overflow = "scroll";
}

function open() {
    button1.style.display = "block";
    infoBtn.style.display = "block";
    body.style.overflow = "hidden";
}
window.onscroll = function() {
    var topbarHeight = document.getElementById("topbar").offsetHeight;
    var header = document.getElementById("header");

    if (window.pageYOffset > topbarHeight) {
        header.style.top = "0";
    } else {
        header.style.top = topbarHeight + "px";
    }
};
