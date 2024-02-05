fetch("https://kea-alt-del.dk/t7/api/products?limit=100")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#small_product_template").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
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

  //append
  document.querySelector("main").appendChild(copy);
}
