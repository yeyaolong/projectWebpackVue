;(function($){
	var activitiyList = {
		event:function(){
			var self = this;
			var activeClass = "active";


			// 下拉层确定
			// $(".selectDialog .btnLay button").on(TELCOME.click_event,function(){
			// 	$(".selectBox.active").removeClass(activeClass);
			// })

		},
		// 活动目标 table表格
		tableEvent:function(){
			var self = this;
			var $mailListTable = $("#mailListTable tbody"),
				activeClass = "active";
			// 选择
			$mailListTable.find("a.mailListLink").off(TELCOME.click_event).on(TELCOME.click_event,function(){
				var $this = $(this),
					thisShow = $this.data("show"),
					thisID = $this.data("id"),
					$thisTR = $this.closest("tr"),
					$thisTbody = $this.closest("tbody");
				thisShow == true ? function(){
					$this.addClass(activeClass);
				}() : function(){
					$this.removeClass(activeClass);
				}()
				if($this.hasClass("province")) {
					if(thisShow == true) {
						$("tbody."+thisID).show().find(".city").show();
						$this.data("show",false);
					} else {
						$("tbody."+thisID).hide().find(".city").hide();
						$this.data("show",true);
					}
					return;
				}
				if($this.hasClass("city")) {
					if(thisShow == true) {
						$thisTR.siblings("tr[data-city='"+thisID+"']").show();
						$this.data("show",false);
					} else {
						$thisTR.siblings("tr").hide().find("a."+activeClass).removeClass(activeClass).data("show",true);
						$this.data("show",true);
					}
					return;
				}
				if($this.hasClass("area")) {
					if(thisShow == true) {
						$thisTbody.find("tr[data-branch='"+thisID+"']").show();
						$this.data("show",false);
					} else {
						$thisTbody.find("tr[data-branch='"+thisID+"']").hide();
						$this.data("show",true);
					}
					return;
				}
			})
		},
		init:function(){
			this.event();
			this.tableEvent();
		}
	}

	$(function(){
		activitiyList.init();
	})
})(jQuery);