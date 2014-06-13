var timer;

function slideDownTimeout() {
	timeout = setTimeout(function(){
		$('.writeModule').slideUp();
	}, 2000);
}

$(document).ready(function(){

	$('#writeModule').hide();
	$('#addItemBtn').on('click', function() {
		$('#writeModule').slideDown();
		slideDownTimeout();
	});
	$('#writeModule input').keydown(function(){
		console.log('keyup');
		clearTimeout(timeout);
		slideDownTimeout();
	});
	// $('#writeBtn').on('click', function(){
	// 	setTimeout(function(){
	// 		$('writeModule').slideUp();
	// 	},7000);
	// });
	// Trying to target li's inside of itemUl to set an event to be tiggered when the li is clicked I want the styles on the span and p tags to change when the li is clicked.
	// Checking list items off

	$('#itemWrapper span').on('click', function(){
		$(this).toggleClass('checkedOff checkedOn').siblings('p').toggleClass('listNeed listGot');
	});

	// $('span.checkedOff').on('click', function(){
	// 	if($('span.checkedOff')) {
	// 		$(this).removeClass('checkedOff').addClass('checkedOn').child;
	// 		$(this).removeClass('listNeed').addClass('listGot');
	// 	}
	// });
	// Toggle Switch functions
	var switchBtn = $('.switchBtn');
	var switchTrack = $('.switchTrack');
	$('.switchTrack').on('click', function(){
		switchBtn.toggleClass('switchToggleRt');
	})
	$('p.need').on('click',function(){
		switchBtn.toggleClass('switchToggleLft');
	})
	$('p.got').on('click',function(){
		switchBtn.addClass('switchToggleRt');
	})

	$('span').on('click', function(){
		$(this).closest('span').toggleClass('checkedOn').siblings('p').toggleClass('listGot');
	});
	// When write button is clicked item is added to menu list

	// Switch toggle needs to have additional interactions, click and drag slider button and press on opposite ends of the track to move it as well as give it a smoother transition effect.

	// Delete button to remove list item

	// List item will have to toggle from got to need state (on/off state) when the li is clicked but they should also be adding and removing an attribute to class the sorting

	//  The sorting for the Still need and Got it need to bring filtered list items to the top. Example would be all items with the Got attribute will be pulled to the top or prepended.
});

