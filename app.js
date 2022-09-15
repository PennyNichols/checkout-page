// functionality needed:
// plus and minus buttons adjust the quantity of each item
// adjusting quantity changes the value for product total, subtotal, tax, and total
// remove button pop up verification and then removes item
// Optional extras: discount percentage, total savings

let products = document.querySelector(".products");
products.addEventListener("click", (e) => {
	if (e.target.classList.contains("remove-product")) {
		if (confirm(`Are you sure you want to remove this item?`)) {
			e.target.parentElement.parentElement.parentElement.remove();
		}
	} else if (e.target.classList.contains("plus")) {
		e.target.previousElementSibling.innerText++;
		calcLine(e.target.parentElement.parentElement);
	} else if (e.target.classList.contains("minus")) {
		if (e.target.nextElementSibling.innerText > 1) {
			e.target.nextElementSibling.innerText--;
			calcLine(e.target.parentElement.parentElement);
		} else if (confirm(`Are you sure you want to remove this item?`)) {
			e.target.parentElement.parentElement.parentElement.remove();
		}
	}
});

const calcLine = (productDetails) => {
	console.log("working");
	let qty = productDetails.querySelector("#product-quantity").innerText;
	let reducedPrice = productDetails.querySelector("strong").innerText;
	let originalPrice = productDetails.querySelector(".line-through").innerText;
	let discount = productDetails.querySelector("#discount");
	let lineTotal = productDetails.querySelector(".product-line-price");

	lineTotal.innerText = ((qty * (reducedPrice * 100)) / 100).toFixed(2);
	discount.innerText = ((originalPrice * 100 * qty - reducedPrice * 100 * qty) /100).toFixed(2);

	calcTotal();
};

const calcTotal = () => {
	let lineTotals = document.querySelectorAll(".product-line-price");
	let subtotal = 0;
	let tax = 18;
	lineTotals.forEach((eachLineTotal) => {
		subtotal += Number(eachLineTotal.innerText);
	});

	taxTotal = (subtotal * tax) / 100;
	console.log(taxTotal);

	document.querySelector("#subtotal").innerText = subtotal.toFixed(2);
	document.querySelector("#tax-total").innerText = taxTotal.toFixed(2);
};
calcTotal();
