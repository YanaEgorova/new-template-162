export const item = (product) => {

  return `
    <li class="item swiper-slide">

      
  <div class="product__block js_product glass glass-m" id="${product.id}">

  <div class="product__img-box">
  <div class="product__img-sub-box">
     <img src="${product.image}" alt="" class="img">
</div>
    </div>
  
    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
    
      <span class="product__price" data-text="$${(product.price).toFixed(2)}">
      $${(product.price).toFixed(2)}
      </span>
      <div class="product__btn-block">
      <a href="product-page.html?id=${product.id}" class="btn btn--first">
      details
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	  viewBox="0 0 220.682 220.682" style="enable-background:new 0 0 220.682 220.682;"
                	 xml:space="preserve">
                <g>
                	<polygon points="92.695,38.924 164.113,110.341 92.695,181.758 120.979,210.043 220.682,110.341 120.979,10.639 	" fill="#000"/>
                	<polygon points="28.284,210.043 127.986,110.341 28.284,10.639 0,38.924 71.417,110.341 0,181.758 	" fill="#ffa500"/>
                </g>
                </svg>
      </a>
  
    <button class="btn js_add-to-cart">
    buy
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 220.682 220.682" style="enable-background:new 0 0 220.682 220.682;"
   xml:space="preserve">
<g>
  <polygon points="92.695,38.924 164.113,110.341 92.695,181.758 120.979,210.043 220.682,110.341 120.979,10.639 	" fill="#000"/>
  <polygon points="28.284,210.043 127.986,110.341 28.284,10.639 0,38.924 71.417,110.341 0,181.758 	" fill="#ffa500"/>
</g>
</svg>
    </button>
    </div>
      </div>

 
    
</div>

  </li>
    `
}


