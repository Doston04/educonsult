const headerTop = document.querySelector(".header__info")
window.addEventListener("scroll", () => {
    const headerNavigation = document.querySelector(".header__navigation")
    if (this.scrollY > headerTop.scrollHeight) {
        headerNavigation.classList.add("setFixed")
    } else {
        headerNavigation.classList.remove("setFixed")
    }
})

const hamburger = document.querySelector(".hamburger")
const span1 = document.querySelector("#span1")
const span2 = document.querySelector("#span2")
const span3 = document.querySelector("#span3")
const mobileHeader = document.querySelector(".mobileHeader")
const body = document.querySelector("body")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("mobileHamburger")
    span1.classList.toggle("rotate45deg")
    span2.classList.toggle("hidden")
    span3.classList.toggle("rotate-45deg")
    mobileHeader.classList.toggle("hidden")
    body.classList.toggle("overflow-y-hidden")
})

const currentYearSpans = document.querySelectorAll(".currentYear")
const currentYear = new Date().getFullYear()
currentYearSpans.forEach(year => {
    year.append(currentYear)
})


