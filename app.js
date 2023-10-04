var userName = document.getElementById("userName");
var signup = document.querySelector(".signup-container");
var post = document.querySelector(".post-container");
var changedName = document.getElementById("changedName");
var displayInput = document.getElementById("display");

function loadFile(event) {
  var image = document.getElementById("userImage");
  var userPicture = document.getElementById("userPicture");
  var file = event.target.files[0];
  if (file) {
    image.src = URL.createObjectURL(file);
    userPicture.src = URL.createObjectURL(file);
  }
}

function changeColors(event) {
  if (event) {
    var changeColor = document.querySelector(".btn-post");
    changeColor.style.backgroundColor = "#0861F2";
    changeColor.style.color = "#fff";
  }
}

function changeBG(event) {
  var clickedImage = event.target;
  var displayInput = document.getElementById("display");

  if (clickedImage && displayInput) {
    var newBgImage = clickedImage.getAttribute("src");
    displayInput.style.backgroundImage = 'url("' + newBgImage + '")';
    displayInput.color = "pink";
  }
}

function posted() {
  var postUpdate = document.getElementById("postUpdate");
  var createDiv = document.createElement("div");
  var postUpdating = document.querySelector("#postUpdating");

  var textValue = displayInput.value;
  var backgroundImage = displayInput.style.backgroundImage;

  var postContent = document.createElement("div");
  postContent.textContent = textValue;
  postContent.style.backgroundImage = backgroundImage;
  postContent.style.backgroundColor = "blue";
  postContent.style.color = "white";

  createDiv.appendChild(postContent);

  //   createDiv.style.backgroundColor = "white";
  // 9D3EAC
  createDiv.style.backgroundColor = "#9D3EAC";

  displayInput.value = "";

  postUpdate.appendChild(createDiv);
}
