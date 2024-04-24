function toggleActive(clickedElement) {
  var menuLinks = document.getElementById("menu").getElementsByTagName("a");
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].classList.remove("active");
  }

  clickedElement.classList.add("active");

  changeImage(clickedElement.innerText); // veya clickedElement.textContent
}

function changeImage(linkText) {
  var imageContainer = document.getElementById("image-container");
  var imagePath;

  switch (linkText) {
    case "Breakfast":
      imagePath = "img/breakfast-image.jpg";
      break;
    case "Lunch":
      imagePath = "img/lunch-photo.jpg";
      break;
    case "Deserts":
      imagePath = "img/dessert.jpg";
      break;
    case "Coffees":
      imagePath = "img/coffees.jpg";
      break;
    default:
      imagePath = "img/breakfast-image.jpg";
      break;
  }

  imageContainer.innerHTML = '<img src="' + imagePath + '" alt="' + linkText + '" class="' + "food-image" + '">';
}


