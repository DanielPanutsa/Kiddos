/*$(window).load(function() {
 
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
 
});*/
function loader(){
document.getElementById('loader').classList.add('hidden');
}

setTimeout(loader, 1000);