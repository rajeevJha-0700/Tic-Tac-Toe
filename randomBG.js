let myGameButtons = document.querySelectorAll(".cell"); //cell is classname of group of buttons
let  myBodyColor = document.querySelector(".bd1");//bd1 is class name of body

//code for random color change
var rd, gr, bl ;
myGameButtons.forEach(
    (cell)=>{
        cell.addEventListener("click",()=>{
            //generating RGB values for random color change
             rd = Math.floor(Math.random()*255);//for red
            
             gr =Math.floor(Math.random()*255);//for green

             bl = Math.floor(Math.random()*255);//for blue
            
            myBodyColor.style.backgroundColor = myColor(rd,gr,bl);
            
        })

        cell.addEventListener("mouseover",()=>{
            cell.style.backgroundColor = myColor(rd,gr,bl);
         }
        )

    }
);

//function that generate random colors
function myColor(red,green,blue) {
    let bgColor = "RGB( "+red + ","+green+","+blue+")";
    return bgColor;
}