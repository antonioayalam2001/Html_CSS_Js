const root = document.documentElement;
const dropDownTitleIcon = document.querySelector('.dropdown__title__icon');
const dropDownTitle = document.querySelector('.dropdown__title');
const dropDownList = document.querySelector('.dropdown__list');
const mainButton = document.querySelector('.main__button');
const floatingButton = document.querySelector('.floating__icon');

const icons = {
    instagram: "<i class=\"fa-brands fa-instagram\"></i>",
    twitter: '<i class="fa-brands fa-twitter"></i>',
    youtube: '<i class=\"fa-brands fa-youtube\"></i>'
}

const listItems = ['instagram', 'twitter', 'youtube'];


const iconTemplate = (path) => {
    return `<i class="${path}"></i>`
}

const listItemTemplate = (text, translateValue) => {
    return `<li class="dropdown__list__item">
         <button class="dropdown__button list__button" data-translate-value="${translateValue}%">
         <span class="text__truncate">${text}</span>
</button>
</li>`
}

const renderListItems = () => {
    dropDownList.innerHTML += listItems.map((item, index) => {
            return listItemTemplate(item, 100 * index)
        }
    ).join("")
}

window.addEventListener('load', () => {
    renderListItems();
})

const setDropDownProps = (deg,ht,opacity) => {
    root.style.setProperty("--rotate-arrow",deg !== 0 ? deg + "deg" : 0);
    root.style.setProperty("--dropdown-height",ht !== 0 ? ht + "rem" : 0);
    root.style.setProperty("--list-opacity",opacity);
}