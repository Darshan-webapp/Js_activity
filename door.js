  const doorImage = document.getElementById("image1");
  const openButton = document.querySelector(".btn1");
  const closeButton = document.querySelector(".btn2");
  const statusDisplay = document.querySelector(".status");

  let doorStatus = "closed";

  openButton.addEventListener("click", function() {
    doorImage.src = "images/Image2.png";
    doorStatus = "Open";
    statusDisplay.innerHTML = "Door is Open";
    statusDisplay.style.color = "green";
    
  });

  closeButton.addEventListener("click", function() {
    doorImage.src = "images/Image1.png";
    doorStatus = "Closed";
    statusDisplay.innerHTML = "Door is Closed";
    statusDisplay.style.color = "red";
    });

  
  

