const body = document.querySelector("body");
const centered = document.querySelector('.c-centered');
var styleEl = document.createElement('style');
class Text {
    constructor(text) {
        this.text = text;
        document.write(`<p class="kode-text">${this.text}</p>`)
        this.value = document.querySelectorAll('.kode-text');
        // console.log(this.value)
        this.value.innerHTML = this.text;
        this.center1();
        return this.value;
    }
    font() {
        const hex = arguments[0];
        const style = arguments[1];
        const decor = arguments[2];
    }
    // txt() {
    //     const value = document.querySelector('.text');
    //     value.classList.add('c-centered')
    //     var styleEl = document.createElement('style');
    //     styleEl.innerHTML = 'c-centered{color:blue; !important}';
    //     document.head.appendChild(styleEl);
    //     return this.text
    // }
    center1() {
        const kode_text = document.querySelector('.kode-text');
        console.log(kode_text)
        kode_text.setAttribute("style", "color: #007bff;");
    }
}

const text = new Text("Test");
// text.center()
kode.innerHTML = `hello, ${text.innerHTML}`;