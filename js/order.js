
// Document Ready
$(function() {
	$('.add-to-cart').click(addToCart());

	// Initialize Cart
	var cart = {
		name: null,
		address1: null,
		zip: null,
		phone: null,
		items: []
	}
});

function addToCart() {
	var newCartItem = {
		type: this.getAttribute('data-type'),
		name: this.getAttribute('data-name'),
		size: this.getAttribute('data-size'),
		price: this.getAttribute('data-price')
	};

	// push the new item onto the carts items array
	cart.items.push(newCartItem);

	// Render item in the cart on the order page.
	renderCart(cart, $('#cart-container'));
}

function renderCart(cart, container) {

}