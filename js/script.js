// $(document).ready(function(){
//     $('.block__title').click(function(event){
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });

// const headers = document.querySelectorAll("[data-name='block__title']");

// headers.forEach(function(title) {
//     item.addEventListener("click", headerClick);
// });

// function headerClick() {
//     this.nextElementSibling.classList.toggle("block__text");
// }









// const headers = document.querySelectorAll("[data-name='spoiler-title']");

// headers.forEach(function(item) {
//     item.addEventListener("click", headerClick);
// });

// function headerClick() {
//     this.nextElementSibling.classList.toggle("element__text-item");
// }


let o="321";

let k;

function explode(s) {
  let z;
  for (var i=0; i<s.lentgh; i++)
  {
    
    let t = Number(s[i]);
    z=t.repeat(t);
   
    
  }
  

  return z;  
}

  console.log(explode(o));
