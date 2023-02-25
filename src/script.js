function LoadProduct(id) {
    fetch(`http://fakestoreapi.com/products/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (product) {
            document.getElementById("title").innerHTML = product.title;
            document.getElementById("pic").src = product.image;
            document.getElementById("details").innerHTML = `&#8377; ${product.price}<br><span class="bi bi-star-fill"></span> ${product.rating.rate}`;
        })
}
function bodyload() {
    LoadProduct(1);
}
var count = 1;
function NextClick() {
    count++;
    LoadProduct(count);
}
function PreviousClick() {
    count--;
    LoadProduct(count);
}