class CharCounter {
  constructor(el) {
    el.innerHTML = `
    <p class="log"></p>
    <textarea></textarea>
    `;

    this.log = el.querySelector(".log");
    this.textbox = el.querySelector("textarea");
    this.textbox.addEventListener("keyup", this.countChars);
  }

  countChars = () => {
    this.log.innerHTML = this.textbox.value.length;
  };
}

const e1 = document.createElement("div");
document.body.appendChild(e1);
const c1 = new CharCounter(e1);
