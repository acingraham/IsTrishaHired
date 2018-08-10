const hired = Math.random() >= 0.5;

let line1;
let line2;
let message;
let title;
let music;

if (hired) {
    line1 = 'YES!!';
    title = '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉';
    src = './img/yes' + (Math.floor(Math.random() * 3) + 1);
    music = `
        <audio id="yes-music" autoplay>
          <source src="./music/DontSayGoodbye.mp3" type="audio/mp3">
        </audio>
    `;
} else {
    line1 = 'No.';
    title = "🔥 You're fired 🔥 Go away 🔥";
    src = './img/no' + (Math.floor(Math.random() * 6) + 1);
    music = `
        <audio id="yes-music" autoplay>
          <source src="./music/ThisIsWar5.mp3" type="audio/mp3">
        </audio>
    `;
}

$('body').append(music);
$('#line1').text(line1);
$('svg').toggle();
$('title').text(title);
$('img').attr('src', src);
setTimeout(function() {
  $('img').fadeIn();
}, 6000);
