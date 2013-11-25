// Kyle Peterson
// Populates the menu page of Dawg Pizza with the data found on the server.

// On Document Ready
$(function() {
	populatePizzas();
	populateDrinks();
	populateDesserts();
});

// Populates the pizza section of the menu
function populatePizzas() {
	var instance;
	$.each(com.dawgpizza.menu.pizzas, function() {
		// Create instance of pizza template
    	instance = $('#pizzas .template').clone();
    	instance.find('.name').html(this.name);
       	instance.find('.description').html(this.description);
  
    	if(instance.hasClass('for-order')) {
    		instance.find('.place-order').attr({
    			'data-name': this.name
    		});
    		instance.find('.small').html("Small: $" + this.prices[0]);
    		instance.find('.medium').html("Medium: $" + this.prices[1]);
    		instance.find('.large').html("Large: $" + this.prices[2]);
    	} else {
			instance.find('.prices').html('$' + this.prices[0] + '/$' + 
    			this.prices[1] + '/$' + this.prices[2]);
    	}
    	instance.removeClass('template');
    	// Append to meat or vegetarian section depending on vegetarian attribute
    	if(this.vegetarian) {
	    	$('.veggie-list').append(instance);
    	}
	    else {
	    	$('.meat-list').append(instance);
	    }
	});
}

// Populates the drinks section of the menu
function populateDrinks() {
	var instance;
	$.each(com.dawgpizza.menu.drinks, function() {
		// Create instance of drink template
    	instance = $('.drinks .template').clone();
    	instance.find('.name').html(this.name);
    	if(instance.hasClass('for-order')) {
    		instance.find('.place-order').attr({
    			'data-name': this.name,
    			'data-type': 'drink',
    			'data-price': this.price
    		});
      		instance.find('.place-order').html("Add to Cart: $" + this.price);
    	} else {
    		instance.find('.prices').html('$' + this.price);
    	}
    	instance.removeClass('template');
    	// Append instance to the drinks section
	    $('.drinks').append(instance);
	});
}

// Populates the desserts section of the menu
function populateDesserts() {
	var instance;
	$.each(com.dawgpizza.menu.desserts, function() {
		// Create instance of dessert template
    	instance = $('.desserts .template').clone();
    	instance.find('.name').html(this.name);
    	instance.find('.prices').html('$' + this.price);
    	if(instance.hasClass('for-order')) {
    		instance.find('.place-order').attr({
    			'data-name': this.name,
    			'data-type': 'dessert',
    			'data-price': this.price
    		});
       		instance.find('.place-order').html("Add to Cart: $" + this.price);
    	} else {
    		instance.find('.prices').html('$' + this.price);
    	}
    	instance.removeClass('template');
    	// append instance to the desserts section
	    $('.desserts').append(instance);
	});
}