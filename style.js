// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');
  email= document.getElementById('email');
  mobile= document.getElementById('mobile');

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
    document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    var background =new Array(); 
    background[0] = "https://i.ibb.co/7vDLJFb/morning.jpg";
    background[1] = "https://i.ibb.co/3mThcXc/afternoon.jpg";
    background[2] = "https://i.ibb.co/924T2Wv/night.jpg";
    background[3] = "https://www.enwallpaper.com/wp-content/uploads/965f83a29f6051fe4e97c6b209d06f96.jpg";
    var numberGen =Math.floor(Math.random()*4);


    document.body.style.backgroundImage = 'url('+ background[numberGen]+')';
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null || !localStorage.getItem('name')) {
    document.getElementById('name').placeholder = ' Enter Your Name';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null || !localStorage.getItem('focus')) {
    focus.placeholder = 'Enter Focus';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

function getEmail() {
  if (localStorage.getItem('email') !== null ) {
    
    email.textContent = localStorage.getItem('focus');
  } 
}

// Set Email
function setEmail(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('email', e.target.innerText);
      email.blur();
    }
  } else {
    localStorage.setItem('email', e.target.innerText);
  }
}


function getMobile() {
  if (localStorage.getItem('mobile') !== null ) {
    
    email.textContent = localStorage.getItem('mobile');
  } 
}

// Set Mobile
function setMobile(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('mobile', e.target.innerText);
      mobile.blur();
    }
  } else {
    localStorage.setItem('mobile', e.target.innerText);
  }
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
getFocus();
getEmail();
getMobile();
