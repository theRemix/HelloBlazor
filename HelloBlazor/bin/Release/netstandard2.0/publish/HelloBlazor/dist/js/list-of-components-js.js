// Simulate @NumItems
const numItems = new Proxy({ value: 0 }, {
    get: (obj, prop) => prop in obj ? obj[prop] : 0,
    set: (obj, prop, value) => {
        updateList(value);
        obj[prop] = value;
    }
});

// Simulate @NumItems = num
function renderListOfComponentsJS(num) {
    numItems.value = num;
}

function updateList(numItems) {

    const container = document.querySelector('#list-of-components-js-container');
    container.innerHTML = "";

    const createChild = (name, description) => {
        const liEl = document.createElement('li');

        const nameEl = document.createElement('h3');
        nameEl.innerText = name;

        const descriptionEl = document.createElement('p');
        descriptionEl.innerText = description;

        liEl.appendChild(nameEl);
        liEl.appendChild(descriptionEl);

        return liEl;
    }

    for (let i = 1; i <= numItems; i++)
        container.appendChild(createChild(`ChildComponent ${i}`, `Description ${i}`));

}
