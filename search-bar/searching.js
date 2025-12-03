const input = document.querySelector("input");

const listItems = document.querySelectorAll("li");


// listning to the user input changes
input.addEventListener("input", filter_using_shorter_arrayFrom);


// 5. Shorter method while uisng array from . best method
function filter_using_shorter_arrayFrom() {
    let search = input.value.toLowerCase();
    const filteredList = arrayFromList.filter(li =>
        li.textContent.toLowerCase().includes(search)
    );

    listItems.forEach(li => li.style.display = "none");

    filteredList.forEach(li => li.style.display = "list-item");

}
//1. filterting using index of
function filter() {
    const search = input.value.toLowerCase(); s
    listItems.forEach(li => {
        const text = li.textContent.toLowerCase();
        const found = text.indexOf(search);

        if (found != -1 || search === '' || search == " ") {
            li.style.display = `list-item`;

        } else {
            li.style.display = 'none';
        }
    });
}


//2. filtering using filter method - includes
const arrayList = [];
listItems.forEach((items) => {
    arrayList.push(items); // pushing list items not strinngs
});
function filter_using_includes() {
    const search = input.value.toLowerCase();
    arrayList.forEach(li => {
        const value = li.textContent.toLowerCase();
        if (value.includes(search)) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }

    });
}


// 3. filter using map
function filter_using_map() {
    const search = input.value.toLowerCase();
    arrayList.forEach((items) => {
        const found = items.textContent.toLowerCase().indexOf(search);
        if (found != -1 || search === " ") {
            items.style.display = 'list-item';

        } else {
            items.style.display = 'none';
        }

    });
}

//4. filtering using aray form method
const arrayFromList = Array.from(listItems);
// this gets a list of items of the queryselector all into a array of items (nodel list or list of elements)

function filter_using_arrayFrom() {
    const search = input.value.toLowerCase();

    arrayFromList.forEach((li) => {
        const value = li.textContent.toLowerCase();
        if (value.includes(search)) {
            li.style.display = 'list-item';
        } else {
            li.style.display = 'none';
        }
    })
}




