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
		var prices = this.prices;
    	instance = $('#pizzas .template').clone();
    	instance.find('.name').html(this.name);
       	instance.find('.description').html(this.description);
  
    	if(instance.hasClass('for-order')) {
    		instance.find('.add-to-cart').attr({
    			'data-name': this.name,
    			'data-type': "pizza"
    		});
    		var sizes = ['Small', 'Medium', 'Large'];
    		var i;
    		for(i = 0; i < 3; i++) {
    			instance.find('.' + sizes[i]).attr('data-price', prices[i]);
    			instance.find('.' + sizes[i]).html(sizes[i] + ": $" + prices[i]);

    		}
    		/*instance.find('.small').attr('data-price', prices[0]);
    		instance.find('small').html("Small: $" + prices[0]);
    		instance.find('.medium').attr('data-price', prices[1]);
    		instance.find('medium').html("Medium: $" + prices[1]);
    		instance.find('.large').attr('data-price', prices[2]);    		
    		instance.find('large').html("Large: $" + prices[2]);*/
    	} else {
			instance.find('.prices').html('$' + prices[0] + '/$' + 
    			prices[1] + '/$' + prices[2]);
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
    		instance.find('.add-to-cart').attr({
    			'data-name': this.name,
    			'data-type': 'drink',
    			'data-price': this.price
    		});
      		instance.find('.add-to-cart').html("Add to Cart: $" + this.price);
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
    		instance.find('.add-to-cart').attr({
    			'data-name': this.name,
    			'data-type': 'dessert',
    			'data-price': this.price
    		});
       		instance.find('.add-to-cart').html("Add to Cart: $" + this.price);
    	} else {
    		instance.find('.prices').html('$' + this.price);
    	}
    	instance.removeClass('template');
    	// append instance to the desserts section
	    $('.desserts').append(instance);
	});
}