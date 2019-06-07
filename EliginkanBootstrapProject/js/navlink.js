$(document).ready(function(){

	$("#s1").click(function(){
		$(this).attr("class","nav-link active");
		$("#s2").attr("class","nav-link");
		$("#s3").attr("class","nav-link");
		$("#sayfa1").show(500);
		$("#sayfa2").hide();
		$("#sayfa3").hide();
	});

	$("#s2").click(function(){
		$(this).attr("class","nav-link active");
		$("#s1").attr("class","nav-link");
		$("#s3").attr("class","nav-link");
		$("#sayfa1").hide();
		$("#sayfa2").show(500);
		$("#sayfa3").hide();
	});

	$("#s3").click(function(){
		$(this).attr("class","nav-link active");
		$("#s1").attr("class","nav-link");
		$("#s2").attr("class","nav-link");
		$("#sayfa1").hide();
		$("#sayfa2").hide();
		$("#sayfa3").show(500);
	});

})