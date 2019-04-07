;(function($){
	var activitiyList = {
		event:function(){
			var self = this;
			var activeClass = "active";

			// 新增物料提交
			$("#submitMaterial").on(TELCOME.click_event,function(){
				$("#newMaterial").modal("hide");
				alert("提交成功");
			})

			// 删除物料
			$("#deleteMaterial").on(TELCOME.click_event,function(){
				TELCOME.alert({
					title:'删除提示',
					content:'<div>确定要删除“<span class="font-color-red">物料名称1</span>”、“<span class="font-color-red">物料名称1</span>”、“<span class="font-color-red">物料名称1</span>”、“<span class="font-color-red">物料名称1</span>”吗？</div>',
					callBack: function(){
						alert("删除成功");
						$("#modalTip").modal("hide");
					}
				});
			})

		},
		// 活动目标 table表格
		tableEvent:function(){
			var self = this;
			var $activitiesTargetTable = $(".activitiesTargetTable tbody"),
				activeClass = "active";
			// 选择
			$activitiesTargetTable.on(TELCOME.click_event," tr",function(){
				var $this = $(this),
					$checkboxCircle = $this.find(".checkboxCircle");
				if($checkboxCircle.hasClass(activeClass)) {
					$checkboxCircle.removeClass(activeClass)
				} else {
					$checkboxCircle.addClass(activeClass)
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