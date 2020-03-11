/*loader*/

$(window).ready(function () {
  $(".loader").delay(300).fadeOut(500);
});

/*scroll menu*/

$("#menu-dekstop").on("click","a", function (event) {
  event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top - 0 + 'px';
    $('body,html').animate({scrollTop: top}, 1200);
});

$("#home").on("click", "a", function (event) {
  event.preventDefault();
  let id  = $(this).attr('href'),
      top = $(id).offset().top - 0 + 'px';
  $('body,html').animate({scrollTop: top}, 1200);
});

$("#menu-mobile").on("click", "a", function (event) {
  event.preventDefault();
  let id  = $(this).attr('href'),
      top = $(id).offset().top - 0 + 'px';
  $('body,html').animate({scrollTop: top}, 1200);
});

/*js-header-fixed*/

window.onscroll = function showHeader() {
  let header = document.querySelector('.js-header');
  if(window.pageYOffset > 600){
      header.classList.add('js-header-fixed');
  } else{
      header.classList.remove('js-header-fixed');
  }
}

/*mob menu*/

let menuBtn = document.querySelector('.menu-btn');
let menuLines = document.querySelector('.menu-btn-lines');
let menuMobBox = document.querySelector('.menu-box');
let menuItem = document.querySelectorAll('.menu-item');

if(menuBtn) {
  menuBtn.addEventListener('click', function() {
    menuLines.classList.toggle("menu-btn-active");
    menuMobBox.classList.toggle("menu-show");
  });
}

menuItem.forEach(function(btn) {
  btn.addEventListener('click', function() {
    menuLines.classList.remove("menu-btn-active");
    menuMobBox.classList.remove("menu-show");
  });
});

/*tab*/

function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.currentTarget.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();

/*video*/

let video = document.getElementById('video');
let buttonPlayMain = document.querySelector('.btn-play-main');
let btnPlayPause = document.getElementById('play-pause');
let stopBtn = document.getElementById('stop');
let progress = document.getElementById('progress');

if (video) {
  video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        buttonPlayMain.classList.add('button-main-hidden');
        btnPlayPause.classList.add('pause');
    } else {
        video.pause();
        buttonPlayMain.classList.remove('button-main-hidden');
        btnPlayPause.classList.remove('pause');
    }
  });
}

if(buttonPlayMain) {
  buttonPlayMain.addEventListener('click', function () {
    if(video.paused) {
      video.play();
      buttonPlayMain.classList.add('button-main-hidden');
      btnPlayPause.classList.add('pause');
    }
  });
}

if(btnPlayPause) {
  btnPlayPause.addEventListener('click', function() {
    if(video.paused) {
      btnPlayPause.classList.remove('play');
      btnPlayPause.classList.add('pause');
      buttonPlayMain.classList.add('button-main-hidden');
      video.play();
    } else {
      btnPlayPause.classList.remove('pause');
      btnPlayPause.classList.add('play');
      buttonPlayMain.classList.remove('button-main-hidden');
      video.pause();
    }
  });
}

if(stopBtn) {
  stopBtn.addEventListener('click', function() {
    video.pause();
    video.currentTime = 0;
    buttonPlayMain.classList.remove('button-main-hidden');
    btnPlayPause.classList.remove('pause');
  });
}

if(video) {
  video.ontimeupdate = progressUpdate;
}

if(progress) {
  progress.onclick = videoRewind;
}

function progressUpdate() {
  console.log(video.duration);
  console.log(video.currentTime);
  let d = video.duration;
  let c = video.currentTime;
  progress.value = c / d * 100;
}

function videoRewind() {
  let w = this.offsetWidth;
  let o = event.offsetX;
  console.log(w);
  console.log(o);
  this.value = o / w * 100;
  video.pause();
  video.currentTime = video.duration * (o / w);
  video.play();
}

/*slider*/

$(document).ready(function(){ 
  $('.slider').slick({
    dots: true,
    arrows: false,
  });
});

/*slider__pricinng*/

$('.pricing-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots:true,
      }
    },
  ]
});

/*readMore*/

function readMore(){
  let dots = document.querySelector(".dots");
  let more = document.querySelector(".more");
  let btn = document.querySelector(".btn");

  if(dots.style.display === "none"){
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    more.style.display = "none";
  } else{
    dots.style.display = "none";
    btn.innerHTML = "hide";
    more.style.display = "inline";
  }
};

