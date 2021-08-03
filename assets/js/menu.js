$(document).ready(function(){
    $('ul.nav.submenu li a').click(function(){
        // $('.left-primary-menu ul.left-menu li').removeClass('active');
        $('ul.nav.submenu li').removeClass('active');
       $(this).parent().addClass('active');
       
   


// jQuery( document ).ready( function ( $ ) {
//     //checkbox_custome_design();
//     $( ".hasmenu > a" ).click( function ( e ) {

//         if ( $( this ).attr( 'href' ) == '#' )
//             e.preventDefault();

//         if ( !$( this ).hasClass( "active" ) ) {
//             $( ".hasmenu" ).find( "a" ).removeClass( "active" );
//             $( this ).addClass( "active" );
//             if ( !$( this ).closest( "ul" ).hasClass( 'submenu' ) ) {
//                 $( ".hasmenu" ).find( "ul" ).slideUp();
//             }
//             $( this ).next( "ul" ).slideDown();
//         } else {
//             $( this ).removeClass( "active" );
//             $( '.hasmenu' ).find( "ul" ).slideUp();
//         }

//     } );
// } );


       
/* others */ 
// $("#sidebar > ul > li").each(function() {
//     var sideItem = $(this);
//     if (sideItem.find("a").attr("href") == location.pathname) {
//       sideItem.addClass("activation");
//     }
// });

// (function($) {
//   $(document).ready(function() {

//     $('#sidebar li.active').addClass('open').children('ul').show();
//     $('#sidebar li.sub>a').on('click', function() {
//       $(this).removeAttr('href');
//       var element = $(this).parent('li');
//       if (element.hasClass('open')) {
//         element.removeClass('open');
//         element.find('li').removeClass('open');
//         element.find('ul').slideUp(200);
//       } else {
//         element.addClass('open');
//         element.children('ul').slideDown(200);
//         element.siblings('li').children('ul').slideUp(200);
//         element.siblings('li').removeClass('open');
//         element.siblings('li').find('li').removeClass('open');
//         element.siblings('li').find('ul').slideUp(200);
//       }
//     });

//   });
// })(jQuery);


// jQuery( document ).ready( function ( $ ) {
//     //checkbox_custome_design();
//     $( ".hasmenu > a" ).click( function ( e ) {

//         if ( $( this ).attr( 'href' ) == '#' )
//             e.preventDefault();

//         if ( !$( this ).hasClass( "active" ) ) {
//             $( ".hasmenu" ).find( "a" ).removeClass( "active" );
//             $( this ).addClass( "active" );
//             if ( !$( this ).closest( "ul" ).hasClass( 'submenu' ) ) {
//                 $( ".hasmenu" ).find( "ul" ).slideUp();
//             }
//             $( this ).next( "ul" ).slideDown();
//         } else {
//             $( this ).removeClass( "active" );
//             $( '.hasmenu' ).find( "ul" ).slideUp();
//         }

//     } );
// } );




/* -------------------- */
    //    $(this).siblings().addClass('active');
    // if($('ul.dropdown-accord-menu li').hasClass('active')){
    //     $(this).parent().addClass('active');
    // }
       
    //    $('ul.dropdown-accord-menu li a').click(function(){
    //        $('ul.dropdown-accord-menu li').removeClass('active');
    //        $(this).parent().addClass('active');
    //        if($('ul.dropdown-accord-menu li').hasClass('active')){
    //            $('.left-primary-menu ul.left-menu li').parent().addClass('active');
    //        }
    //    })





    //    if(!$(this).siblings().hasClass('active')){
    //        $(this).siblings().addClass('active');
           
    //        if($(this).siblings().hasClass('active')){
    //            $(this).parent().addClass('active');
    //        }
    //    }
       
    //    $sib = $(this).siblings().children();


    //    $acord = $('ul.dropdown-accord-menu');
    //    $acordSub = $('ul.dropdown-accord-menu li');
    //    $subPar = $('ul.left-menu li');
    //    if($acordSub.hasClass('active')){
    //       $acord.addClass('active');
    //       $subPar.addClass('active');
    //    }

    });
  
});
// const subMenu = document.querySelector("ul.dropdown-accord-menu").querySelectorAll("a")
// subMenu.forEach(element => {
//     element.addEventListener("click", function(){
//         subMenu.forEach(nav=>nav.classList.remove("active"))

//         this.classList.add("active");
       
    
//     })
// });

// const subMenu = document.querySelector("ul.dropdown-accord-menu").querySelectorAll("a")
// subMenu.forEach(element => {
//     element.addEventListener("click", function(){
//         subMenu.forEach(nav=>nav.classList.remove("active"))

//         this.classList.add("active");
       
    
//     })
// });
// $(document).ready(function(){
//     $('ul.dropdown-accord-menu li a').click(function(){
//         $('ul.dropdown-accord-menu li').removeClass('active');
//        $(this).parent().addClass('active');
//        $acord = $('ul.dropdown-accord-menu');
//        $acordSub = $('ul.dropdown-accord-menu li');
//        $subPar = $('ul.left-menu li');
//        if($acordSub.hasClass('active')){
//           $acord.addClass('active');
//           $subPar.addClass('active');
//        }

       
//     });
  
// });


// $(document).ready(function () {
//     $('.left-primary-menu ul.left-menu a').click(function(e) {

//         $('.left-primary-menu li a.active').removeClass('active');
//         var $sub = $('.dropdown-accord-menu');
//         if(!$sub.hasClass('active')){
//             $sub.addClass('active');
//         }else{
//             $sub.removeClass('active');
//         }
//         var $parent = $(this).parent();
//         $parent.addClass('active');
//         e.preventDefault();
//     });
// });


// const subMenu = document.querySelectorAll('ul.dropdown-accord-menu');
// $(document).ready(function(){
//     $('.left-primary-menu ul.left-menu li a').click(function(){
//         $('.left-primary-menu ul.left-menu li').removeClass('active');
//        $(this).parent().addClass('active');
//     });
  
// });




// const parentBtn = document.querySelector('.left-primary-menu ul.left-menu li a');
// const openSubMenu = document.querySelector('.left-primary-menu ul.left-menu li ul');
// const subMenuItem = document.querySelector('ul.dropdown-accord-menu li a');
// const iconRotate = document.querySelector('.arrow');

// parentBtn.addEventListener('click', () =>{
//     openSubMenu.classList.toggle('active');
//     iconRotate.classList.toggle('active');
// })

// parentBtn.forEach(element => {
//     element.addEventListener("click", function(){
//         openSubMenu.classList.toggle('active');
//     })
// });