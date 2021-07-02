var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var out = document.querySelector('.out');
var note = document.querySelector('.note');
var benefit = document.querySelector('.benefit');
var noteImg = document.querySelector('.note>img');
var notep = document.querySelector('.note>p');
var index = 0;
var boxone = document.querySelector('.boxone');
var boxTwo = document.querySelector('.boxTwo');
var arr = ["你是我拔掉氧气罐都想吻的人", "你是我跑完8000米还想拥抱的人", "你是我自罚三杯都不肯开口的秘密", "你是我赴汤蹈火都不肯放下的执着", "你是我电量只剩1%也想回信息的人", "你是我穷极一生不想醒来的梦"];
var done = '';
btn1.onclick = function(){
	noteImg.src = 'img/emoji_bixin.jpg';
	notep.innerHTML = '太好了！哈哈哈~'
	note.style.display = 'block';
	out.style.display = 'none';
	setTimeout(function(){
		boxone.style.display = 'none';
		boxTwo.style.display = 'block';
		done=setInterval("show()",100);
	},2000)
}
btn2.onclick = function(){
	if(index<6){
		var p = document.createElement('p');
		p.innerHTML = arr[index];
		benefit.appendChild(p);
		index++;
	}else{
		noteImg.src = 'img/emoji_kelian.jpg';
		notep.innerHTML = '请告诉我YES'
		note.style.display = 'block';
		out.style.display = 'block';
	}
}
out.onclick = function(){
	note.style.display = 'none';
}

//第二页字体显示
var text = "遇见你是我所有美好故事的开始，所以，请别放开我的手，也别缺席我的将来，因为一辈子和你在一起才叫将来💕💕<br/><br/>生日快乐宝贝!<br/>爱你哦(* ￣3)(ε￣ *)";
var num = text.length;
var i =0;
function show() {
	var shower = text.substr(0,i);
	document.querySelector(".twoContent").innerHTML = shower;
	i++;
	if(i - 1 >= num){
		clearInterval(done);
	}
}