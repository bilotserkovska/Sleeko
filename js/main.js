$(document).ready(function(){
    $('a.scroll').click(function(){
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000);
        return false;
    });
    $('.portfolio, .what-text').on('inview', function(event, isInView){
    	if (isInView && $(this).hasClass('portfolio')) {
    		$('.holder_1').animate({
    			opacity: 1
    		},800, function(){
    			$('.holder_2').animate({
    				opacity: 1
    			},800, function(){
    				$('.holder_3').animate({
    					opacity: 1
    				},800, function(){
    					$('.holder_4').animate({
    						opacity: 1
    					},800, function(){
    						$('.holder_5').animate({
    							opacity: 1
    						},800, function(){
    							$('.holder_6').animate({
    								opacity: 1
    							},800, function(){
    								$('.holder_7').animate({
    									opacity: 1
    								},800, function(){
    									$('.holder_8').animate({
    										opacity: 1
    									},800, function(){
    										$('.holder_9').animate({
    											opacity: 1
    										},800);
    									});
    								});
    							});
    						});
    					});
    				});
    			});
    		});
    	}
    	if (isInView && $(this).hasClass('what-text')) {
    		$('.what-text-left').animate({
    			opacity: 1
    		},800, function(){
    			$('.what-text-center').animate({
    				opacity: 1
    			},800, function(){
    				$('.what-text-right').animate({
    					opacity: 1
    				},800);
    			});
    		});
    	}
    });
});

    