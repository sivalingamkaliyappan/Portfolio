var sidemenu=document.getElementById("sidemenu");
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab").fadeIn(3000);;
}
function openmenu() {
    sidemenu.classList.add("active"); 
}

function closemenu() {
    sidemenu.classList.remove("active"); 
}