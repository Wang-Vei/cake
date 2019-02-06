// Banner
function banner(bannerArea,bannerChildNode,bannerButtonNode,bannerButtonNodeClassList,bannerButtonNodeSelectedClassList,intervalTime){
    // bannerArea[element],bannerChildNode[className string],bannerButtonNode[className string],bannerButtonNodeClassList[className string],bannerButtonNodeSelectedClassList[className string],intervalTime[millisecond int]
    // e.g. banner(topBanner,'topBannerChild','topBannerButton','_ringWhite','_ringWhiteSelected')
    let bannerChild = bannerArea.querySelectorAll("."+bannerChildNode);
    let bannerButton = bannerArea.querySelectorAll("."+bannerButtonNode);
    if(bannerChild.length!=bannerButton.length){
        console.log("Error in banner")
    }
    else{
        let flag = 0; 
        // onclick
        for(let i=0;i<bannerChild.length;i++){
            bannerButton[i].onclick=()=>{
                bannerButton.forEach(function(ele){
                    ele.classList.remove(bannerButtonNodeSelectedClassList);
                    ele.classList.add(bannerButtonNodeClassList);
                })
                bannerButton[i].classList.remove(bannerButtonNodeClassList);
                bannerButton[i].classList.add(bannerButtonNodeSelectedClassList);
                bannerChild.forEach(function(ele){
                    ele.style.zIndex="10";
                })
                bannerChild[i].style.zIndex="15";
                flag = i;
            }
        }
        // auto 
        bannerButton[0].onclick();
        function next(){
            flag<bannerChild.length-1?flag+=1:flag=0;
            bannerButton[flag].onclick();
        }
        let jumping = window.setInterval(next,intervalTime);
    }
}

// topBanner
const topBanner = document.querySelector("#topBanner");
banner(topBanner,'topBannerChild','topBannerButton','_ringWhite','_ringWhiteSelected',3000)
// newBanner
const newBanner = document.querySelector("#newBanner");
banner(newBanner,'newBannerChild','newBannerButton','_ringPink','_ringPinkSelected',3000)

// recommend
const recommend = document.querySelector("#recommend");
let recommendChild = recommend.querySelectorAll(".recommendChild");
let recommendMore = recommend.querySelectorAll(".recommendMore");
recommendChild.forEach(function(ele,index){
    ele.onmouseenter=()=>{
        recommendMore[index].style.display="block";
    }
    ele.onmouseleave=()=>{
        recommendMore[index].style.display="none";
    }
})