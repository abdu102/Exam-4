const $ = (tag) => {
    return document.querySelector(tag);
}
const $$ = (tag) => {
    return document.querySelectorAll(tag)
}
function createElement(tagName, className, content) {
    const newElement = document.createElement(tagName);
    newElement.setAttribute('class', className);
    newElement.innerHTML = content;
    return newElement;
} 