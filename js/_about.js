/* Menu Link Active */

$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});

/* Menu Burger */

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

//	Counter

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

///PHOTO TO BIG

function photoToBig(i,x,y,z){
	document.getElementById(i).onclick = function(){
		document.getElementById('photoBig').classList.add('visibility');
		document.getElementById(x).classList.add('visibility');
		document.getElementById(y).classList.add('visibility');
		document.getElementById(z).classList.add('visibility');
	}
	document.getElementById(y).onclick = function(){
		document.getElementById('photoBig').classList.remove('visibility');
		document.getElementById(x).classList.remove('visibility');
		document.getElementById(y).classList.remove('visibility');
		document.getElementById(z).classList.remove('visibility');	
	}
}

photoToBig('photo1','frame1','bigPhoto1','photoDisplay1');
photoToBig('photo2','frame2','bigPhoto2','photoDisplay2');
photoToBig('photo3','frame3','bigPhoto3','photoDisplay3');
photoToBig('photo4','frame4','bigPhoto4','photoDisplay4');