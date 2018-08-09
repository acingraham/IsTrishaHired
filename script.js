const hired = Math.random() >= 0.5;

let line1;
let line2;
let message;
let title;

if (hired) {
    line1 = 'YES!!';
    title = '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉';
    src = 'https://www.rd.com/wp-content/uploads/2018/02/19_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_391191067_chris_tina-760x506.jpg';
} else {
    line1 = 'No.';
    title = "🔥 You're fired 🔥 Go away 🔥";
    src = 'https://media.istockphoto.com/photos/cute-pug-with-sad-eyes-picture-id93276598?k=6&m=93276598&s=612x612&w=0&h=o_1ifcnV8iB-Ys-uJ13-YOjLCwEOTwsBvBtPzzwj_lA=';
}

$('#line1').text(line1);
$('svg').toggle();
$('title').text(title);
$('img').attr('src', src);
setTimeout(function() {
  $('img').fadeIn();
}, 6000);
