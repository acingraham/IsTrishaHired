const hired = Math.random() >= 0.5;

let message;
if (hired) {
    message = 'YES!';
} else {
    message = 'NO!';
}

$('#message').text(message);
