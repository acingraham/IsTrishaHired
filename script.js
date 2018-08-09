const hired = Math.random() >= 0.5;

let message;
let title;

if (hired) {
    message = 'YES!';
    title = '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉';
} else {
    message = 'NO!';
    title = "🔥You're fired. Go away.🔥";
}

$('#message').text(message);
$('title').text(title);
