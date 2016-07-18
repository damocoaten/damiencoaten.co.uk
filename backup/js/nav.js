$j(function() {
            var pull        = $j('.pull');
            menu        = $j('nav ul');
            menuHeight  = menu.height();
     
            $j(pull).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
            });

			$j(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
});