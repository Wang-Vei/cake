// header
let navBts = document.querySelectorAll(".navBts")
let navBtsIn = document.querySelectorAll(".navBtsIn")
for(let i=0;i<navBts.length;i++){
    navBts[i].onmouseenter=function(){
        navBtsIn[i].style.display="block";
    }
    navBts[i].onmouseleave=function(){
        navBtsIn[i].style.display="none";
    }
}