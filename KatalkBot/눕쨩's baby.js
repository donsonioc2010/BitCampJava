const scriptName = "눕쨩's baby";
/**
 * (string) room : 메세지를 받은 방 이름
 * (string) sender : 전송자 닉네임
 * (boolean) isGroupChat : 단체/오픈채팅 여부
 * (void) replier.reply(message)
 * (boolean) replier.reply(room, message, hideErrorToast = false) // 전송 성공시 true, 실패시 false 반환
 * (string) imageDB.getProfileBase64()
 * (string) packageName 메시지를 받은 메신저의 패키지 이름
 */
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(msg == "!내이름"){replier.reply(sender+"새끼");}
  if(msg == "!날짜") date(response,replier);
  if(msg=="!주사위") dice(response,replier);
  if(msg=="!시간") timePrint(response,replier);
  if(room =="가로수"){//문자열검색
	 var cubmsg =  cubemsg(msg,replier);
	}
}
//아래 4개의 메소드는 액티비티 화면을 수정할때 사용됩니다.
function onCreate(savedInstanceState, activity) {
  var textView = new android.widget.TextView(activity);
  textView.setText("Hello, World!");
  textView.setTextColor(android.graphics.Color.DKGRAY);
  activity.setContentView(textView);
}
function onStart(activity) {}

function onResume(activity) {}

function onPause(activity) {}

function onStop(activity) {}

function dice(response,replier){	//주사위
  var dice =Math.floor(Math.random()*100)+1;
  if(dice>=90){replier.reply("주사위는 "+dice+"넌 이미 이긴수준");}
  else if(dice>=80){replier.reply("주사위는 "+dice+" 넌 이미 이길수있겠는데?");}
  else if(dice>=70){replier.reply("주사위는 "+dice+" 넌 이미 에매한데 높다");}
  else if(dice>=60){replier.reply("주사위는 "+dice+" 넌 이미 에매하네");}
  else if(dice>=50){replier.reply("주사위는 "+dice+" 희망을가지자");}
  else {replier.reply("주사위는 "+dice+" 왜굴렸냐");}
}
function cubemsg(msg,replier){
	var n = msg.indexOf("큐브");
	if(n != -1){
		replier.reply("어느 중생이 큐브의 길에 들어가려는가");
	}
	n = msg.indexOf("큡질");
	if(n != -1){
		replier.reply("어느 중생이 큐브의 길에 들어가려는가");
	}
}
function timePrint(response,replier){
	day = new Date();
	replier.reply("현재 시간 : "+ day.getHours()+"시 "+day.getMinutes()+"분"+day.getSeconds()+"초");
}

function date(response,replier){	//날짜
  var date = new Date();
  var today=date.getFullYear()+"년"+(date.getMonth()+1)+"월"+date.getDate()+"일";
  replier.reply(today);
}
