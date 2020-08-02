const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
    const item = {
        text,
        done: false,
    };
    items.push(item);
    populateList(items, itemsList);
    this.reset();
};
function populateList(items = [], itemsList) {
    itemsList.innerHTML = items.map((item, i) => {
        return `
        <li>
            <label for="">${item.text}</label>
        </li>
        `;
    }).join("");
};

addItems.addEventListener("submit", addItem);