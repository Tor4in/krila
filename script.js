let pc = document.querySelector("div.manu_pc");
let ph = document.querySelector("div.manu_fone");
let icon = document.querySelector(".icon");
let s = document.querySelectorAll(".s");
let manu = document.querySelector(".manu");
let body = document.querySelector("body");
let header = document.querySelector(".header");
let exit = document.querySelector(".exit");

// header.children[1].classList.contains('manu_pc') ? document.querySelector('.person').style.overflow = 'auto' : document.querySelector('.person').style.overflow = 'hidden'

let add = (i, name) => {
  i.classList.add(name);
};
function remove(i, name) {
  i.classList.remove(name);
}
if (window.innerWidth < 900) {
  add(pc, "hidden");
  add(ph, "manu_fone");
  remove(pc, "manu_pc");
  remove(ph, "hidden");
} else {
  remove(ph, "manu_fone");
}
window.addEventListener("resize", (e) => {
  if (window.innerWidth < 900) {
    add(pc, "hidden");
    add(ph, "manu_fone");
    remove(pc, "manu_pc");
    remove(ph, "hidden");
  } else {
    add(ph, "hidden");
    remove(ph, "manu_fone");
    remove(pc, "hidden");
    add(pc, "manu_pc");
  }
});

let opened = false;
let anim_end = true;
icon.addEventListener("click", () => {
  !opened && anim_end ? open() : opened && anim_end ? close() : false;
});
exit.addEventListener("click", () => {
  close();
});

let open = () => {
  opened = !opened;
  anim_end = !anim_end;
  remove(exit, "hidden");
  remove(manu, "hidden");
  remove(icon, "close");
  add(manu, "move_open");
  add(icon, "open");
  add(icon, "animation_open");
  add(body, "sl");

  for (const i of s) {
    add(i, "open_s");
  }
  setTimeout(() => {
    anim_end = !anim_end;
  }, 1000);
};

let close = () => {
  opened = !opened;
  anim_end = !anim_end;
  add(manu, "move_close");
  add(icon, "animation_close");
  for (const i of s) {
    add(i, "close_s");
  }
  exit.classList.contains("hidden") ? true : add(exit, "hidden");
  remove(body, "sl");
  add(icon, "close");
  setTimeout(() => {
    for (const i of s) {
      remove(i, "open_s");
      remove(i, "close_s");
    }
    remove(manu, "move_open");
    remove(manu, "move_close");
    remove(icon, "close");
    remove(icon, "animation_open");
    remove(icon, "animation_close");
    anim_end = !anim_end;
  }, 1000);

  remove(icon, "open");
};
let hide = () => {
  add(header, "hide");
  setTimeout(() => {
    remove(header, "no_hide");
  }, 400);
  scrollY = window.scrollY;
};
let no_hide = () => {
  add(header, "ho_hide");
  setTimeout(() => {
    remove(header, "hide");
  }, 400);
  scrollY = window.scrollY;
};

let scrollY = 0;
const ibg1 = document.getElementById("ibg1");
const ibg2 = document.getElementById("ibg2");
const ibg3 = document.getElementById("ibg3");
const img1 = document.getElementById('img1')
setInterval(() => {
  if(window.innerWidth < 900){
    scrollY < window.scrollY - 30
    ? hide()
    : scrollY > window.scrollY + 30 || scrollY <= 50
    ? no_hide()
    : false;
  }else{
    exit.classList.contains("hidden") ? true : add(exit, "hidden");
  remove(body, "sl");
  
  
    for (const i of s) {
      remove(i, "open_s");
      remove(i, "close_s");
    }
    remove(manu, "move_open");
    remove(manu, "move_close");
    remove(icon, "close");
    remove(icon, "animation_open");
    remove(icon, "animation_close");
    remove(icon, 'open')
    anim_end = true
    opened = false
    scrollY < window.scrollY - 20
    ? hide()
    : scrollY > window.scrollY + 20 || scrollY <= 150
    ? no_hide()
    : false;
  }
  

  scrollY = window.scrollY;
  
  if(window.innerWidth < 900){
    if(ibg1 || ibg2 || ibg3){
      if (scrollX >= 0 && ibg1.classList.contains("hidden") && img1.classList.contains('hidden')) {
        remove(ibg1, "hidden");
        remove(img1, 'hidden')
        setTimeout(() => {
          ibg1.style.opacity = "0.7";
          ibg1.style.transform = `translateX(${-10}%)`;
          img1.style.transform = `translate(${0}%)`;
          img1.style.filter = `grayscale(${0}%)`;
        }, 10);
      }
      if (scrollY > 370 && ibg2.classList.contains("hidden")) {
        remove(ibg2, "hidden");
        setTimeout(() => {
          ibg2.style.opacity = "0.7";
          ibg2.style.transform = `translateX(${10}%)`;
        }, 10);
  
      }
      if (scrollY > 900 && ibg3.classList.contains("hidden")) {
        remove(ibg3, "hidden");
        setTimeout(() => {
          ibg3.style.opacity = "0.7";
          ibg3.style.transform = `translate(${0})`;
        }, 10);
  
      }
    }
  }else if(window.innerWidth > 900 ){
    if(ibg1 || ibg2 || ibg3){
      if (scrollX >= 0 && ibg1.classList.contains("hidden") && img1.classList.contains('hidden')) {
        remove(ibg1, "hidden");
        remove(img1, 'hidden')
        setTimeout(() => {
          ibg1.style.opacity = "0.7";
          ibg1.style.transform = `translateX(${-10}%)`;
          img1.style.transform = `translate(${0}%)`;
          img1.style.filter = `grayscale(${0}%)`;
        }, 10);
      }
      if (scrollY > 600 && ibg2.classList.contains("hidden")) {
        remove(ibg2, "hidden");
        setTimeout(() => {
          ibg2.style.opacity = "0.7";
          ibg2.style.transform = `translateX(${10}%)`;
        }, 10);
  
      }
      if (scrollY > 1400 && ibg3.classList.contains("hidden")) {
        remove(ibg3, "hidden");
        setTimeout(() => {
          ibg3.style.opacity = "0.7";
          ibg3.style.transform = `translate(${0})`;
        }, 10);
  
      }
    }
  }
  
  
}, 50);
