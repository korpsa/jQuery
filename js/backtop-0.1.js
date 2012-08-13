// --------------------------------------------------------------------

// backtop plugin
(function(window, $){
	var Backtop = function(elem, options){
    	this.elem = elem;
      	this.$elem = $(elem);
      	this.options = options;
      	this.metadata = this.$elem.data('plugin-options');
    };

	Backtop.prototype = {
    	defaults: {
			scrollSelector: 'body, html',
			treshold: 100,
			scrollSpeed: 800
    	},
    	init: function() {
      		this.config = $.extend({}, this.defaults, this.options, this.metadata);
      		
      		var self = this;
      		
      		$(window).scroll(function () {
				if ($(this).scrollTop() > self.config.treshold) {
					self.$elem.fadeIn();
				} else {
					self.$elem.fadeOut();
				}
			});
	
			self.$elem.click(function () {
				$(self.config.scrollSelector).animate({
					scrollTop: 0
				}, self.config.scrollSpeed);
				return false;
			});

			return this;
    	}
    	
  	}

	Backtop.defaults = Backtop.prototype.defaults;

  	$.fn.backtop = function(options) {
    	return this.each(function() {
      		new Backtop(this, options).init();
    	});
  	};

	window.Backtop = Backtop;
})(window, jQuery);

// --------------------------------------------------------------------