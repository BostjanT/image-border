const urlInput = document.querySelector("input[name='url']");
const colorInput = document.querySelector("input[name='color']");
const widthInput = document.querySelector("input[name='width']");
const image = document.querySelector(".image-container");
const btn = document.querySelector(".btn");

let url = "";
let color = "#000000";
let width = 10;

function hideImageOnLoad() {
  image.style.display = "none";
  urlInput.value = "";
}

function setImage(url, width, color) {
  image.style.display = "block";
  image.style.borderStyle = "solid";
  image.style.backgroundImage = `url('${url}')`;
  image.style.borderWidth = `${width}px`;
  image.style.borderColor = color;
}

urlInput.addEventListener("change", () => {
  url = urlInput.value;
  setImage(url, width, color);
});
colorInput.addEventListener("change", () => {
  color = colorInput.value;
  setImage(url, width, color);
});
widthInput.addEventListener("change", () => {
  width = widthInput.value;
  setImage(url, width, color);
});

/* window.onload = function () {
  //Check File API support
  if (window.File && window.FileList && window.FileReader) {
    var filesInput = document.getElementById("files");
    filesInput.addEventListener("change", function (event) {
      var files = event.target.files; //FileList object
      var output = document.getElementById("result");
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        //Only pics
        if (!file.type.match("image")) continue;
        var picReader = new FileReader();
        picReader.addEventListener("load", function (event) {
          var picFile = event.target;
          var div = document.createElement("div");
          div.innerHTML =
            "<img class='thumbnail' src='" +
            picFile.result +
            "'" +
            "title='" +
            picFile.name +
            "'/>";
          output.insertBefore(div, null);
        });
        //Read the image
        picReader.readAsDataURL(file);
      }
    });
  } else {
    console.log("Your browser does not support File API");
  }
}; */

hideImageOnLoad();
