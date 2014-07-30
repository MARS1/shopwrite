var timeout; //Variable for timeout

//Add timeout via function call
function slideDownTimeout(){
    timeout = setTimeout(function(){
        if($('#writeValue').val() == 0) {   //Added on July 29th
	        $('#writeModule').slideUp();
        }
    },5000);
}

$(document).ready(function(){

	$('#writeModule').hide();
	$('#addItemBtn').on('click', function() {
		$('#writeModule').slideDown();
        slideDownTimeout(); //Add timeout
	});

    //When key is pressed in input clear timeout and restart
    $('#writeModule input').keydown(function(){
        console.log('keyup');
        clearTimeout(timeout); //Clear timeout
        slideDownTimeout(); //Restart timeout
    });

	// Trying to target li's inside of itemUl to set an event to be tiggered when the li is clicked I want the styles on the span and p tags to change when the li is clicked.
	$('.itemWrapper span').on('click', function(){
        $(this).toggleClass('checkedOff checkedOn')
            .siblings('p') //Targets siblings next to original target
            .toggleClass('listNeed listGot'); //Toggle Class either adds or removes class based on whether it exists on element
        console.log($(this)[0]); //Grabs HTML for target
	});

	// Toggle Switch functions
	var switchBtn = $('.switchBtn');
	var switchTrack = $('.switchTrack');
	$('p.need').on('click', function(){
		if($(switchBtn).hasClass('right')) {
			$(this).removeClass('right').addClass('left');
		} else {
			$(this).addClass('left');
		}
		//Would change to class and use toggle
	})
	$('p.got').on('click',function(){
		if($(switchBtn).hasClass('left')) {
			$(this).removeClass('left').addClass('right');
		} else {
			$(this).addClass('right');
		}
	})
    switchTrack.click(function(){ //Suggested functionality for switch button
        switchBtn.toggleClass('clicked');
    });


	// When write button is clicked item is added to menu list
	$('#writeBtn').on('click', function(e){
		// Get value from input
		var userInput = $('#writeValue').val();
		e.preventDefault();
		//Target List and add item
		$('ul.itemUl').prepend(
				'<li>' +
				'<span class="checkedOff"></span>' +
				'<p class="listNeed">' + userInput + '</p>' +
				'<span class="delete"></span></li>'
			);
	})


	// User hits enter to input

	$('#writeValue').keypress(function(e){
		if(e.which == 13) {
			$('#writeBtn').click();
			e.preventDefault();
		}
	});

	// Switch toggle needs to have additional interactions, click and drag slider button and press on opposite ends of the track to move it as well as give it a smoother transition effect.

	// Delete button to remove list item
	$('.itemWrapper').on('click', 'span.delete', function(){
		$(this).parent().slideUp();
	});
	// List item will have to toggle from got to need state (on/off state) when the li is clicked but they should also be adding and removing an attribute to class the sorting

	//  The sorting for the Still need and Got it need to bring filtered list items to the top. Example would be all items with the Got attribute will be pulled to the top or prepended.
});

