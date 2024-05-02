let reviewBtns = document.querySelectorAll(".review__btn");
let submitBtn = document.querySelector(".review__submit-btn");

let reviewContainer = document.querySelector(".review__container");
let submittedContainer = document.querySelector(".submitted__container");
let reviewDisplayContainer = document.querySelector(".submitted__review-selection");

let selectedReview = null;

function highlightSelected(selectedBtn) {
  selectedReview = selectedBtn;
  selectedBtn.classList.toggle("rating-selected");  
}

function unselectPrev() {
  if (selectedReview !== null) {
    selectedReview.classList.toggle("rating-selected");
  }
}

reviewBtns.forEach(btns => {
  btns.addEventListener("click", e => {
    unselectPrev();
    highlightSelected(e.target);
  });
})

submitBtn.addEventListener("click", e => {
  if (selectedReview !== null) {
    reviewContainer.classList.toggle("hidden");
    submittedContainer.classList.toggle("hidden");
    reviewDisplayContainer.innerText = selectedReview.innerText;
  } else {
    alert("Please choose a rating!");
  }
})