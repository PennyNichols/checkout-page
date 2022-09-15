// functionality needed:
// plus and minus buttons adjust the quantity of each item
// adjusting quantity changes the value for product total, subtotal, tax, and total
// remove button pop up verification and then removes item
// Optional extras: discount percentage, total savings

const tax = 18;
const shipping = 15;

let products = document.querySelector(".products");
products.addEventListener("click", (e) => {
	if (e.target.classList.contains("remove-product")) {
		if (confirm(`Are you sure you want to remove this item?`)) {
			e.target.parentElement.parentElement.parentElement.remove();
		}
	} else if (e.target.classList.contains("plus")) {
		e.target.previousElementSibling.innerText++;
	} else if (e.target.classList.contains("minus")) {
        if (e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText--;
		} else if (confirm(`Are you sure you want to remove this item?`)) {
            e.target.parentElement.parentElement.parentElement.remove();
		}
	}
    
const calcLine = (productDetails) => {
    console.log(productDetails);
    let qty = productDetails.querySelector('#product-quantity').innerText;
    let reducedPrice = productDetails.querySelector('strong').innerText;
    let originalPrice = productDetails.querySelector('.line-through').innerText;
    
        
}
});
