const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
console.log(category);

fetch("https://kea-alt-del.dk/t7/api/products?limit=100&category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  console.log(products);
  products.forEach(showProduct);

  //ændrer tekst uden for copy
  if (category == "Accessories") {
    document.querySelector("h1").textContent = "Accessories";
    document.querySelector(".category_type").textContent = "Accessories";
  }
  if (category == "Apparel") {
    document.querySelector("h1").textContent = "Apparel";
    document.querySelector(".category_type").textContent = "Apparel";
  }
  if (category == "Footwear") {
    document.querySelector("h1").textContent = "Footwear";
    document.querySelector(".category_type").textContent = "Footwear";
  }
  if (category == "Free Items") {
    document.querySelector("h1").textContent = "Free Items";
    document.querySelector(".category_type").textContent = "Free Items";
  }
  if (category == "Personal Care") {
    document.querySelector("h1").textContent = "Personal Care";
    document.querySelector(".category_type").textContent = "Personal Care";
  }
  if (category == "Sporting Goods") {
    document.querySelector("h1").textContent = "Sporting Goods";
    document.querySelector(".category_type").textContent = "Sporting Goods";
  }
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#small_product_template").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold i copy
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("p").textContent = product.productdisplayname;
  copy.querySelector(".amount").textContent = product.price;
  copy.querySelector(".discount").textContent = product.discount + "%";

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
    copy.querySelector(".notinstock").classList.remove("hide");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("sale");
    copy.querySelector(".discount").classList.remove("hide");
  }

  copy.querySelectorAll(".read-more").forEach((elem) => elem.setAttribute("href", `produkt.html?id=${product.id}`));

  //append
  document.querySelector("main").appendChild(copy);
}
