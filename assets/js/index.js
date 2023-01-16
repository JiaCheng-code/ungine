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
* 回到上一步事件
* */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]")
const activeEl = function () {
    if (window.scrollY > 100) {
        header.classList.add("active")
        backTopBtn.classList.add("active")
    } else {
        header.classList.remove("active")
        backTopBtn.classList.remove("active")
    }
}
window.addEventListener("scroll", activeEl)

/*
* button hero的hover弹出样式
* */
const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
    this.style.setProperty("--top", `${event.offsetY}px`)
    this.style.setProperty("--left", `${event.offsetX}px`)
}
addEventOnElement(buttons, "mousemove", buttonHoverRipple)

/*
* scroll reveal
* */
const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;
        if (isElementInsideWindow) {
            revealElements[i].classList.add("revealed")
        }
    }
}
window.addEventListener("scroll", revealElementOnScroll)
window.addEventListener("load", revealElementOnScroll)

