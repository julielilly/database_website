const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("http://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector(".bredcrumb_id").textContent = product.productdisplayname;
  document.querySelector(".bredcrumb_category").textContent = product.category;
  document.querySelector(".price span").textContent = product.price;
  document.querySelector(".basecolour").textContent = product.basecolour;
  document.querySelector(".brandname").textContent = product.brandname;
  document.querySelector(".brandbio").textContent = product.brandbio;
  document.querySelector(".gender").textContent = product.gender;
  document.querySelector(".description").textContent = product.description;

  document.querySelector(".bredcrumb_category").setAttribute("href", `produktliste.html?category=${product.category}`);
}
