;(function($){
	var activitiyNew = {
		event:function(){
			var self = this;
			var activeClass = "active",
				selectedClass = "selected",
				$activitiesTab = $(".activitiesTab"), // 顶部导航
				$step2Read = $("#step2Read"), // 切换状态
				$submitInfoNext = $("#submitInfoNext"); // 下一步

			// 底部tab
			$("#policyTab>a").on(TELCOME.click_event,function(){
				var $this = $(this),
					contentID = $this.data("tab");
				if($this.hasClass(activeClass)) {
					return false;
				}
				$this.addClass(activeClass).siblings("."+activeClass).removeClass(activeClass);
				$("#"+contentID).show().siblings().hide();

			}).eq(0).trigger("click");

			// 品牌选择
			$("#page1brandForm>a").on(TELCOME.click_event,function(){
				var $this = $(this);
				if($this.hasClass("all")) {
					$this.toggleClass(activeClass);
					return false;
				}
				$this.toggleClass(selectedClass);
			})

			// 下拉层确定
			$(".selectDialog .btnLay button").on(TELCOME.click_event,function(){
				$(".selectBox.active").removeClass(activeClass);
			})
			// 顶部导航tab切换
			$activitiesTab.find(">a").on(TELCOME.click_event,function(){
				var $this = $(this),
					objID = $this.data("id"),
					$obj = $("#"+objID);
				// 初次进入，不可点第二页信息填写
				if($step2Read.val()=="true") {
					TELCOME.alert({
						"title":'提示',
						"content":'<div class=" f16 pl20"><i class="iconfont icon-tishi vm mr10" style="font-size:60px;"></i>请先配置活动基本信息，然后点击下一步！</div>',
						"callBack":function(){
							$("#modalTip").modal("hide");
						}
					})
					return false;	
				}
				$this.addClass(activeClass);
				if(objID=="step1") {
					$obj.show().siblings(".step").hide();
					$this.siblings("a").removeClass(activeClass);
					$step2Read.val("true");
				}
			});
			// 基本信息填写完毕，下一步提交事件
			$submitInfoNext.on(TELCOME.click_event,function(){
				// 判断基本信息是否填写完毕



				// 跳转第二页信息填写
				$step2Read.val("false");  // 设置状态
				$activitiesTab.find(">a").eq(1).trigger(TELCOME.click_event);
				$("#step2").show().siblings(".step").hide();
				$(".content").scrollTop(0);
				self.pageSecoundEvent();  //第二页事件初始化
			})
			// 活动范围 营业厅搜索
			$("#search1").on(TELCOME.click_event,function(){
				// 判断
				TELCOME.alert({
					"title":'提示',
					"content":'<div class=" f16 pl20"><i class="iconfont icon-tishi vm mr10" style="font-size:60px;"></i>请先选择“<span class="font-color-red">活动范围</span>”哦</div>',
					"callBack":function(){
						alert("123");
						$("#modalTip").modal("hide");
					}
				})
			})
			// 活动机型 搜索
			$("#search2").on(TELCOME.click_event,function(){
				// 判断
				TELCOME.alert({
					"title":'提示',
					"content":'<div class=" f16 pl20"><i class="iconfont icon-tishi vm mr10" style="font-size:60px;"></i>请先选择“<span class="font-color-red">活动机型</span>”哦</div>',
					"callBack":function(){
						alert("123");
						$("#modalTip").modal("hide");
					}
				})
			})
			// 活动机型 搜索
			$("#search3").on(TELCOME.click_event,function(){
				// 判断
				TELCOME.alert({
					"title":'提示',
					"content":'<div class=" f16 pl20"><i class="iconfont icon-tishi vm mr10" style="font-size:60px;"></i>请先选择“<span class="font-color-red">机型什么的</span>”哦</div>',
					"callBack":function(){
						alert("123");
						$("#modalTip").modal("hide");
					}
				})
			})

			//上一步
			$("#backStep1").on(TELCOME.click_event,function(){
				$activitiesTab.find(">a").eq(0).trigger(TELCOME.click_event);
				$("#step2Read").val("true");
				$(".content").scrollTop(0);
			})
		},
		submit:function(){
			TELCOME.alert({
				"title":'提示',
				"content":'<div class=" f16 pl20 font-color-orange"><i class="iconfont icon-success vm mr10" style="font-size:60px;"></i>活动提交成功！</div>',
				"callBack":function(){
					alert("这里跳转活动列表页");
					$("#modalTip").modal("hide");
				}
			})
		},
		// 活动目标 table表格
		tableEvent:function(){
			var self = this;
			var $activitiesTargetTable = $("#activitiesTargetTable tbody"),
				classNameAdd = "shopStandardAdd",
				classNameReduce = "shopStandardReduce";
			// 地市选择
			$activitiesTargetTable.find("a.city").off(TELCOME.click_event).on(TELCOME.click_event,function(){
				var $this = $(this),
					$thisSpan = $this.find("span"),
					$thisTbody = $this.closest("tbody");
				if($thisSpan.hasClass(classNameAdd)) {
					$thisSpan.removeClass(classNameAdd).addClass(classNameReduce);
					$thisTbody.find("tr[data-type='district']").show();
					$activitiesTargetTable.find("a.t2 span."+classNameReduce).removeClass(classNameReduce).addClass(classNameAdd);
				} else {
					$thisSpan.removeClass(classNameReduce).addClass(classNameAdd);
					$thisTbody.find("tr[data-type='district']").hide();
					$this.closest("tr").siblings().hide();
				}
			})
			// 区县选择
			$activitiesTargetTable.find("a.t2").off(TELCOME.click_event).on(TELCOME.click_event,function(){
				var $this = $(this),
					$thisSpan = $this.find("span"),
					$thisTbody = $this.closest("tbody"),
					thisID = $this.data("id");
				if($thisSpan.hasClass(classNameAdd)) {
					$thisSpan.removeClass(classNameAdd).addClass(classNameReduce);
					$thisTbody.find("tr[data-branch='"+thisID+"']").show();
				} else {
					$thisSpan.removeClass(classNameReduce).addClass(classNameAdd);
					$thisTbody.find("tr[data-branch='"+thisID+"']").hide();
				}
			})
		},
		pageSecoundEvent:function(){
			var self = this;
			var activeClass = "active",
				selectedClass = "selected";
			// 品牌选择
			$("#ActivityTarget>a").off(TELCOME.click_event).on(TELCOME.click_event,function(){
				var $this = $(this);
				if($this.hasClass("all")) {
					$this.toggleClass(activeClass);
					return false;
				}
				$this.toggleClass(selectedClass);
			})
			// 提交新建活动信息
			$("#submitActivity").off(TELCOME.click_event).on(TELCOME.click_event,function(){
				// 判断信息是否都填写完成
				// ajax提交在submit事件内
				self.submit();
			})

			// 表格事件
			self.tableEvent();
		},
		init:function(){
			this.event();
		}
	}

	$(function(){
		activitiyNew.init();
	})
})(jQuery);