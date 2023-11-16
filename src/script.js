
// .......sec-4-slider.........



// .......sec-6-slider.........

  

// .......headersticky.........





// .......scrollbtn.........





// .......toggle btn.........

let getButton = document.querySelector(".hamburgericon");
let offCanvas = document.querySelector(".navigation");
offCanvas.classList.add("hideCanvas");
let temp = true;

getButton.addEventListener('click',function(){
  temp = !temp;
  if(!temp){
    offCanvas.classList.remove("hideCanvas");
  }
  else{
    offCanvas.classList.add("hideCanvas");
  }

})


// .............Portfolio............


