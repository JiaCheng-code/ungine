'use strict';

/*
* 给多个element添加事件
* */

const addEventOnElement = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback)
    }
}

/*
* navbar
* button点击
* */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelector("[data-nav-link]")

const toggleNav = function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active")
}
navToggler.addEventListener("click", toggleNav);

const navClose = () => {
    navbar.classList.remove("active")
    navToggler.classList.remove("active")
}
addEventOnElement(navLinks, "click", navClose)
/*
* header滚动超出选中事件
* */
const header = document.querySelector("[data-header]");

const activeEl = function (){
    if(window.scrollY>100){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}
window.addEventListener("scroll",activeEl)