const productPreviewList = document.querySelector('.product-preview-lst');
const productPreviewElementArray = document.querySelectorAll('.product-preview-element');
const productImg = document.querySelector('.product-image');
productPreviewElementArray.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        // delete border and opacity from images not selected
        Array.from(productPreviewList.getElementsByTagName('li')).forEach(li => {
            li.classList.remove('img-selected');
            li.getElementsByTagName('img')[0].classList.remove('product-preview-element-img-selected');
        });
        //add border to image selected
        element.parentElement.classList.add('img-selected');

        let elementImg = element.getElementsByTagName('img')[0];

        //add opacity to image selected
        elementImg.classList.add('product-preview-element-img-selected');

        //select product image selected
        let productSrc = elementImg.getAttribute('src').replace('-thumbnail', '');
        productImg.getElementsByTagName('img')[0].src = productSrc;
    });
});

const userCart = document.querySelector('.cart');
userCart.addEventListener('click', (e) =>{
    e.preventDefault();
    //GO TO CART, FUTURE FEATURE
});