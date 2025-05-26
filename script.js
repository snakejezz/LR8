function showProduct(id) {
  document.getElementById("catalog").style.display = "none";
  document.getElementById("product1").style.display = "none";
  document.getElementById("product2").style.display = "none";
  document.getElementById("product3").style.display = "none";
  document.getElementById(id).style.display = "block";
}

function showCatalog() {
  document.getElementById("catalog").style.display = "block";
  document.getElementById("product1").style.display = "none";
  document.getElementById("product2").style.display = "none";
  document.getElementById("product3").style.display = "none";
}

function addToCart() {
  const notify = document.getElementById("cart-notification");
  notify.classList.remove("hidden");
  notify.classList.add("show");

  setTimeout(() => {
    notify.classList.remove("show");
    notify.classList.add("hidden");
  }, 2500);
}
