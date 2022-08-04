const headerTop = document.querySelector(".header__info")
window.addEventListener("scroll", () => {
    const headerNavigation = document.querySelector(".header__navigation")
    const main = document.querySelector(".main")
    if (this.scrollY > headerTop.scrollHeight) {
        headerNavigation.classList.add("setFixed")
        // main.classList.add("setMain")
        main.style.marginTop = `${headerNavigation.scrollHeight}px`
    } else {
        headerNavigation.classList.remove("setFixed")
        // main.classList.remove("setMain")
        main.style.marginTop = 0
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


