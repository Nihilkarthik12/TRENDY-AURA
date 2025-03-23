const products = [
  { id: 1, name: "Trendy T-shirt", price: "Rs 999", image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww" },
  { id: 2, name: "Stylish Jacket", price: "Rs 1499", image: "https://images.unsplash.com/photo-1684778243737-bd5b1d4c1b75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0eWxpc2glMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D" },
  { id: 3, name: "Elegant Dress", price: "Rs 1999", image: "https://images.unsplash.com/photo-1547697933-66bcb20f114a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds" },
  { id: 4, name: "Classic Sneakers", price: "Rs 2499", image: "https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D" },
  { id: 5, name: "Casual Jeans", price: "Rs 1299", image: "https://images.unsplash.com/photo-1662011966037-7ea814f79a64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhc3VhbCUyMGplYW5zfGVufDB8fDB8fHww" },
  { id: 6, name: "Leather Handbag", price: "Rs 2999", image: "https://images.unsplash.com/photo-1691480250099-a63081ecfcb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMGhhbmQlMjBiYWd8ZW58MHx8MHx8fDA%3D" },
  { id: 7, name: "Trendy Sunglasses", price: "Rs 799", image: "https://images.unsplash.com/photo-1502767089025-6572583495f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsdWUlMjBzdW5nbGFzc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 8, name: "Formal Shirt", price: "Rs 1199", image: "https://media.istockphoto.com/id/623215670/photo/confidence-looks-great-on-him.webp?a=1&b=1&s=612x612&w=0&k=20&c=oGpy8mymY-yYZcU16kyirLMF3rcqA3w0Tg0JennXSQk=" },
  { id: 9, name: "Wrist Watch", price: "Rs 3499", image: "https://plus.unsplash.com/premium_photo-1728582543415-f3acc737f1fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2glMjByb2xleHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 10, name: "Sport Shoes", price: "Rs 1999", image: "https://images.unsplash.com/photo-1637437757614-6491c8e915b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0JTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 11, name: "Denim Jacket", price: "Rs 1899", image: "https://plus.unsplash.com/premium_photo-1690366914306-d5f673a5dc4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVuaW0lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3Dt" },
  { id: 12, name: "Printed Scarf", price: "Rs 499", image: "https://images.unsplash.com/photo-1645199396991-2630fdba51d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJpbnRlZCUyMHNjYXJmfGVufDB8fDB8fHww" }
];

const productList = document.getElementById("product-list");

function displayProducts(productsToDisplay) {
  productList.innerHTML = "";
  productsToDisplay.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    productList.appendChild(productCard);
  });
}

function filterProducts() {
  const searchValue = document.getElementById("search-bar").value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchValue)
  );
  displayProducts(filteredProducts);
}

function addToCart(productName) {
  alert(`${productName} has been added to your cart!`);
}

displayProducts(products);
