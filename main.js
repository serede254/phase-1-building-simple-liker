// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded",()=>{
  const emptyHearts = document.querySelectorAll(".like-glyph");

emptyHearts.forEach(hearts => {
  hearts.addEventListener("click",async(event)=>{
      try{
          await mimicServerCall()

          event.target.innerText=FULL_HEART
          event.target.classList.add("activated-heart");
      }catch(error){
              const errorModal = document.getElementById("modal")
              const errorMessage =document.getElementById("modal-message")
              errorMessage.textContent = "error"
              errorModal.classList.remove("activated-heart")
      
      setTimeout((errorModal)=>{
        errorModal.classList.add("hidden")},3000);
      }
  })
});
const fullHearts= document.querySelectorAll(".like-glyph")
fullHearts.forEach(hearts =>{
hearts.addEventListener("click",(event)=>{
  event.target.innerText = EMPTY_HEART
  event.target.classList.remove("actiated-heart")

})
})
})


function hideModal() {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}