// Product data
const products = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": { "rate": 4.1, "count": 259 }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "rating": { "rate": 4.7, "count": 500 }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    "rating": { "rate": 2.1, "count": 430 }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    "rating": { "rate": 4.6, "count": 400 }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    "rating": { "rate": 3.9, "count": 70 }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    "rating": { "rate": 3, "count": 400 }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    "rating": { "rate": 1.9, "count": 100 }
  },
  {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility. Fast data transfers and improved PC performance.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    "rating": { "rate": 3.3, "count": 203 }
  },
  {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    "rating": { "rate": 2.9, "count": 470 }
  },
  {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash delivers high transfer speeds and improved overall system performance.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    "rating": { "rate": 4.8, "count": 319 }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere. Sleek design with high capacity.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    "rating": { "rate": 4.8, "count": 400 }
  },
  {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21.5 inches Full HD widescreen IPS display with Radeon free Sync technology.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    "rating": { "rate": 2.9, "count": 250 }
  },
  {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA)",
    "price": 999.99,
    "description": "49-inch super ultrawide 32:9 curved gaming monitor with QLED technology and HDR support.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    "rating": { "rate": 2.2, "count": 140 }
  },
  {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "US standard size. Detachable liner fabric with warm fleece. Adjustable hood and cuff.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    "rating": { "rate": 2.6, "count": 235 }
  },
  {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "Faux leather material for style and comfort with removable hood and detailed stitching.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    "rating": { "rate": 2.9, "count": 340 }
  },
  {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight raincoat with hood, drawstring waist, and two side pockets.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    "rating": { "rate": 3.8, "count": 679 }
  },
  {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% Rayon 5% Spandex, lightweight fabric with great stretch for comfort.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    "rating": { "rate": 4.7, "count": 130 }
  },
  {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, machine wash, lightweight, roomy, and moisture-wicking fabric.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    "rating": { "rate": 4.5, "count": 146 }
  },
  {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95% Cotton, 5% Spandex. Casual short sleeve V-neck T-shirt with letter print.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    "rating": { "rate": 3.6, "count": 145 }
  }
];

// رسالة ترحيب
alert(` Welcome ${prompt('what is Your Name ? ')} To The Soso Store`)




// elements
let input = document.getElementById('searchInput')
let productContainer = document.getElementById('productCards')
let categorySelect = document.getElementById('category-select')
let price = document.getElementById('price')
let theme = document.getElementById('themes')
let cartBotton = document.getElementsByClassName('button')
let cartPage = document.getElementById('cart')
let cartContainer = document.getElementById('cartContainer')
let homeLink = document.getElementById('homeLink')


let cartItems = [];

// فاريبل بيخذن الصنف الي المستخدم ضغط عليه
let selectedCategory = "category";
// حالة الموقع غامق ولا فاتح
function themeConvertor(){
    // لو المستخدم ضغط انه عايز دارك
    if (document.body.classList.contains('light')){
        document.body.classList.replace('light','dark')
        theme.textContent = '🌞'
    }
    // لو المستخدم ضغط انه عايز لايت
    else if(document.body.classList.contains('dark')){
        document.body.classList.replace('dark', 'light')
        theme.textContent = '🌑'
    }
}

// بيعمل كارت
function makeCard(product,container,isInCart = false){
    container.innerHTML += `
    <div class = 'card'>
        <img src = ${product.image}>
        <h1 class = 'title'>${product.title}</h1>
        <h2 class = 'price'>${product.price}</h2>
        <h2 class = 'category'>${product.category}</h2>
        <button class="button" data-id="${product.id}">${isInCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </div>
    `
}

// بتعمل الكروت كلها وتضيفهم في الصفحه
function combineCards(products){
  // لوب لعمل الكروت كلها
    products.forEach(product => {
        makeCard(product,productContainer)
    })
}

// بيعمل الفلتر
function filteration(){
  // فلتر لسيرش المستخدم
  let new_products = products.filter(product => 
      product.title.toLowerCase().includes(input.value.trim().toLowerCase()) &&
      (selectedCategory === "category" || product.category === selectedCategory) &&
      (parseInt(product.price) <= parseInt(price.value)|| price.value == ''));
    // بنخلي الديف فاضيه عشان نحط نتايج السيرش
    productContainer.innerHTML = ''
    // لو عدد المنتاجات الي لقينها اكتر من 0 اعرضهم
    if (new_products.length > 0){
        combineCards(new_products)
    } 
    // لو لا اكتب مفيش نتايج
    else {
        productContainer.innerHTML = `<h1 class ="case">لا توجد نتائج</h1>`
    }
}

// بيضيف للعربه
function addToCart(product){
    cartItems.push(product)
}

// بيشيل من العربه
function removeFromCart(id){
    cartItems = cartItems.filter(product => product.id !== id);
}


// لو ضغط على العربه عشان يشوف الايتمز الي فيها
function cartClick() {
    productContainer.textContent = '';
    cartContainer.textContent = '';   

    if(cartItems.length === 0){
        cartContainer.innerHTML ='<h2 class = "case">العربة فارغة</h2>';
        return;
    }

    cartItems.forEach(product => {
        makeCard(product, cartContainer,true);
    });
}

// لو ضغط الهوم عشان يرجع لصفحة المنتجات
function showHome() {
    cartContainer.textContent = '';       
    productContainer.textContent = '';    
    combineCards(products);               
}

// بيشغل الكود كامل
function run(){
    combineCards(products);
    document.addEventListener('click', function (clickedElement){
      if (clickedElement.target.classList.contains('button')){
        let id = parseInt(clickedElement.target.dataset.id)
        let clickedProduct = products.find(product => product.id === id);
        if (clickedElement.target.textContent === 'Add to Cart' ){
          addToCart(clickedProduct)
        }
        else if (clickedElement.target.textContent === "Remove from Cart"){
          removeFromCart(id)
    
        }
      }
})
    homeLink.addEventListener('click', showHome);
    cartPage.addEventListener('click',cartClick)
    // 1. حدث تغيير الصنف
    categorySelect.addEventListener('change', function(){
        selectedCategory = this.value;
        filteration();
    });

    // 2. حدث تغيير السعر
    price.addEventListener('input', filteration); 

    // 3. حدث الكتابة في انبت السيرش
    input.addEventListener('input', filteration);


    // 5. حدث تغيير الثيم
    theme.addEventListener('click', themeConvertor);
}

run()





