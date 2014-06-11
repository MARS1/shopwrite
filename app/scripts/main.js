$(document).ready(function(){

	$('#writeModule').hide();
	$('#addItemBtn').on('click', function() {
		$('#writeModule').slideDown();
	})
	$('#writeModule').on('click', function(){
		$(this).setTimeout(function(){
			$(this).slideUp();
		},7000);
	});
	// Trying to target li's inside of itemUl to set an event to be tiggered when the li is clicked I want the styles on the span and p tags to change when the li is clicked.
	$('span.checkedOff').on('click', function(){
		if($('span.checkedOff')) {
			$(this).removeClass('checkedOff').addClass('checkedOn').child;
			$(this).removeClass('listNeed').addClass('listGot');
		}
	});
	// Toggle Switch functions
	var switchBtn = $('.switchBtn');
	var switchTrack = $('.switchTrack');
	$('p.need').on('click', function(){
		switchBtn.css('left', '0');
	})
	$('p.got').on('click',function(){
		switchBtn.css('left','49px');
	})
	// When write button is clicked item is added to menu list

	// Switch toggle needs to have additional interactions, click and drag slider button and press on opposite ends of the track to move it as well as give it a smoother transition effect.

	// Delete button to remove list item

	// List item will have to toggle from got to need state (on/off state) when the li is clicked but they should also be adding and removing an attribute to class the sorting

	//  The sorting for the Still need and Got it need to bring filtered list items to the top. Example would be all items with the Got attribute will be pulled to the top or prepended.
});

