var sidenav = document.querySelector('.side-navbar');

function showNavbar() {
    sidenav.style.left = "0";  // Show the side navbar
}

function closeNavbar() {
    sidenav.style.left = "-60%";  // Hide the side navbar
}
// 3️⃣ Image Zoom on Hover
const productImages = document.querySelectorAll(".product-card img");
productImages.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.2)";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

