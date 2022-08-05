const headerTop = document.querySelector(".header__info")
window.addEventListener("scroll", () => {
    const headerNavigation = document.querySelector(".header__navigation")
    const main = document.querySelector(".main")
    if (this.scrollY > headerTop.scrollHeight) {
        headerNavigation.classList.add("setFixed")
        main.style.marginTop = `${headerNavigation.scrollHeight}px`
    } else {
        headerNavigation.classList.remove("setFixed")
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

let dropdownContent = document.querySelector(".dropdown__content")
let footerDropdown = document.querySelector(".footerDropdown")

let chevronDown = document.querySelector(".chevron-down")

footerDropdown.addEventListener("mouseover", () => {
    dropdownContent.style.display = "flex"
    chevronDown.classList.add("activeToggle")
})

footerDropdown.addEventListener("mouseout", () => {
    dropdownContent.style.display = "none"
    chevronDown.classList.remove("activeToggle")
})


let clicked = false
function toggleDropdown() {
    if (clicked) {
        dropdownContent.style.display = "flex"
        chevronDown.classList.add("activeToggle")
        clicked = false
    } else {
        dropdownContent.style.display = "none"
        chevronDown.classList.remove("activeToggle")
        clicked = true
    }
}


footerDropdown.addEventListener("click", toggleDropdown)


const currentYearSpans = document.querySelectorAll(".currentYear")
const currentYear = new Date().getFullYear()
currentYearSpans.forEach(year => {
    year.append(currentYear)
})