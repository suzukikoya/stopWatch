// 下記の説明　html cssの要素を取り込む
let display = document.getElementById("display");
let startStop = document.getElementById("startStop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

// 下記の説明　0を増やしたい 上記の関数のみだと　0:0:0になってしまう
let newHours = 0;
let newMinutes = 0;
let newSeconds = 0;

// 下記の説明　STOPボタンで止める処理
let  status = "stop";
let interval;



// 下記の説明　関数を作る
function stopWatch(){
  seconds++;
  if(seconds / 60 == 1){
    minutes++;
    seconds = 0;
    if(minutes / 60 == 1){
      hours++;
      minutes = 0;
    }
  }

// 下記の説明　0:0:0を00:00:00にする処理
if(seconds < 10){
  newSeconds ="0"+seconds;
}else {
  newSeconds = seconds;
}

if(minutes < 10){
  newMinutes ="0"+minutes;
}else {
  newMinutes = minutes;
}

if(hours < 10){
  newHours ="0"+hours;
}else {
  newHours = hours;
}

//下記の説明　「innerHTML」HTML要素の中身を変更するのに活躍するプロパティです。
  display.innerHTML = newHours + ":" + newMinutes + ":" + newSeconds;
}

startStop.addEventListener("click",function(){
  console.log("ステータス表示",status);
  if(status == "stop"){
    // 下記の説明　「setInterval」　指定した時間ごとの処理をすること
    interval = setInterval(stopWatch,100);
    startStop.innerHTML="STOP";
    status ="start";
  }
  else{
    // 下記の説明「clearInterval」setInterval()でセットしたタイマーを解除する
    clearInterval(interval);
    startStop.innerHTML="START";
    status = "stop";
  }

})

reset.addEventListener("click",function(){
  // 下記の説明　「clearInterval」で止める
  clearInterval(interval);
  startStop.innerHTML="START";
  status = "stop";
  display.innerHTML= "00:00:00";
  hours=0;
  minutes=0;
  seconds=0;

})
