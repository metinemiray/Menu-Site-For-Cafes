function toggleActive(clickedElement) {
  // Menü içindeki tüm a etiketlerinden active class'ını kaldır
  var menuLinks = document.getElementById("menu").getElementsByTagName("a");
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].classList.remove("active");
  }

  // Tıklanan a etiketine active class'ını ekle
  clickedElement.classList.add("active");

  // Resim değiştirmek için fonksiyonu çağır
  changeImage(clickedElement.innerText); // veya clickedElement.textContent
}

function changeImage(linkText) {
  var imageContainer = document.getElementById("image-container");
  var imagePath;

  // Link metnine göre resim yolunu belirle
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

  // Resmi değiştir
  imageContainer.innerHTML = '<img src="' + imagePath + '" alt="' + linkText + '" class="' + "food-image" + '">';
}

//MENÜ CATEGORİ
