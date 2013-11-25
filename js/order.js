
// Document Ready
$(function() {
	// Initialize Cart
	var cart = {
		name: null,
		address1: null,
		zip: null,
		phone: null,
		items: []
	}

	$('.add-to-cart').click(function() {
		var newCartItem = {
			type: this.getAttribute('data-type'),
			name: this.getAttribute('data-name'),
			size: this.getAttribute('data-size'),
			price: this.getAttribute('data-price'),
			index: cart.items.length
		};

		// push the new item onto the carts items array
		cart.items.push(newCartItem);

		// Render item in the cart on the order page.
		renderCart(cart, $('.cart-container'));
	});

});


function renderCart(cart, container) {
	var i, item, instance;
	var cost = 0;
	container.empty();
	for(i = 0; i < cart.items.length; i++) {
		item = cart.items[i];
		instance = $('#cart .template').clone();
		instance.find('.name').html(item.name);
		instance.find('.size').html(item.size);
		instance.find('.price').html("$" + item.price);
		cost += parseInt(item.price);
		instance.removeClass('template');
		container.append(instance);
	}
	var tax = parseInt(cost) * .095;
	cost = cost.toFixed(2);
	tax = tax.toFixed(2);
	$('.sub-total').html('Subtotal: $' + cost);
	$('.tax').html('Tax: $' + tax);
	$('.total').html('Total: $' + parseInt(cost) + parseInt(tax);

}