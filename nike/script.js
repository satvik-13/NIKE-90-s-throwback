// Dynamic product rendering
function renderProducts() {
    const products = [
        {
            name: "Air Jordan Retro",
            price: 129.99,
            image: "nike_1.png",
            description: "TOTALLY RADICAL BASKETBALL KICKS"
        },
        {
            name: "Speed Demon Runner",
            price: 89.99,
            image: "nike_2.png",
            description: "EXTREME PERFORMANCE RUNNING SHOE"
        },
        {
            name: "Neon Street Trainer",
            price: 99.99,
            image: "nike_3.png",
            description: "URBAN STYLE MEETS PERFORMANCE"
        },
        {
            name: "Extreme Workout Pro",
            price: 109.99,
            image: "nike_4.png",
            description: "FITNESS MEETS FASHION"
        }
    ];

    const container = document.getElementById('product-slider');
    container.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-overlay">
                <button class="rad-button">ADD TO CART</button>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
        </div>
    `).join('');
}

// Slider functionality
let currentIndex = 0;

function showProduct(index) {
    const slider = document.getElementById('product-slider');
    const products = document.querySelectorAll('.product');
    const totalProducts = products.length;

    // Ensure index is within bounds
    if (index < 0) index = totalProducts - 1;
    if (index >= totalProducts) index = 0;

    // Slide to the correct product
    slider.style.transform = `translateX(-${index * (products[0].offsetWidth + 20)}px)`; // Adjust for margin
    currentIndex = index;
}

// Event listeners for buttons
document.getElementById('prevBtn').addEventListener('click', () => {
    showProduct(currentIndex - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    showProduct(currentIndex + 1);
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    showProduct(currentIndex);
});
