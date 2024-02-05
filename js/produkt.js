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
}

/*  <div>
                <h1>Sahara Team India Fanwear Round Neck Jersey</h1>
                <div class="price">895,00 kr</div>
                <div class="color">
                    <p>Color:</p>
                    <p>Blue</p>
                </div>
                <div class="size">
                    <label for="customer">Size:</label>
                    <div class="size_answer">
                        <select name="customer" id="customer" required>
                            <option value="">Choose</option>
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                        </select>
                    </div>
                </div> */
