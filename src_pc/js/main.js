// ============================================================
// 作業管理ページ — レトロゲーム風 案3 / TITLE SCREEN
// ============================================================

// ------------------------------------------------------------
// ページ更新
// ------------------------------------------------------------
function update() {
    playSE('click');
    location.reload();
}

// ------------------------------------------------------------
// 閉じる
// ------------------------------------------------------------
function shutdown() {
    playSE('cancel');
    setTimeout(function () { window.close(); }, 150);
}

// ------------------------------------------------------------
// PRESS START → メニュー表示へ
// ------------------------------------------------------------
function startGame() {
    var pressStart = document.getElementById('pressStart');
    var menuWindow = document.getElementById('menuWindow');
    var titleBlock = document.getElementById('titleBlock');
    if (!pressStart || pressStart.classList.contains('is-hidden')) return;

    playSE('open');
    pressStart.classList.add('is-hidden');
    titleBlock.classList.add('is-started');
    menuWindow.classList.add('is-visible');
}

// ------------------------------------------------------------
// 初期化
// ------------------------------------------------------------
window.onload = function () {
    getRealTime();
    setInterval(getRealTime, 1000);

    // Enter / Space で START
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            startGame();
        }
    });
};

// ------------------------------------------------------------
// 現在日時を取得して表示
// ------------------------------------------------------------
function getRealTime() {
    var realTime = new Date();
    var year = realTime.getFullYear();
    var month = realTime.getMonth() + 1;
    var week = realTime.getDay();
    var day = realTime.getDate();

    var week_ja = new Array("日", "月", "火", "水", "木", "金", "土");
    var hour = realTime.getHours().toString().padStart(2, '0');
    var minutes = realTime.getMinutes().toString().padStart(2, '0');
    var seconds = realTime.getSeconds().toString().padStart(2, '0');

    var text = year + "/" + month + "/" + day + "(" + week_ja[week] + ") " + hour + ":" + minutes + ":" + seconds;
    var el = document.getElementById("realtime");
    if (el) el.innerHTML = text;
}

// ============================================================
// 8bit SE エンジン（WebAudio）
// ============================================================
var __seCtx = null;
function getSeCtx() {
    if (!__seCtx) {
        try { __seCtx = new (window.AudioContext || window.webkitAudioContext)(); }
        catch (e) { __seCtx = null; }
    }
    return __seCtx;
}

function beep(freq, dur, type, vol, slide) {
    var ctx = getSeCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();
    var t = ctx.currentTime;
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = type || 'square';
    o.frequency.setValueAtTime(freq, t);
    if (slide) {
        o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    }
    g.gain.setValueAtTime(vol || 0.08, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(ctx.destination);
    o.start(t);
    o.stop(t + dur + 0.02);
}

function playSE(name) {
    switch (name) {
        case 'click':
            beep(1320, 0.04, 'square', 0.06);
            break;
        case 'cursor':
            beep(880, 0.05, 'square', 0.05);
            break;
        case 'select':
            beep(660, 0.06, 'square', 0.08);
            setTimeout(function () { beep(990, 0.08, 'square', 0.08); }, 50);
            break;
        case 'cancel':
            beep(220, 0.12, 'square', 0.08, -120);
            break;
        case 'open':
            [523, 659, 784, 1046].forEach(function (f, i) {
                setTimeout(function () { beep(f, 0.07, 'square', 0.07); }, i * 60);
            });
            break;
    }
}
