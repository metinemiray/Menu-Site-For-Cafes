function toggleActive(clickedElement) {
    
    var menuLinks = document.getElementById("menu").getElementsByTagName("a");
    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].classList.remove("active");
    }
 
    clickedElement.classList.add("active");
   
    changeImage(clickedElement.innerText); 
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

document.addEventListener("DOMContentLoaded", function () {
    var showButtons = document.querySelectorAll(".showButton");
    var items = document.querySelectorAll(".item");
    if (showButtons.length > 0 && items.length > 0) {
        showButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                var classNameToShow = button.getAttribute("data-class");
                items.forEach(function (item) {
                    if (item.classList.contains(classNameToShow)) {
                        item.style.display = "block"; // Belirli class'a sahip olanları göster
                    }
                    else {
                        item.style.display = "none"; // Diğerlerini gizle
                    }
                });
            });
        });
    }
});
