const MenuItems = document.querySelector("#menuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// <!-- toggle form -->

var LoginForm = document.querySelector("#loginform");
var RegForm = document.querySelector("#registerform");
var Indicator = document.querySelector("#indicator");

function login() {
  RegForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(100px)";
}
function register() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
}
// add to cart funtion

// add listener
var addButton = document.querySelectorAll(".addToCart");

for (let i = 0; i < addButton.length; i++) {
  addButton[i].addEventListener("click", updateCart);
}

function updateCart(e) {
  currentAddCart = e.target;
  console.log(currentAddCart);
  cartNumbers();
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector("span").textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("span").textContent = 1;
  }

  // add to cart funtion
}

onLoadCartNumbers();
