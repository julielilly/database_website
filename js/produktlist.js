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

  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

  //append
  document.querySelector("main").appendChild(copy);
}

/* 
<ul class="bredcrumb">
            <li><a href="index.html">Home</a></li>
            <span class="material-symbols-outlined">
                chevron_right
            </span>
            <li><a href="kategori.html">Categories</a></li>
            <span class="material-symbols-outlined">
                chevron_right
            </span>
            <li>Apparel</li>
        </ul>

        <h1>Apparel</h1>


<article class="card_content">
                <a class="discount hide" href="produkt.html">50%</a>
                <a class="notinstock hide" href="produkt.html">Sold out</a>
                <a class="produktliste_img read-more" href="produkt.html"><img
                        src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="blue fanwear jersey">
                </a>
                <a class="produktliste_text" href="produkt.html">
                    <p class="name">Sahara Team India Fanwear Round Neck Jersey</p>
                    <p class="price"> <span class="amount"></span>,00 kr</p>
                </a>
            </article> */
