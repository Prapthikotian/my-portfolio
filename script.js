// EDIT HERE: paste your real links between the quotes
var LINKEDIN = "https://www.linkedin.com/in/prapthi-kotian-b43984374";
var GITHUB = "https://github.com/Prapthikotian";

(function(){
  // links
  function setLink(ids, url){ ids.forEach(function(id){ var a=document.getElementById(id); if(a && url){ a.href=url; a.target="_blank"; a.rel="noopener"; var b=a.querySelector("b"); if(b) b.textContent=url.replace(/^https?:\/\//,""); } }); }
  setLink(["li","li2"], LINKEDIN); setLink(["gh","gh2"], GITHUB);
  document.querySelectorAll('[data-edit="project"]').forEach(function(a){ a.href=GITHUB; a.target="_blank"; a.rel="noopener noreferrer"; });
  document.getElementById("yr").textContent = new Date().getFullYear();

  // theme toggle
  var root=document.documentElement, btn=document.getElementById("theme");
  try{ var t=localStorage.getItem("theme"); if(t) root.setAttribute("data-theme",t); }catch(e){}
  btn.addEventListener("click",function(){
    var dark = root.getAttribute("data-theme")==="dark" || (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme",next);
    try{ localStorage.setItem("theme",next); }catch(e){}
  });

  // typing roles
  var roles=["Aspiring Software Developer","Android App Developer","Web Developer","Always learning something new"];
  var el=document.getElementById("role"), r=0, c=0, del=false;
  if(matchMedia("(prefers-reduced-motion: reduce)").matches){ el.textContent=roles[0]; }
  else (function tick(){
    var w=roles[r];
    el.textContent = w.slice(0,c);
    if(!del && c<w.length){ c++; setTimeout(tick,70); }
    else if(!del){ del=true; setTimeout(tick,1500); }
    else if(c>0){ c--; setTimeout(tick,35); }
    else { del=false; r=(r+1)%roles.length; setTimeout(tick,300); }
  })();

  // slide-up entrance + glow that follows the pointer
  var targets=document.querySelectorAll(".box,.tl,.contact-list a,section h2,.about p");
  if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }); },{threshold:.12});
    targets.forEach(function(el,i){ el.classList.add("rv"); el.style.animationDelay=(i%3)*110+"ms"; io.observe(el); });
  }
  document.querySelectorAll(".box,.contact-list a").forEach(function(el){
    el.addEventListener("pointermove",function(e){ var r=el.getBoundingClientRect(); el.style.setProperty("--mx",(e.clientX-r.left)+"px"); el.style.setProperty("--my",(e.clientY-r.top)+"px"); });
  });

  // project filter
  var fb=document.querySelectorAll(".filters button"), cards=document.querySelectorAll(".proj");
  fb.forEach(function(b){ b.addEventListener("click",function(){
    fb.forEach(function(x){ x.setAttribute("aria-pressed", x===b ? "true":"false"); });
    cards.forEach(function(p){ p.hidden = b.dataset.f!=="all" && p.dataset.k!==b.dataset.f; });
  }); });
})();
