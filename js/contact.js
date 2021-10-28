// Menu Link Active

$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});

//Menu Burger

let eat = 0;
let menuBurger = document.getElementById("header__burger");

menuBurger.onclick = function(){
	if( eat%2 == 0 ){
		document.getElementById('header__links').classList.add('display');
    eat++;
	} else if( eat%2 != 0 ) {
    document.getElementById('header__links').classList.remove('display');
    eat++;
  }
}

//
//    MEDIA QUERIES
//


// Scroll function of menu header and width > 767px

function heightOfLinks(){
	if($(window).width() < 767) {
		document.getElementById('header__links').style.top = "55px";
		document.getElementById('header__links').style.top = "55px !important";
	};
};


window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 300){
  	document.getElementById('header').classList.add('header_scrolled');
} else {
		document.getElementById('header').classList.remove('header_scrolled');
};
});
