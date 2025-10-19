var to = nameGirl;
var gift_url = giftUrl;
var gift_images = (typeof giftImages !== 'undefined' && Array.isArray(giftImages) && giftImages.length) ? giftImages : [giftImage];
var currentIndex = 0;

function swapImages(index) {
  var activeSrc = gift_images[index] || giftImageBase64;
  document.querySelector('#card .avatar').setAttribute('src', activeSrc);
  var presentImg = presentImage.querySelector('img');
  if (presentImg) {
    presentImg.setAttribute('src', activeSrc);
  }
}

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName);
  document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`;
  document.querySelector('#card .content-card').innerHTML = `${contentCard}`;
  document.querySelector('#card .avatar').setAttribute('src', `${giftImage}`);

  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("p");
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (giftImage) {
    _giftImg = document.createElement("img");
    _giftImg.src = giftImage;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
  
  present.addEventListener("click", function(e){
    if (!present.classList.contains("open")) {
      present.classList.add("open");
      document.getElementById('card').classList.add('card-show');
      swapImages(currentIndex);
    } else {
      present.classList.remove("open");
      setTimeout(function(){
        currentIndex = (currentIndex + 1) % gift_images.length;
        swapImages(currentIndex);
        present.classList.add("open");
      }, 500);
    }
  }, false);
  
  
  
  nametag.innerText = to;
}

init();