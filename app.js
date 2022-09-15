// functionality needed:
// plus and minus buttons adjust the quantity of each item
// adjusting quantity changes the value for product total, subtotal, tax, and total
// remove button pop up verification and then removes item
// Optional extras: discount percentage, total savings


const tax = 0.18;
const shipping = 15;

let products = document.querySelector('.products');
products.addEventListener('click', (e) =>{
    if (e.target.classList.contains('remove-product')){
        console.log('working');
        if (confirm(`Are you sure you want to remove this item?`)) {
            e.target.parentElement.parentElement.parentElement.remove();
        }
    } else if (e.target.classList.contains('plus')){
        console.log('working');
    }
})


