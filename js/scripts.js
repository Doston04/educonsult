const headerTop = document.querySelector(".header__info")
const headerNavigation = document.querySelector(".header__navigation")
const mobileHeaderInner = document.querySelector(".mobileHeader__inner")
window.addEventListener("scroll", () => {
    const main = document.querySelector(".main")
    if (this.scrollY > headerTop.scrollHeight) {
        headerNavigation.classList.add("setFixed")
        headerNavigation.style.backgroundColor = "#ffffff"
        main.style.marginTop = `${headerNavigation.scrollHeight}px`
    } else {
        headerNavigation.classList.remove("setFixed")
        headerNavigation.style.backgroundColor = ""
        main.style.marginTop = 0
    }
})

console.log(headerNavigation.scrollHeight);

const hamburger = document.querySelector(".hamburger")
const span1 = document.querySelector("#span1")
const span2 = document.querySelector("#span2")
const span3 = document.querySelector("#span3")
const mobileHeader = document.querySelector(".mobileHeader")
const body = document.querySelector("body")
const logo = document.querySelector("#logoHeader")
const logoMobile = document.querySelector("#logoMobile")

let clickIt = false
function toggleHeaderNavigation() {
    if (clickIt) {
        headerNavigation.style.backgroundColor = "#ffffff"
        clickIt = false
    } else {
        headerNavigation.style.backgroundColor = ""
        clickIt = true
    }
}

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("mobileHamburger")
    span1.classList.toggle("rotate45deg")
    span2.classList.toggle("hidden")
    span3.classList.toggle("rotate-45deg")
    mobileHeader.classList.toggle("hidden")
    body.classList.toggle("overflow-y-hidden")
    headerTop.classList.toggle("hidden")
    logo.classList.toggle("hidden")
    logoMobile.classList.toggle("hidden")
    toggleHeaderNavigation()
})

const servicesMobileDiv = document.querySelector(".servicesMobileDiv")
const mobileServiceList = document.querySelector(".mobileServiceList")
const chevronService = document.querySelector(".chevron-down")

let clickService = false
function clickedService() {
    if (clickService) {
        mobileServiceList.style.display = "flex"
        chevronService.classList.add("activeToggle")
        clickService = false
    } else {
        mobileServiceList.style.display = "none"
        chevronService.classList.remove("activeToggle")
        clickService = true
    }
}

servicesMobileDiv.addEventListener("click", clickedService)

let dropdownContent = document.querySelector(".dropdown__content")
let footerDropdown = document.querySelector(".footerDropdown")
let chevronDown = document.querySelector(".chevron-down")

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

footerDropdown.addEventListener("mouseover", () => {
    dropdownContent.style.display = "flex"
    chevronDown.classList.add("activeToggle")
})

footerDropdown.addEventListener("mouseout", () => {
    dropdownContent.style.display = "none"
    chevronDown.classList.remove("activeToggle")
})

footerDropdown.addEventListener("click", toggleDropdown)

const currentYearSpans = document.querySelectorAll(".currentYear")
const currentYear = new Date().getFullYear()
currentYearSpans.forEach(year => {
    year.append(currentYear)
})