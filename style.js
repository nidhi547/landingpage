// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');
email = document.getElementById('email');
mobile = document.getElementById('mobile');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    var background = new Array();

    background[0] = "https://cdn.wallpapersafari.com/19/89/zVsCIf.jpg";
    background[1] = "https://media.istockphoto.com/photos/happy-woman-stretching-in-bed-after-waking-up-happy-young-girl-greets-picture-id1284856826?b=1&k=20&m=1284856826&s=170667a&w=0&h=pXGwPnrjAZgs850NIgQD6mdmat5F3Gt2X5qz-mw2iwM=";
    background[2] = "https://i.ibb.co/7vDLJFb/morning.jpg";
    background[3] = "https://images.unsplash.com/photo-1518655048521-f130df041f66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80";
    background[4] = "https://positiveguru.com/wp-content/uploads/2020/05/morning-sunrise-1.jpg";
    background[5] = "https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg?size=626&ext=jpg";
    background[6] = "https://images.unsplash.com/photo-1612120898316-8e5b7a931c53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
    background[7] = "https://healthyshasta.org/wp-content/uploads/Be-Active/Kids-Playing-Outside.png";
    background[8] = "https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9ybmluZyUyMGltYWdlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    background[9] = "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?b=1&k=20&m=517188688&s=170667a&w=0&h=AF2jDsSkcse_G3a9BCQA22LDhezmxIUZKx5vRh3aFDI=";
    background[10] = "https://c1.wallpaperflare.com/preview/701/855/798/sunrise-morning-cornfield-bright.jpg";

    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    var numberGen = Math.floor(Math.random() * 11);
    document.body.style.backgroundImage = 'url(' + background[numberGen] + ')';
    greeting.textContent = 'Good Morning, '
  }

  else if (hour < 18) {
    // Afternoon
    var background = new Array();

    background[0] = "https://i.ibb.co/3mThcXc/afternoon.jpg";
    background[1] = "https://media.istockphoto.com/photos/living-room-with-part-of-sofa-in-sunny-day-and-white-curtain-picture-id1132292535?b=1&k=20&m=1132292535&s=170667a&w=0&h=aYTBX0qIZUp0MrkDvdH3hB_fFf7sR-f1u9a-qTSOwH8=";
    background[2] = "https://images.unsplash.com/photo-1525531845240-05c911ed9940?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXwxMTY0OTQzMnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    background[3] = "https://images.unsplash.com/photo-1622653533660-a1538fe8424c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWZ0ZXJub29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    background[4] = "https://a-static.besthdwallpaper.com/noon-at-the-beach-wallpaper-2560x1440-12775_51.jpg ";
    background[6] = "https://media.istockphoto.com/photos/dramatic-sky-and-cloudscape-with-sunbeams-picture-id1249902267?b=1&k=20&m=1249902267&s=170667a&w=0&h=kQIs1sO65rS91RL6jZ3DESld527-SWs3ZYyJSlW3QWo=";
    background[5] = "https://p0.pikist.com/photos/883/236/background-beach-beautiful-beauty-blue-coast-day-holiday-island.jpg";
    background[6] = "https://cdn.pixabay.com/photo/2020/06/15/06/48/sunset-5300601_960_720.jpg";
    background[7] = "https://p4.wallpaperbetter.com/wallpaper/628/308/933/sunlight-ocean-hd-landscape-photography-of-body-of-water-during-noontime-wallpaper-preview.jpg ";
    background[8] = "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlnaHQlMjBjb2xvciUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    background[9] = "https://photo69.macsc.com/180606/JPG-180606_63/pGbUR5AXI4_small.jpg";
    background[10] = "https://www.wallpapertip.com/wmimgs/28-287820_noon-wallpapers-hd.jpg";
    background[11] = "https://www.assignmentpoint.com/wp-content/uploads/2019/07/winter-morning.jpg";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    var numberGen = Math.floor(Math.random() * 12);


    document.body.style.backgroundImage = 'url(' + background[numberGen] + ')';



    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Night
    var background = new Array();
    background[0] = "https://i.ibb.co/924T2Wv/night.jpg";
    background[1] = " https://image.shutterstock.com/image-vector/vintage-town-night-bright-moon-260nw-1013772571.jpg";
    background[2] = "https://vitotechnology.com/gallery/images/how-to-choose-a-stargazing-app-2021/1920x1080";
    background[3] = "https://www.enwallpaper.com/wp-content/uploads/965f83a29f6051fe4e97c6b209d06f96.jpg";
    background[4] = "https://i.natgeofe.com/n/1edad4f5-6a8d-4a4f-becc-bdbc7a99c9fd/01-starstruck-spica-051616.jpg";
    background[5] = "https://blenderartists.org/uploads/default/original/4X/3/9/9/399ec1d390e9d2426af8da136523e520a8f47d0e.jpeg";
    background[6] = "https://media.istockphoto.com/photos/modern-bedroom-picture-id1313528964?b=1&k=20&m=1313528964&s=170667a&w=0&h=YgdyhC38G93TZ5g8LBjKvHZM8GSg2houKBOrbrxETkw=";
    background[7] = "https://media.istockphoto.com/photos/blue-moon-over-poste-lafayette-in-mauritius-picture-id1044244246?b=1&k=20&m=1044244246&s=170667a&w=0&h=Fi7jN3ESdwYF8pDPQnK_f6YKxE79NfEte9r8VoRH5Bk=";
    background[8] = "https://videohive.img.customer.envatousercontent.com/files/734701ae-577c-4ea8-9f4c-70e6943c8875/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=a6bbda9f0205d0ef7a2d5d509585ae0f";
    background[9] = "https://media.istockphoto.com/photos/astronaut-on-space-walk-looks-at-lights-of-planet-earth-picture-id1255359039?b=1&k=20&m=1255359039&s=170667a&w=0&h=Yh24kQCovaGY4ts1tlGO8XmlRDsmpoWFa78kxIlnvHQ=";



    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    var numberGen = Math.floor(Math.random() * 10);


    document.body.style.backgroundImage = 'url(' + background[numberGen] + ')';


    greeting.textContent = 'Good Night ';
    document.body.style.color = 'white';
    document.getElementById('name').classList.add('white');
    document.getElementById('focus').classList.add('white');
    document.getElementById('email').classList.add('white');
    document.getElementById('mobile').classList.add('white');


  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null || !localStorage.getItem('name')) {
    document.getElementById('name').placeholder = ' Enter Your Name';
  } else {
    name.value = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.value);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.value);
  }
}

// Get Focus
// function getFocus() {
//   if (localStorage.getItem('focus') === null || !localStorage.getItem('focus')) {
//     focus.placeholder = 'Enter Focus';
//   } else {
//     focus.textContent = localStorage.getItem('focus');
//   }
// }

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.value);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.value);
  }
}

//function getEmail() {
 // if (localStorage.getItem('email') !== null) {
  //  email.value = localStorage.getItem('email');
  //}
//}

// Set Email
function setEmail(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('email', e.target.value);
      email.blur();
    }
  } else {
    localStorage.setItem('email', e.target.value);
  }
}


function getMobile() {
  if (localStorage.getItem('mobile') !== null) {

    mobile.value = localStorage.getItem('mobile');
  }
}

// Set Mobile
function setMobile(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('mobile', e.target.value);
      mobile.blur();
    }
  } else {
    localStorage.setItem('mobile', e.target.value);
  }
}


function sendmail() {
  var Ename = localStorage.getItem('name');
  var Efocus = localStorage.getItem('focus');
  var Eemail = localStorage.getItem('email');
  var Emobile = localStorage.getItem('mobile');

  var body = "Hello " + Ename + "," + "<br> <br> Hope you are doing good." + "<br> Your Focus for Today is  - " + Efocus + "<br> <br> thanks and regards" + "<br> TEAM TECHNOVATIVES";

  Email.send({
    //Host: "smtp.gmail.com",
    //Username: "jungle.organic.products@gmail.com",
    //Password: "Dynamic@123",
    SecureToken : "4b22bc91-b7af-4f96-907a-b60c5a6513f5",
    To: Eemail,
    From: "jungle.organic.products@gmail.com",
    Subject: "Welcome to Jungle Organic",
    Body: body
  }).then(

    message => {
      if (message == "OK") {
        localStorage.setItem('email', null)
        localStorage.setItem('focus', null)
        localStorage.setItem('mobile', null)
        alert("Your mail has been sent. Thanks for connecting")
        window.location.replace("./Bootstrap.html");
      }
      else {
        console.log(message);
        alert("Enter your Email to visit Website")
      }
    }
  );
}



name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
mobile.addEventListener('keypress', setMobile);
mobile.addEventListener('blur', setMobile);
email.addEventListener('keypress', setEmail);
email.addEventListener('blur', setEmail);

// Run
showTime();
setBgGreet();
getName();
// getFocus();
// getEmail();
// getMobile();
