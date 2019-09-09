var app = document.getElementById('bg_sub_title');
var typewriter = new Typewriter(app, {
loop: true,
cursor	: "|"
});
typewriter.typeString('<strong>Tutorials, News, Stories</strong>')
.pauseFor(2500)
.deleteAll()
.typeString('<strong>Html, Css, Php, Javascript</strong>')
.pauseFor(2500)
.deleteAll()
.typeString('<strong>Node, Laravel</strong>')
.pauseFor(2500)
.start();
function openNav() {
document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
document.getElementById("myNav").style.width = "0%";
}


//read more
$(document).on("click",".box",function() {

    var url = $(this).data('url');
    window.location.href = url;

});