;(function($){
	var activitiyUp = {
		event:function(){
			var self = this;
			var activeClass = "active",
				selectedClass = "selected"; // 下一步

		},
		init:function(){
			this.event();
		}
	}

	$(function(){
		activitiyUp.init();
	})
})(jQuery);