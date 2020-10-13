class AutoComplete {
  constructor(el) {
    el.innerHTML = `
    <div><input type="text"></input></div>
    <div><textarea class="suggestions" readonly></textarea></div>
    `;

    this.suggestBox = el.querySelector(".suggestions");
    this.searchBox = el.querySelector("input");
    this.searchBox.addEventListener("keyup", this.showSearchResults);
  }

  showSearchResults = () => {
    const results = this.search();
    if (results.length > 0) {
      this.suggestBox.style.display = "block";
      this.suggestBox.innerHTML = results.sort().join("\n");
    } else {
      this.suggestBox.style.display = "none";
      this.suggestBox.innerHTML = "";
    }
  };

  search = () => {
    const searchTerm = this.searchBox.value;
    if (searchTerm.length > 0) {
      return data.filter((d) => d.indexOf(searchTerm) > -1);
    }
    return [];
  };
}

const e1 = document.createElement("div");
e1.className = "wrapper";
document.body.appendChild(e1);
const c1 = new AutoComplete(e1);

const data = [
  "foo",
  "bar",
  "baz",
  "apple",
  "iphone 8",
  "iphone x",
  "iphone 10",
  "iphone 11",
];
