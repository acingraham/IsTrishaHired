let line1;
let title;
let music;
const trishasBday = 'Apr 27';
const todayIsTrishasBday = (new Date()).toDateString().indexOf(trishasBday) > -1
                         || window.location.href.indexOf('bday') > -1;

let bdayMessages = [
  // 2019 bday messages
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
    message: "Happy birthday Trisha! Come back to Flatiron already. The PROPS / COOP / &lt;INSERT FUTURE TEAM NAME HERE&gt; team can't wait.",
    author: 'Jacob',
  },

  // 2020 bday messages
  {
    message: "Great job being born 23 years ago am proud of that persistence and dedication to life",
    author: 'Matt',
  },
  {
    message: "Happy birthday Trisha! You’re awesome and I’m thankful for all the past and future bachelor nights, Dream Baby parties, AMC escapades, and of course, Off The Wagon adventures.",
    author: 'Jack',
  },
  {
    message: "Happy Birthday Trisha!  We’ve had some good team adventures this past year and I’m looking forward to more in the year ahead!",
    author: 'Forrest',
  },
  {
    message: "Happy Birthday Trisha ! Looking forward to another Jimmy Fallon like show once the lockdown ends!",
    author: 'Vikash',
  },
  {
    message: "Happy birthday Trisha! Hope we can get you a second cake after the quarantine ends! 🍰",
    author: 'Christina',
  },
  {
    message: "Happy Birthday Trisha! Have a great quarantine birthday!!",
    author: 'Paramveer',
  },
  {
    message: "Happy Birthday Trisha!! Keep on rocking!",
    author: 'Oleksii',
  },
  {
    message: "Janamdin mubarak ho! We're lucky to have you around. How else would we get hot takes, well-timed roasts, and deep conversation starters? Have a year that's as great as you!",
    author: 'Calder',
  },
  {
    message: "Happy birthday TREESH / mother!!! Thanks for being the only sane one in prac-youth, I appreciate you &lt;3",
    author: 'KT',
  },
  {
    message: "Happy birthday to the queen of option strict on, our resident expert in pop culture, and prac youth’s favorite drinking chaperone. Thanks for being my daily motivation to improve my NYT crossword times (sorry KT)!",
    author: 'Rohan',
  },
  {
    message: "Happy birthday Trisha! 🥳 🎂 🎁 🎈🎈🎊",
    author: 'Beth',
  },
  {
    message: "H a p p y b i r t h d a y!!! Looking forward to the day we can get vaccinated for corona together 💉",
    author: 'Paul',
  },
  {
    message: "Happy Birthday Trisha!! Miss distracting ourselves from work by doin endless crosswords and leaving the office to get pastries &lt;3 &lt;3 You’re a 🌟and I hope you have a great birthday!!",
    author: 'Chaya',
  },
  {
    message: "Happy Birthday Trisha! Thank you for being so thoughtful and diligent in your work while keeping things light and making us laugh. You make our jobs much easier and more fun!",
    author: 'MaxT',
  },
  {
    message: "Happy birthday, Trisha!! Hope your day/year/life is full of cake &amp; joy &amp; speedy NYT crossword times :)",
    author: 'Emily',
  },
  {
    message: "Happy birthday Trisha! Funny how we’ve never met back in school but I’m glad that I got to know you at Flatiron! Never too late!",
    author: 'Jaeyoon',
  },
  {
    message: "Look at you, aging again! Thanks for being a great Jersey teammate in this Ohio dense world. You are suspiciously casually extremely badass and impressive so keep that up. I can’t wait to see what adventures New York has in store for the future !!",
    author: 'Robin',
  },
  {
    message: "Happy Bday, Trisha -- you are no longer a YA, but now an old person like myself.  As you age you’ll start being smarter (like myself) and wiser (like myself) but not as wise as myself (like myself).  In seven years from now you’ll look back on all the things I said to you and  be like, wow I wish I was like that now.  JK but not really - hope you enjoy hanging out with your cool parents.  Just know that Mango Lassi will be performed and that should be enough to get you through quarantine",
    author: 'Your Hero',
  },
  {
    message: "Happy birthday Trisha, I guess here is where I’m supposed to say something nice to you. Well, happy birthday",
    author: 'Nora',
  },
  {
    message: "Happy Birthday, Trisha!! I hope you and Squibbledorf have a good one!",
    author: 'Kahin',
  },
  {
    message: "Happy birthday, Trisha! I too have a quarantine bday and feel your pain. Don’t worry, even though time doesn’t feel real right now, you’re still getting older.",
    author: 'Blumby',
  },
  {
    message: "// TODO",
    author: 'Andrew',
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
