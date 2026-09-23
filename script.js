document.querySelectorAll(".hero-slide[data-bg]").forEach(slide=>{
  slide.style.backgroundImage=`url('${slide.dataset.bg}')`;
});

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

const heroSlides=document.querySelectorAll(".hero-slide");
let heroIndex=0;
if(heroSlides.length){
  const nextHeroSlide=()=>{
    const duration=heroSlides[heroIndex].classList.contains("logo-slide")?10000:5000;
    setTimeout(()=>{
      heroSlides[heroIndex].classList.remove("active");
      heroIndex=(heroIndex+1)%heroSlides.length;
      heroSlides[heroIndex].classList.add("active");
      nextHeroSlide();
    },duration);
  };
  nextHeroSlide();
}

const imgPreview=document.getElementById("imgPreview");
const imgPreviewImg=document.getElementById("imgPreviewImg");

document.querySelectorAll(".has-preview").forEach(item=>{
  item.addEventListener("mouseenter",()=>{
    imgPreviewImg.src=item.dataset.previewImg;
    imgPreviewImg.alt=item.dataset.previewAlt||"";
    imgPreview.classList.add("show");
  });
  item.addEventListener("mouseleave",()=>{
    imgPreview.classList.remove("show");
  });
});
