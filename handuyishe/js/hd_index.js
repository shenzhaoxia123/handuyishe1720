//公共头部
$("#wrap_header").load("common.html #hd_common_header",function(){
		
})
//banner轮播图




//互联网图标
$("#hd_intBrand_logo").on("mouseenter","li",function(){
	
	$(this).find("img:first").css("display","none").end().find("img:last").css("display","block");
}).on("mouseleave","li",function(){
	$(this).find("img:last").css("display","none").end().find("img:first").css("display","block");
})
//选项卡 明星家族
$("#hd_starTab_tab").on("mouseenter","li",function(){
	var index = $(this).index();
	$(this).addClass("starTab_active").siblings().removeClass("starTab_active")
	$("#hd_starTab_show").find($("div")).removeClass("starTab_show")
	$("#hd_starTab_show div").eq(index).addClass("starTab_show")
})

//划过
//公共尾部
//$("#wrap_footer").load("common.html #hd_common_footer",function(){
//		
//})
//吸顶 和 侧边栏
window.onscroll = function(){
//	console.log($("html,body").scrollTop())
	if($("html,body").scrollTop()>770){
		$("#xiding").css("display","block")
		$("#celan").css("display","block")
		$("#celan li").last().click(function(){
			$("html,body").animate({"scrollTop":0},500)
		})

	}else{
		$("#xiding").css("display","none")
		$("#celan").css("display","none")
		
	}
}
//cebianlan
$("#celan li").each(function(index){
	$(this).css({"backgroundPositionX":"0px","backgroundPositionY":(-83*index-3)+"px"})
})
$("#celan").on("mouseenter","li",function(){
	var index = $(this).index();
	//$(this).css("display","block")
	$(this).css({"backgroundPositionX":"-77px","backgroundPositionY":(-83*index-3)+"px"})
	
}).on("mouseleave","li",function(){
	var index = $(this).index();	
	$(this).css({"backgroundPositionX":"0px","backgroundPositionY":(-83*index-3)+"px"})
})












