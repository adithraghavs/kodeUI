const body = document.querySelector("body");
const centered = document.querySelector('.c-centered')
class Text {
    constructor(text) {
        this.text = text;
        const txt = document.createElement('p');
        txt.innerHTML = this.text;
        txt.classList.add('c-centered');
        txt.style.color = "#007bff";
        return txt
    }
    font() {
        const hex = arguments[0];
        const style = arguments[1];
        const decor = arguments[2];
    }
    txt() {
        const txt = document.createElement('p');
        txt.innerHTML = this.text;
        txt.classList.add('c-centered');
        txt.style.color = "#007bff";
        return txt;
    }
    center() {
        var styleEl = document.createElement('style');
        styleEl.innerHTML = 'c-centered{color:blue; !important}';
        document.head.appendChild(styleEl);
    }
}

const text = new Text("Test");
body.innerHTML = text.center();