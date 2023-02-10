const message = document.getElementById("message");
const button = document.getElementById("btn");


const randomMessage = () => {
    const listOfMessages = [
        '“Doing what you love is the cornerstone of having abundance in your life.” ~ Wayne Dyer.', 
        '“Riches are not from abundance of worldly goods, but from a contented mind.” ~ Unknown', 
        '“Abundance is not something we acquire. It is something we tune into.” ~ Wayne Dyer',
        '“Having everything is just an expression of complete inner freedom.” ~ Deepak Chopra',
        '“Any person who contributes to prosperity must prosper in turn.” ~ Earl Nightingale',
        '“Life in abundance comes only through great love.” ~ Elbert Hubbard',
        '“What is called genius is the abundance of life and health.” ~ David Henry Thoreau',
        '“Abundance is a process of letting go; that which is empty can receive.” ~ Bryant H. McGill',
        '“Abundance can be had simply by consciously receiving what already has been given.” ~ Sufi Saying',
        '“When you realize there is nothing lacking, the whole world belongs to you.” ~ Lao Tzu',
        '“Giving is the secret of abundance.” ~ Sivanandan',
        '“When you are grateful fear disappears and abundance appears.” ~ Anthony Robbins',
    ]
       const randomIndex = Math.floor(Math.random() * listOfMessages.length)
       const item = listOfMessages[randomIndex];
       return item;
}

const showMessage = () => {
    message.innerHTML = randomMessage();
}


btn.addEventListener('click', showMessage);