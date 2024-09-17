// Selecting elements
const addItemBtn = document.getElementById('addItemBtn');
const itemNameInput = document.getElementById('itemName');
const itemAmountInput = document.getElementById('itemAmount');
const itemList = document.getElementById('itemList');
const totalAmountSpan = document.getElementById('totalAmount');
const totalItemSpan = document.getElementById('totalItems')

let totalAmount = 0;
let totalItems = 0;

// Function to add item to the list
function addItem() {
    const itemName = itemNameInput.value;
    const itemAmount = parseFloat(itemAmountInput.value);

    if (itemName !== '' && !isNaN(itemAmount) && itemAmount > 0) {
        // Create a new list item
        const li = document.createElement('li');
        li.innerHTML = `${itemName} -  ${itemAmount.toFixed(2)} Tk`;

        // Append the list item to the UL
        itemList.appendChild(li);

        // Update the total amount
        totalAmount += itemAmount;
        totalItems += 1;

        // Disply updated Totals
        totalAmountSpan.innerText = totalAmount.toFixed(2);
        totalItemSpan.innerText = totalItems;

        // Clear the inputs
        itemNameInput.value = '';
        itemAmountInput.value = '';
    } else {
        alert('Please enter a valid item name and amount.');
    }
}

// Add event listener to the button
addItemBtn.addEventListener('click', addItem);


