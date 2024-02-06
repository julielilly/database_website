fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(categories) {
  //looper og kalder showCategory
  console.log(categories);
  categories.forEach(showCategory);
}

function showCategory(category) {
  console.log(category);
  //fang template
  const template = document.querySelector("#small_category_template").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("p").textContent = category.category;

  if (category.category == "Accessories") {
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/1525.webp`;
  }
  if (category.category == "Footwear") {
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/1541.webp`;
  }
  if (category.category == "Free Items") {
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/10595.webp`;
  }
  if (category.category == "Personal Care") {
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/18441.webp`;
  }
  if (category.category == "Sporting Goods") {
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/1550.webp`;
  }

  //ændre URL
  copy.querySelector(".read-more").setAttribute("href", `produktliste.html?category=${category.category}`);

  //append
  document.querySelector("main").appendChild(copy);
}

/*<article class="card_content">
                <a class="kategori_img read-more" href="produktliste.html"><img
                        src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="blue fanwear jersey">
                </a>
                <a class="kategori_text" href="produktliste.html">
                    <p>Accessories</p>
                </a>
            </article>
            */
