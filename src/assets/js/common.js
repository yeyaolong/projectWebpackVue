if ("undefined" == typeof jQuery) throw new Error("TELCOME JavaScript requires jQuery"); !
"TELCOME" in window || (window.TELCOME = {}),
"helper" in window.TELCOME || (window.TELCOME.helper = {}),
"vars" in window.TELCOME || (window.TELCOME.vars = {}),
window.TELCOME.vars.icon = " iconfont ",
TELCOME.vars.touch = "ontouchstart" in window;
var b = navigator.userAgent;
TELCOME.vars.webkit = !!b.match(/AppleWebKit/i),
TELCOME.vars.safari = !!b.match(/Safari/i) && !b.match(/Chrome/i),
TELCOME.vars.android = TELCOME.vars.safari && !!b.match(/Android/i),
TELCOME.vars.ios_safari = !!b.match(/OS ([4-9])(_\d)+ like Mac OS X/i) && !b.match(/CriOS/i),
TELCOME.vars.ie = window.navigator.msPointerEnabled || document.all && document.querySelector,
TELCOME.vars.old_ie = document.all && !document.addEventListener,
TELCOME.vars.very_old_ie = document.all && !document.querySelector,
TELCOME.vars.firefox = "MozAppearance" in document.documentElement.style,
TELCOME.vars.non_auto_fixed = TELCOME.vars.android || TELCOME.vars.ios_safari,
TELCOME.click_event = TELCOME.vars.touch && jQuery.fn.tap ? "tap": "click"

TELCOME.alert = function(obj){
	var alertOBJ = {
		title:obj.title || '提示',
		content:obj.content || "",
		closeCallBack:obj.closeCallBack || function(){},
		callBack:obj.callBack || function(){}
	}
	if(!$("#modalTip").length>0) {
		var html = '<div class="modal fade" tabindex="-1" role="dialog" id="modalTip">'+
			'<div class="modal-dialog" role="document">'+
			    '<div class="modal-content">'+
			      '<div class="modal-header">'+
			        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
			        '<h4 class="modal-title" id="modalTipTitle"></h4>'+
			      '</div>'+
			      '<div class="modal-body" id="modalTipContent"></div>'+
			      '<div class="modal-footer">'+
			        '<button type="button" class="btn btn-default" id="modalTipCancle">取消</button>'+
			        '<button type="button" class="btn btn-primary" id="modalTipSubmit">确定</button>'+
			      '</div>'+
			    '</div>'+
			  '</div>'+
			'</div>';
		$("body").append(html);
	}
	$("#modalTipTitle").html(alertOBJ.title);
	$("#modalTipContent").html(alertOBJ.content);
	$("#modalTipSubmit").off(TELCOME.click_event).on(TELCOME.click_event,function(){
		alertOBJ.callBack();
	})
	$("#modalTip").modal("show");
	$("#modalTipCancle").off(TELCOME.click_event).on(TELCOME.click_event,function(){
		alertOBJ.closeCallBack();
		$("#modalTip").modal("hide");
	})
}


;(function($){
	var common = {
		event:function(){
			var self = this;
			var activeClass = "active",
				selectedClass = "selected";
			// 左侧菜单 下拉
			$(".nav-list").find(" > li > a").on(TELCOME.click_event,function(){
				var $this = $(this),
					className = "open",
					thisLi = $this.closest("li"),
					thisUl = $this.siblings("ul");
				if(thisLi.hasClass(className)) {
					thisLi.removeClass(className);
					thisUl.slideUp();
				} else {
					$(".nav-list>li[class!='active open']").removeClass(className).find(".submenu").slideUp('fast');;
					thisLi.addClass(className);
					thisUl.slideDown('fast');
				}
			})

			// 左侧菜单 收缩
			$("#sidebar-collapse").on(TELCOME.click_event,function(){
				var $this = $(this),
					$sidebar = $(".sidebar"),
					className = "menu-min";
				if($sidebar.hasClass(className)) {
					$sidebar.removeClass(className);
				} else {
					$sidebar.addClass(className).find(".submenu").hide();;
				}
			})

			// 下拉功能
			$(".selectBox").find(">a").on(TELCOME.click_event,function(){
				var $this = $(this);
				if($this.hasClass(activeClass)) {return false;}
				$(".selectBox.active").removeClass(activeClass);
				$this.closest(".selectBox").addClass(activeClass);
			})

			$(document).on(TELCOME.click_event,function(e){
				if($(e.target).closest(".selectBox").hasClass(activeClass)) {
					return false;
				}
				$(".selectBox.active").removeClass(activeClass);
			})

		},
		init:function(){
			this.event();
		}
	}
	$(function(){
		common.init();
	})
})(jQuery);
