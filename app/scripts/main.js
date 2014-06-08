$(document).ready(function(){
	$('#writeModule').hide();
	$('.addItemBtn').click(function(){
		$('#writeModule').slideDown();
	})
	$('#writeBtn').on('click', function(){
		$(this).setTimeout(function(){
			$('#writeModule').slideUp();
		}, 7000);
	});
	$('ul.itemUl li').on('click', 'span', function(){
		if ($('this.checkedOff')) {
			$(this).removeClass('checkedOff').addClass('checkedOn');
			$(this).removeClass('listNeed').addClass('listGot');
		}
	});
	// if user clicks on write button without entering content wait 7 seconds before closing writeModule
	// else post to list

	// All posted list items start in default 'still need' mode and is prepended to the list of other previous still needed items. These items as a groupd (of still needed items) they are sorted together in the list
	//
	// Toggle event for the switch from Still need to Got it
	// When Got it is toggled all the items that have been checked out need to rise to the top of the list. All list items with the class of checked will be a part of this list and will be placed first before the still needed list items.
	// When an unchecked list item row is clicked the list item is given the class of checked
	// When delete is checked remove the item from the list
});

