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

const productPage = document.querySelector('.product-page');
const pageMask = document.querySelector('.page-mask');
const lightboxSection = document.querySelector('.lightbox-section');
const productLightboxPreviewElementArray = document.querySelectorAll('.product-lightbox-preview-element');
const productLightboxPreviewList = document.querySelector('.product-lightbox-preview-lst');
const productLightboxImg = document.querySelector('#lightbox_image');

productImg.addEventListener('click', (e)=>{
    e.preventDefault();
    //hide the page behind by putting opacity on top
    pageMask.classList.toggle('page-disabled');
    lightboxSection.classList.toggle('lightbox-enabled');
    //img selected on the current selected preview corresponding to the image
    let selectedImg = Array.from(productLightboxPreviewList.getElementsByTagName('li'))[0];
    selectedImg.classList.add('img-selected');
    //change src of product lightbox img to match the preview
    let productSrc = selectedImg.getElementsByTagName('img')[0].getAttribute('src').replace('-thumbnail', '');
    productLightboxImg.src = productSrc;
});

const lightboxCloseBtn = document.querySelector('.lightbox-close-btn');
lightboxCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    pageMask.classList.toggle('page-disabled');
    lightboxSection.classList.toggle('lightbox-enabled');
    //delete img-selected tag from every li
    Array.from(productLightboxPreviewList.getElementsByTagName('li')).forEach(li => {
        li.classList.remove('img-selected');
    });
});


//TODO NEED  TO APPLY AND REMOVE THE OPACITY THROUGH PSEUDOELEMENT ON THE IMAGE SELECTED
productLightboxPreviewElementArray.forEach(element => {
    element.addEventListener('click', (e)=>{
        e.preventDefault();
        // delete border and opacity from images not selected
        Array.from(productLightboxPreviewList.getElementsByTagName('li')).forEach(li => {
            li.classList.remove('img-selected');
            // li.getElementsByTagName('img')[0].classList.remove('product-preview-element-img-selected');
        });
        //add border to image selected
        element.parentElement.classList.add('img-selected');

        let elementImg = element.getElementsByTagName('img')[0];

        //add opacity to image selected
        
        // elementImg.classList.add('product-preview-element-img-selected');

        //select product image selected
        let productSrc = elementImg.getAttribute('src').replace('-thumbnail', '');
        productLightboxImg.src = productSrc;
    });
    
});

const btnNextLightbox = document.querySelector('#btn_carousel_next');
const btnPrevLightbox = document.querySelector('#btn_carousel_prev');

btnPrevLightbox.addEventListener('click', (e)=>{
    e.preventDefault();

    //get array of li to search for the img selected
    let liArray = Array.from(productLightboxPreviewList.getElementsByTagName('li'));
    let prevIndex = null;
    let currentIndex = null;
    for (let index = 0; index < liArray.length; index++) {
        element = liArray[index];
        if(Array.from(element.classList).includes('img-selected')){
            currentIndex = index;
            prevIndex = index - 1;
            if(prevIndex < 0){
                prevIndex = liArray.length - 1;
            }   
        } 
    }
    //get the previous image src
    let prevImg = liArray[prevIndex].getElementsByTagName('img')[0];
    let prevImgSrc = prevImg.getAttribute('src').replace('-thumbnail', '');
    if(currentIndex != null && prevIndex  != null){
        //setting product image with the previous image
        productLightboxImg.src = prevImgSrc;
        //removing img-selected tag from current selected img preview
        liArray[currentIndex].classList.remove('img-selected');
        //adding img-selected tag to the previous img preview
        liArray[prevIndex].classList.add('img-selected');
    }
    
});

btnNextLightbox.addEventListener('click', (e)=>{
    e.preventDefault();

    //get array of li to search for the img selected
    let liArray = Array.from(productLightboxPreviewList.getElementsByTagName('li'));
    let nextIndex = null;
    let currentIndex = null;
    for (let index = 0; index < liArray.length; index++) {
        element = liArray[index];
        if(Array.from(element.classList).includes('img-selected')){
            currentIndex = index;
            nextIndex = index + 1;
            if(nextIndex >= liArray.length){
                nextIndex = 0;
            }   
        } 
    }
    //get the previous image src
    let nextImg = liArray[nextIndex].getElementsByTagName('img')[0];
    let nextImgSrc = nextImg.getAttribute('src').replace('-thumbnail', '');
    if(currentIndex != null && nextIndex  != null){
        //setting product image with the previous image
        productLightboxImg.src = nextImgSrc;
        //removing img-selected tag from current selected img preview
        liArray[currentIndex].classList.remove('img-selected');
        //adding img-selected tag to the previous img preview
        liArray[nextIndex].classList.add('img-selected');
    }
    
});

//setting cart quantity preview
//(for the future) it should iterate over the entire cart and 
//have the total quantity of all the items inside of it


function createCartItem(img, name, price, quantity) {
    //item div
    let cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');

    //img thumbnail
    let cartItemImgDiv = document.createElement('div');
    cartItemImgDiv.classList.add('cart-item-img');
    let cartItemImg = document.createElement('img');
    cartItemImg.src = img;
    cartItemImg.alt = "cart image thumbnail";
    cartItemImgDiv.appendChild(cartItemImg);

    //description
    let cartItemDesc = document.createElement('div');
    cartItemDesc.classList.add('cart-item-description');

    //name
    let cartItemName = document.createElement('div');
    cartItemName.classList.add('cart-item-name');
    cartItemName.appendChild(document.createTextNode(name));

    //price
    let cartItemPrice = document.createElement('div');
    cartItemPrice.classList.add('cart-item-price');
    cartItemPrice.appendChild(document.createTextNode('$' + price));

    //p element
    let p = document.createElement('p');
    p.appendChild(document.createTextNode('p'));

    //quantity
    let cartItemQuantity = document.createElement('div');
    cartItemQuantity.classList.add('cart-item-quantity');
    cartItemQuantity.appendChild(document.createTextNode(quantity));
    
    //total price
    let cartItemTotalPrice = document.createElement('div');
    cartItemTotalPrice.classList.add('cart-item-total-price');
    let totalPrice = parseInt(quantity) * parseFloat(price);
    cartItemTotalPrice.appendChild(document.createTextNode('$' + totalPrice));

    cartItemDesc.appendChild(cartItemName);
    cartItemDesc.appendChild(cartItemPrice);
    cartItemDesc.appendChild(p);
    cartItemDesc.appendChild(cartItemQuantity);
    cartItemDesc.appendChild(cartItemTotalPrice);
    
    //delete option
    let cartItemDeleteOpt = document.createElement('div');
    cartItemDeleteOpt.classList.add('cart-item-delete-option');
    let deleteBtn = document.createElement('button');
    let deleteImg = document.createElement('img');
    deleteImg.src = "./images/icon-delete.svg";
    deleteImg.alt = "delete button thrash bin";
    deleteBtn.appendChild(deleteImg);
    cartItemDeleteOpt.appendChild(deleteBtn);

    //link all the parts
    cartItemDiv.appendChild(cartItemImgDiv);
    cartItemDiv.appendChild(cartItemDesc);
    cartItemDiv.appendChild(cartItemDeleteOpt);

    return cartItemDiv;
}
function createCartCheckout(){
    let cartCheckoutDiv = document.createElement('div');
    cartCheckoutDiv.classList.add('cart-checkout');

    let checkoutBtn = document.createElement('button');
    checkoutBtn.classList.add('cart-btn');
    checkoutBtn.appendChild(document.createTextNode('Checkout'));

    checkoutBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        console.log('CHECKOUT!');
        alert('Checkout Done!');
    });

    cartCheckoutDiv.appendChild(checkoutBtn);
    
    return cartCheckoutDiv;
}

function changeVisibilityAndDisplay(div, visibility, display){
    div.style.visibility = visibility;
    div.style.display = display;
    return div
}

//cart empty made visible
const cartItemEmpty = changeVisibilityAndDisplay(document.querySelector('.cart-item-empty'), "visible",  "block");

const cartItemSection = document.querySelector('.cart-item-section');

const cartItemList = document.querySelector('.cart-item-lst');
let cartItem = createCartItem("./images/image-product-1-thumbnail.jpg", "hoih", "23", "3")
cartItemList.appendChild(cartItem);

cartItemSection.appendChild(createCartCheckout());

if(cartItemList.children.length > 0){
    changeVisibilityAndDisplay(cartItemEmpty, "hidden", "none");
    changeVisibilityAndDisplay(cartItemSection, "visible", "flex");
}

const cartQuantityPreview = document.querySelector('.cart-item-quantity-preview');
const cartItemQuantity = document.querySelector('.cart-item-quantity');
if(cartItemQuantity.firstChild !== null){
    cartQuantityPreview.firstChild.data = cartItemQuantity.firstChild.data;
} else {
    cartQuantityPreview.style.visibility = 'hidden';
}

// const userCart = document.querySelector('.cart');
// userCart.addEventListener('click', (e) =>{
//     e.preventDefault();
//     //GO TO CART, FUTURE FEATURE
// });