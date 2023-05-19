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

// const userCart = document.querySelector('.cart');
// userCart.addEventListener('click', (e) =>{
//     e.preventDefault();
//     //GO TO CART, FUTURE FEATURE
// });