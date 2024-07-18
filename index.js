document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item-input');
    const addItemButton = document.getElementById('add-item-button');
    const markPurchasedButton = document.getElementById('mark-purchased-button');
    const clearListButton = document.getElementById('clear-list-button');
    const itemList = document.getElementById('items-sold');


//Add item to ul when input is a string
addItemButton.addEventListener('click', () => {
    const item = itemInput.value.trim();
    if (item) {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => {
            li.classList.toggle('selected');
        });
        itemList.appendChild(li);
        itemInput.value = ''; // Clear the input field
        saveItemsToLocalStorage();
    }
});

//Removes item from selected and adds to purchased
markPurchasedButton.addEventListener('click', () => {
    const selectedItems = document.querySelectorAll('#item-sold .selected');
    selectedItems.forEach(item => {
        item.classList.toggle('purchased');
        item.classList.remove('selected');
    });
    saveItemsToLocalStorage();
});


// Clear the list
clearListButton.addEventListener('click', () =>{
    itemList.innerHTML = '';
    saveItemsToLocalStorage();
});

 // Function to add item to list
 function addItemToList(itemText) {
    const li = document.createElement('li');
    li.textContent = itemText;
    li.addEventListener('click', () => {
        li.classList.toggle('selected');
    });
    itemList.appendChild(li);
}

// Save items to local storage
function saveItemsToLocalStorage() {
    const items = [];
    itemList.querySelectorAll('li').forEach(li => {
        items.push({
            text: li.textContent,
            purchased: li.classList.contains('purchased')
        });
    });
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

});