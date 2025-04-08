/**
 * Creates an order management system.
 * @returns {Object} An object with methods for managing orders.
 */
function createOrderSystem() {
    let orders = [];
    let nextId = 1;

    /**
     * Adds a new order.
     * @param {string} customer - The name of the customer.
     * @param {number} totalAmount - The total amount of the order.
     */
    function addOrder(customer, totalAmount) {
        const order = {
            id: nextId++, // Generate a unique order ID
            customer: customer,
            totalAmount: totalAmount
        };
        orders.push(order); // Add the new order to the orders array
    }

    /**
     * Removes an order by its unique ID.
     * @param {number} orderId - The unique ID of the order.
     */
    function removeOrder(orderId) {
        orders = orders.filter(order => order.id !== orderId); // Filter out the order by ID
    }

    /**
     * Returns the total revenue from all orders.
     * @returns {number} The total revenue from all orders.
     */
    function getTotalRevenue() {
        return orders.reduce((total, order) => total + order.totalAmount, 0); // Sum up all order amounts
    }

    /**
     * Returns the list of all orders.
     * @returns {Array} An array of order objects.
     */
    function listOrders() {
        return orders; // Return the array of orders
    }

    return {
        addOrder,
        removeOrder,
        getTotalRevenue,
        listOrders
    };
}

const orderSystem = createOrderSystem();

// DOM elements
const customerInput = document.getElementById('customer');
const totalAmountInput = document.getElementById('totalAmount');
const addOrderBtn = document.getElementById('addOrderBtn');
const ordersList = document.getElementById('ordersList');
const totalRevenueSpan = document.getElementById('totalRevenue');

// Event handler for adding an order
addOrderBtn.addEventListener('click', () => {
    const customer = customerInput.value;
    const totalAmount = parseFloat(totalAmountInput.value);

    if (customer && !isNaN(totalAmount) && totalAmount > 0) {
        orderSystem.addOrder(customer, totalAmount);
        renderOrders();
        updateTotalRevenue();

        // Clear input fields
        customerInput.value = '';
        totalAmountInput.value = '';
    } else {
        alert('Please enter valid data.');
    }
});

// Function to render the list of orders
function renderOrders() {
    const orders = orderSystem.listOrders();
    ordersList.innerHTML = ''; // Clear the current list
    
    orders.forEach(order => {
        const li = document.createElement('li');
        li.innerHTML = `${order.customer} - ${order.totalAmount} USD 
                        <button onclick="removeOrder(${order.id})">Remove</button>`;
        ordersList.appendChild(li); // Add the order item to the list
    });
}

// Function to update the total revenue display
function updateTotalRevenue() {
    const totalRevenue = orderSystem.getTotalRevenue();
    totalRevenueSpan.textContent = totalRevenue; // Update the total revenue text
}

// Function to remove an order by ID
function removeOrder(orderId) {
    orderSystem.removeOrder(orderId); // Remove the order from the system
    renderOrders(); // Re-render the list of orders
    updateTotalRevenue(); // Update the total revenue
}