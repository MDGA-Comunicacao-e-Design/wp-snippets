jQuery( document ).ready(function() {

	var selectGF = jQuery('.gfield_select'),
      selectPH = jQuery(selectGF).val(),
      placeholderClass = 'placeholder-initial';
	
	if( selectPH == '' ) {
		selectGF.addClass(placeholderClass');
	} else {
		selectGF.removeClass(placeholderClass);
	}
	
	jQuery(selectGF).change(function(){
		if( selectGF.val() == '' ) {
			selectGF.addClass('placeholder-initial');
		} else {
			selectGF.removeClass('placeholder-initial');
		}	
	});
	
});
