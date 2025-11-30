let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price){
    cart.push({name, price});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + ' added to cart!');
}

function displayCart(){
    const cartContainer = document.getElementById('cart-items');
    if(!cartContainer) return;
    cartContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `<p>${item.name} - $${item.price} <button onclick="removeItem(${index})">Remove</button></p>`;
        total += item.price;
    });
    document.getElementById('total').innerText = total.toFixed(2);
}

function removeItem(index){
    cart.splice(index,1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function checkout(){
    if(cart.length === 0){
        alert('Cart is empty!');
        return;
    }
    alert('Checkout successful! (Dummy Payment)');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

displayCart();
