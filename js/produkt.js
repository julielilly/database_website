fetch("http://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector(".bredcrumb_id").textContent = product.productdisplayname;
  document.querySelector(".price span").textContent = product.price;
  document.querySelector(".basecolour").textContent = product.basecolour;
  document.querySelector(".brandname").textContent = product.brandname;
  document.querySelector(".brandbio").textContent = product.brandbio;
  document.querySelector(".gender").textContent = product.gender;
  document.querySelector(".description").textContent = product.description;
}
