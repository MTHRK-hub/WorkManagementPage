// ページ更新
function update(){
    location.reload();
}

// 閉じる
function shutdown() {
    window.close();
}

// 現在日時を画面に設定する
window.onload = function(){
    getRealTime();
    setInterval('getRealTime',1000);
}

// 現在日時を取得する
function getRealTime() {
    var realTime = new Date();
    var year = realTime.getFullYear();
    var month = realTime.getMonth()+1;
    var week = realTime.getDay();
    var day = realTime.getDate();

    var week_ja= new Array("日","月","火","水","木","金","土");
    var hour = realTime.getHours().toString().padStart(2,'0');
    var minutes  = realTime.getMinutes().toString().padStart(2,'0');
    var seconds  = realTime.getSeconds().toString().padStart(2,'0');

    var text = year+"/"+month+"/"+day+"("+week_ja[week]+") "+hour + ":" + minutes + ":" + seconds;
    document.getElementById("realtime").innerHTML = text;
}
