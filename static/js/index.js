// Banner
function banner(bannerArea,bannerChildNode,bannerButtonNode,bannerButtonNodeClassList,bannerButtonNodeSelectedClassList,intervalTime){
    // bannerArea[element],bannerChildNode[className string],bannerButtonNode[className string],bannerButtonNodeClassList[className string],bannerButtonNodeSelectedClassList[className string],intervalTime[millisecond int]
    // example: banner(topBanner,'topBannerChild','topBannerButton','_ringWhite','_ringWhiteSelected')
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
banner(topBanner,'topBannerChild','topBannerButton','_ringWhite','_ringWhiteSelected',3000);
// newBanner
const newBanner = document.querySelector("#newBanner");
banner(newBanner,'newBannerChild','newBannerButton','_ringPink','_ringPinkSelected',3000);

// show
function show(showArea,triggerNode,hiddenNode){
    // showArea[element],triggerNode[className string],hiddenNode[className string]
    // example: show(recommend,'recommendChild','recommendMore')
    trigger = showArea.querySelectorAll("."+triggerNode)
    trigger.forEach(function(ele){
        ele.onmouseenter=()=>{
            ele.querySelector("."+hiddenNode).style.display="block";
        }
        ele.onmouseleave=()=>{
            ele.querySelector("."+hiddenNode).style.display="none";
        }
    })
}

// recommend
const recommend = document.querySelector("#recommend");
show(recommend,'recommendChild','recommendMore');
// discount
const discount = document.querySelector("#discount");
show(discount,'discountChildImg','discountChildImgInside');