const preloaderStart=Date.now();
const minPreloaderTime=1500;

window.onload=()=>{
  const remaining=Math.max(0,minPreloaderTime-(Date.now()-preloaderStart));
  setTimeout(()=>{
    document.getElementById("preloader").style.opacity="0";
    setTimeout(()=>{document.getElementById("preloader").style.display="none";},500);
  },remaining);
};

const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");

menuToggle.addEventListener("click",()=>{
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click",()=>{
    nav.classList.remove("open");
  });
});
