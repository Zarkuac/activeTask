document.addEventListener("DOMContentLoaded", function() {
    fetch('/partials/products.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('products').innerHTML = data;
        });

    fetch('/partials/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});


document.getElementById('add-product-btn').addEventListener('click', function() {
    window.location.href = 'add_products.html';
});