const product = [
    {
        id:1,
        name: "iPhone 15 Pro",
        price: 999,
        category: "iPhones",
        Image: ttps://via.placeholder.com/300x200/3b82f6/white?text=iPhone+15+Pro" "https://via.placeholder.com/300x200/3b82f6/white?text=iPhone+15+Pro",
        description: "The latest iPhon with amazing camera and performance"
    },
    {
        id:2,
        name: "MacBook Air",
        price: 1199,
        category: "Laptops",
        Image:"https://via.placeholder.com/300x200/10b981/white?text=MacBook+Air",
        description: "Lightweight laptop perfect for work and creativity"
    },
    {
        id:3,
        name: "AirPods Pro",
        price: 249,
        category: "Accessoories",
        Image: "https://via.placeholder.com/300x200/f59e0b/white?text=AirPods+Pro",
        description: "wireless earbuds with noise cancellation"
    },
    {
        id:4,
        name: "Samsung Galaxy S24",
        price: 999,
        category: "Phones",
        Image: ttps: "https://via.placeholder.com/300x200/8b5cf6/white?text=Galaxy+S24",
        description: "Android phone with incredible features"
    },
    {
        id:5,
        name: "Dell Laptop",
        price: 799,
        category: "Phones",
        Image: ttps: "https://via.placeholder.com/300x200/06b6d4/white?text=Dell+Laptop",
        description: "Android phone with incredible features"
    },
    {
        id:6,
        name: "Wireless Mouse",
        price: 49,
        category: "Accessories",
        Image: ttps:   "https://via.placeholder.com/300x200/ec4899/white?text=Wireless+Mouse",
        description: "Ergonomic wireless mouse productivity"
    },
];

//step2: creating our shopping cart.
//This will store all ite,s the costomer wants to buy

let cart =[];

//step3: Get references to HTML elements
//This connects our js to specific parts of our webpage

const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

//step3: Utility function to format prices
//This will make a price look like "R999" instead of "999"

function formatPrice(price){
    return 'R' + price.toFixed(2)
}

console.log('JavaScript Loades successfully!');
console.log('We have, products.length,'products.);