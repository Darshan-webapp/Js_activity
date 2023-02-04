  const doorImage = document.getElementById("image1");
  const openButton = document.querySelector(".btn1");
  const closeButton = document.querySelector(".btn2");

  openButton.addEventListener("click", function() {
    doorImage.src = "images/Image2.png";
  });

  closeButton.addEventListener("click", function() {
    doorImage.src = "images/Image1.png";
  });

