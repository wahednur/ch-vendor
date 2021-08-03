

const vendorSub = document.querySelector('.vendor-user-dropdown')
const vendorBtn = document.querySelector('.header-vendor-user-area')
// const vendorSub = document.querySelector('.vendor-user-dropdown')
vendorBtn.addEventListener('click', () => {
    vendorSub.classList.toggle('active');
    
});

const vendorTopmenu = document.querySelector('.mobile-top-nav')
const vendorToBtn = document.querySelector('.mobile-vendor-menu')
vendorToBtn.addEventListener('click', () => {
    vendorTopmenu.classList.toggle('active');
    
    
});

const vendorPrimenu = document.querySelector('.content-wrapper .left-section')
const vendorRight = document.querySelector('.content-wrapper .right-section')
const vendorMenubtn = document.querySelector('.toggle-icon')
vendorMenubtn.addEventListener('click', () => {
    vendorPrimenu.classList.toggle('active');
    vendorRight.classList.toggle('active');
    
});


// sticky nav 
const stikeyNav = document.querySelector('.header-wrapper')
window.addEventListener('scroll', fixNav)
function fixNav(){
    if(window.scrollY > stikeyNav.offsetHeight + 20 ){
        stikeyNav.classList.add('active')
    } else{
        stikeyNav.classList.remove('active')
    }
}


const tobmenu = document.querySelector(".primary-nav").querySelectorAll("a")

tobmenu.forEach(element => {
    element.addEventListener("click", function(){
        tobmenu.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
});
// Left Menu start
$(document).ready(function(){
    $('.menu-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
        // $(this).next('.sub-menu').style.transition='all 0.3s ease-in';
        // $(this).next('.dropdown').style.transition='all 0.3s ease-in';
        


    });  
    
});

// const leftmenu = document.querySelector(".item").querySelectorAll("a")

// leftmenu.forEach(element => {
//     element.addEventListener("click", function(){
//         leftmenu.forEach(nav=>nav.classList.toggle("active"))

//     })
// });
// Left Menu end

const addOptionBtn = document.querySelector('.option-btn');
const shoOption = document.querySelector('.option-body');

addOptionBtn.addEventListener('click', () => {
    shoOption.classList.toggle('active');
    
});


// Schedule btn 
const scheduleBtn = document.querySelector('.schedule');
const scheduleDiv = document.querySelector('.schedule-div');
const scheduleClose = document.querySelector('.cancel');

scheduleBtn.addEventListener('click', () => {
    scheduleDiv.classList.toggle('active');
    scheduleDiv.style.transition="-webkit-transition: all 0.5s ease-in-out;";
    scheduleDiv.style.height="125px"

    
    
});
scheduleClose.addEventListener('click', () => {
    scheduleDiv.classList.remove('active');
    
});

// Question mark 
const questBtn = document.querySelector('.question');
const questBody = document.querySelector('.question-msg');

questBtn.addEventListener('click', () => {
    questBody.classList.toggle('active');   
    
});
// Collups option 

const collupsBtn = document.querySelector('.attrb');
const collupsRbtn = document.querySelector('.remove-class');
const collupsDiv = document.querySelector('.collapse-div');
collupsBtn.addEventListener('click', () => {
    collupsDiv.classList.toggle('active');   
    
});
collupsRbtn.addEventListener('click', () => {
    collupsDiv.classList.toggle('active');   
    
});

// Testting 


AOS.init();
tinymce.init({
    selector: 'textarea:not(.not-here)',
    plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
    toolbar_mode: 'floating',
});


