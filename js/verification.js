$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="老公" &&  pwd=="962464"){
    	$('#h').text("生日快乐！宝贝");
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="BirthdayCake.html";},4000);
	}
	else{
		alert("这都不知道，不愧是猪！");
	}
});
