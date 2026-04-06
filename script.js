const reviews = [
    {
        text: "спасибо вам большое за чудесный брелок! доставка быстрая, упаковка хорошая.",
        user: "@ idlayairwi",
        img: "content/review.png"
    },
    {
        text: "лучший небольшой подарок на день рождения. спасибо за возможность порадовать себя. всё дошло быстро и без проблем.",
        user: "@ sophekoo",
        img: "content/21.jpg"
    },
];

let currentIndex = 0;
let intervalId;

const reviewText = document.getElementById('review-container');
const reviewUser = document.getElementById('review-user');
const reviewImg = document.getElementById('review-img');
const reviewCard = document.querySelector('.review-card');

function updateReview(index) {
    reviewCard.style.opacity = 0;

    setTimeout(() => {
        reviewText.textContent = reviews[index].text;
        reviewUser.textContent = reviews[index].user;
        reviewImg.src = reviews[index].img;
        reviewCard.style.opacity = 1;
    }, 300);
}

function nextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview(currentIndex);
}

function startSlider() {
    intervalId = setInterval(nextReview, 5000);
}

function stopSlider() {
    clearInterval(intervalId);
}

document.addEventListener('DOMContentLoaded', function() {
    updateReview(0);
    startSlider();
});