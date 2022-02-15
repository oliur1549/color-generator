


// create onload handler
window.onload=()=>{
    main();
}
function main(){
const root=document.getElementById('root');
const btn=document.getElementById('color-btn');

btn.addEventListener('click',function () {
    const rgbColor=generateRGB();
    root.style.backgroundColor=rgbColor;
});
}

//generate rgb function
function generateRGB(){
    // rgb(0,0,0) rgb(255,255,255)
const red=Math.floor(Math.random() * 255)
const green=Math.floor(Math.random() * 255)
const blue=Math.floor(Math.random() * 255)

return `rgb(${red}, ${green}, ${blue})`
}
// collect all necessary reference

// handle click event
