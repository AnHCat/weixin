//jQuery是一个js库，它为我们封装了许多繁琐尔常用的功能
//只需要调用它内部的方法就能轻松实现炫酷的效果
//jQuery基本语法:$(select).action();
//1.使用$符号定义jQuery函数
//2.select为选择器，完全兼容css选择器
//3.action()为要执行的函数

//当前页面
var nowpage=0;
//jQuery入口函数
$(document).ready(function(){
		//获取屏幕宽高
		var width=window.innerWidth;
		var height=window.innerHeight;
		
		
		//计算最外层大盒子的宽高 
		$(".content").width(width);
		$(".content").height(6*height);
		//计算每个页面的宽高
		$(".page").width(width);
		$(".page").height(height);
		
		
		//触控监听  监听content
		$(".content").swipe({
			swipe:function(event,direction,distance,duration,fingerCount){
				if(direction=="up"){
					nowpage=nowpage+1;
				}
				else if(direction=="down"){
					nowpage=nowpage-1;
				}
				if(nowpage<0){
					nowpage=0;
				}
				if(nowpage>5){
					nowpage=5;
				}
				
				//动画：移动content盒子的位置
				$(".content").animate({top:nowpage*-100+"%"},{duration:500,complete:animations()});
			}
		});
		//第一页动画
		//1.楼房淡入   fadeIn(淡入时间)
		$(".page1-building").fadeIn(1000,function(){
			//2.飞机变大
			$(".page1-avatar").animate({width:"70%"},{duration:2000});
		});
		 
});

function animations(){
	//第二个页面
	if(nowpage==1){
		$(".page2-bg").fadeIn(1000,function(){
			
			$(".page2-farm").fadeIn(1000,function(){
				$(".page2-it").fadeIn(1000);
			});
		});
	}
	if(nowpage==2){
		$(".page2-bg").hide();
		$(".page2-farm").hide();
		$(".page2-it").hide();
		
		
		$(".page3-bus").animate({left:"-100%"},{duration:2000});
		$(".page3-avatar").animate({right:"50%"},{duration:3000,complete:function(){
			$(".page3-title,.page3-lastTitle").fadeOut("slow");
			$(".page3-avatar,.page3-station").fadeOut("slow",function(){
				$(".page3-wall").fadeIn("slow",function(){
					$(".page3-myAvatar").fadeIn("slow",function(){
						$(".page3-space").animate({width:"30%"},{duration:1000,complete:function(){
							$(".page3-where").animate({width:"40%"},{duration:1000});}
						});
						
					});
				});
			});
			
		}});
		$(".page3-title").fadeIn(1000,function(){
			$(".page3-lastTitle").fadeIn(1000);
		});
	}
	if(nowpage==3){
		$(".page5-avatar").animate({top:"50%"},{duration:4000,complete:function(){
			$(".page5-runTa").animate({width:"80%"},{duration:2000});}})
	}
	if(nowpage==4){
		
	}
	if(nowpage==5){
		
	}
}

function start(img){
	img.src="img/images/lightOn.png";
	$(".page4-bg,.page4-title,.page4-guide").fadeOut("slow",function(){
		$(".page4-onBg").fadeIn("slow",function(){
			$(".page4-you").fadeIn("slow");
		});
	});
}
 function music(obg){
 	
 	var audio=$("#mp3")[0];
 	if(audio.paused)
 		{
 			audio.play();
 			obg.src="img/images/musicBtn.png";
 		}
 	else{
 		audio.pause();
 		obg.src="img/images/musicBtnOff.png";
 	}
 }
function right(){
	console.log(1)
	$(".page6-bg").fadeOut("slow",function(){
		$(".page6-avatar").fadeOut("slow",function(){
			$(".page6-Text").fadeOut("slow",function(){
				$(".page6-right").fadeOut("slow",function(){
					$(".page6-email").fadeIn("slow",function(){
							$(".page6-logo").fadeIn("slow",function(){
								$(".page6-star").fadeIn("slow",function(){
									$(".page6-avatar1").fadeIn("slow",function(){
										$(".page6-Ta").fadeIn("slow");
									});
								});
							});
					});
				
					
					
					
				});
			});
		});
	});
}
