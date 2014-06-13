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

	var $gotIt = 'gotIt'
	$('span').on('click', function(){
		$(this).closest('span').toggleClass('checkedOn').siblings('p').toggleClass('listGot');
		$(this).parent('li').attr('gotIt');
	});
	// Delete button to remove list item
	var $li = $('li');
	$('span.delete').on('click', function(){
		$(this).parent('li').remove('li');
	})
	// When write button is clicked item is added to menu list
	var $btn = $('#writeBtn');
	var $value = $('#writeValue').val();
	var $listItem = '<li attr="stillNeed"><span class="checkedOff"></span><p class="listNeed">' + $value + '</p><span class="delete"></span></li>';
	$btn.on('click', function(){
		event.preventDefault();
		if($value.length > 0) {
			$('ul itemUl > li').prepend($listItem);
		}
	})


	// Switch toggle needs to have additional interactions, click and drag slider button and press on opposite ends of the track to move it as well as give it a smoother transition effect.


	// List item will have to toggle from got to need state (on/off state) when the li is clicked but they should also be adding and removing an attribute to class the sorting

	//  The sorting for the Still need and Got it need to bring filtered list items to the top. Example would be all items with the Got attribute will be pulled to the top or prepended.
});

