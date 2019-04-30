let line1;
let title;
let music;
const trishasBday = 'Apr 27';
const todayIsTrishasBday = (new Date()).toDateString().indexOf(trishasBday) > -1
                         || window.location.href.indexOf('bday') > -1;

let bdayMessages = [
  {
    message: 'Happy Birthday, Trisha!  Looking forward to seeing you back at Flatiron!',
    author: 'Tom',
  },
  {
    message: 'Hi, Trisha! Hope you have a lovely birthday :D Stay in Portugal! (jk see you soon!!!)',
    author: 'Katie',
  },
  {
    message: "Happy Birthday Trisha!  I know you'll blow us away at Flatiron just like you did at Escape the Room.",
    author: 'Steve',
  },
  {
    message: "Happy Birthday Teresa, I'm leaving Flatiron",
    author: 'Thomas',
  },
  {
    message: '404 - Well Wishes Not Found',
    author: 'Andrew',
  },
  {
    message: 'Happy birthday! Welcome back to the big family! We split btw, so make sure you make the right choice:-)',
    author: 'Li',
  },
  {
    message: "Happy birthday Trisha! Come back to Flatiron already. The PROPS / COOP / <INSERT FUTURE TEAM NAME HERE> team can't wait.",
    author: 'Jacob',
  },
];

if (todayIsTrishasBday) {
  bdayMessages = bdayMessages.map(o => `${o.message} <br>-${o.author}`);

  // Trisha is misspelled intentionally.
  title = '🎉 Happy Bday Tricia! 🎉';

  $('#bday').css('display', 'flex');
  $('title').text(title);

  const options = {
    strings: bdayMessages,
    typeSpeed: 40,
    shuffle: true,
    loop: true,
    fadeOut: true,
    backDelay: 3000,
  };

  new Typed("#bdayMessage", options);

  music = `
    <audio autoplay>
      <source src="./music/FirstKegStand.mp3" type="audio/mp3">
    </audio>
  `;

  $('body').append(music);
} else {
  const hired = Math.random() >= 0.5;
  if (hired) {
      line1 = 'YES!!';
      title = '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉';
      src = './img/yes' + (Math.floor(Math.random() * 2) + 1);
      music = `
          <audio autoplay>
            <source src="./music/DontSayGoodbye.mp3" type="audio/mp3">
          </audio>
      `;
  } else {
      line1 = 'No.';
      title = "🔥 You're fired 🔥 Go away 🔥";
      src = './img/no' + (Math.floor(Math.random() * 5) + 1);
      music = `
          <audio autoplay>
            <source src="./music/ThisIsWar5.mp3" type="audio/mp3">
          </audio>
      `;
  }

  $('#main').css('display', 'flex');
  $('body').append(music);
  $('#line1').text(line1);
  $('svg').toggle();
  $('title').text(title);
  $('#proofImage').attr('src', src);
  setTimeout(function() {
    $('#proofImage').fadeIn();
  }, 6000);
}


$('body').click(function() {
  const audioElem = $('audio')[0];
  if (audioElem && audioElem.paused) {
    audioElem.play();
  }
});
