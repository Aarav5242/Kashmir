// ===========================
// LOADER
// ===========================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.transition="0.8s";

}

});


// ===========================
// HEAVY SNOWFALL
// ===========================

function createSnow(){

const snow=document.createElement("div");

snow.className="snowflake";

const flakes=["❄","❅","❆","•","✦"];

snow.innerHTML=flakes[Math.floor(Math.random()*flakes.length)];

snow.style.left=Math.random()*window.innerWidth+"px";

// Faster fall
snow.style.animationDuration=(Math.random()*3+2)+"s";

// Different sizes
snow.style.fontSize=(Math.random()*18+8)+"px";

// Different opacity
snow.style.opacity=Math.random()*0.8+0.2;

// Wind effect
snow.style.transform=`translateX(${Math.random()*100-50}px)`;

document.body.appendChild(snow);

setTimeout(()=>{

snow.remove();

},6000);

}

// Create MUCH MORE snow
setInterval(createSnow,40);