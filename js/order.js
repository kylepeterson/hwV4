// Kyle Peterson
// Scripts for use with the ordering page

// Document Ready
$(function() {
	// Initialize Cart
	var cart = {
		name: null,
		address1: null,
		address2: null,
		zip: null,
		phone: null,
		items: []
	}

	$('.add-to-cart').click(function() {
		var newCartItem = {
			type: this.getAttribute('data-type'),
			name: this.getAttribute('data-name'),
			size: this.getAttribute('data-size'),
			price: this.getAttribute('data-price')
		};

		// push the new item onto the carts items array
		cart.items.push(newCartItem);

		// Render item in the cart on the order page.
		renderCart(cart, $('.cart-container'));
	});

	$('.place-order').click(function() {
		postCart(cart, $('.cart-form'));
	});

	$('.clear').click(function() {
		while(cart.items.length > 0) {
			cart.items.pop();
		}
		renderCart(cart, $('.cart-container'));
	});
});

// takes the current cart and displays it on the web page
// Takes in the cart object and the container to display the cart in
function renderCart(cart, container) {
	var i, item, instance;
	var cost = 0;
	var tax = 0;
	var total = 0;
	// Empty Container
	container.empty();
	// Render every cart item in the cart
	for(i = 0; i < cart.items.length; i++) {
		item = cart.items[i];
		// Create copy of template and fill in appropriate html
		instance = $('#cart .template').clone();
		instance.find('.name').html(item.name);
		instance.find('.size').html(item.size);
		instance.find('.price').html("$" + item.price);
		instance.find('.remove').attr('data-index', i);
		// Update cost
		cost += parseInt(item.price);
		instance.removeClass('template');
		// Append to cart container
		container.append(instance);
	}
	// set click handlers for all new remove buttons
	$('.remove').click(function() {
		var target = this.getAttribute('data-index');
		cart.items.splice(target, 1);
		renderCart(cart, $('.cart-container'));
	});

	// Take care of totals
	tax = parseInt(cost) * .095;
	total = parseInt(cost) + parseInt(tax);
	cost = parseInt(cost).toFixed(2);
	tax = parseInt(tax).toFixed(2);
	total = parseInt(total).toFixed(2);

	$('.sub-total').html('Subtotal: $' + cost);
	$('.tax').html('Tax: $' + tax);
	$('.total').html('Total: $' + total);
}

// Sends a post request to the server using the information the user inputs.
// takes in the cart object and the form containing the user data
function postCart(cart, cartForm) {
	// Fill in cart with correct data
	cart.name = cartForm.find('input[name="name"]').val();
	cart.address1 = cartForm.find('input[name="address1"]').val();
	cart.address2 = cartForm.find('input[name="address2"]').val();
	cart.zip = cartForm.find('input[name="zip"]').val();
	cart.phone = cartForm.find('input[name="phone"]').val();

	//Post data
	cartForm.find('input[name="cart"]').val(JSON.stringify(cart));
	cartForm.submit();
}