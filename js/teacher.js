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

// Hover Event на учителях 

function getLinkTeacher(i,x,y,z){
	document.getElementById(i).onmouseenter = function(){
		document.getElementById(x).classList.add('social_opacity');
		document.getElementById(y).classList.add('mt-10');
		document.getElementById(z).classList.add('cb');
	}
	document.getElementById(i).onmouseleave = function(){
		document.getElementById(x).classList.remove('social_opacity');
		document.getElementById(y).classList.remove('mt-10');
		document.getElementById(z).classList.remove('cb');
	}
}

getLinkTeacher('teacher1','social1','teacher_image1','teacher_name1');
getLinkTeacher('teacher2','social2','teacher_image2','teacher_name2');
getLinkTeacher('teacher3','social3','teacher_image3','teacher_name3');
getLinkTeacher('teacher4','social4','teacher_image4','teacher_name4');
getLinkTeacher('teacher5','social5','teacher_image5','teacher_name5');
getLinkTeacher('teacher6','social6','teacher_image6','teacher_name6');
getLinkTeacher('teacher7','social7','teacher_image7','teacher_name7');
getLinkTeacher('teacher8','social8','teacher_image8','teacher_name8');