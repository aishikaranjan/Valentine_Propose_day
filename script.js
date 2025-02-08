const messages = [
    "Pukku you sure?",
    "PUCHIKAANN REALLYY sure??",
    "DEKHLE BUBUS nahi dikhangi fir?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will sleep naked again ALONE...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Store flag to indicate that the user clicked "Yes"
    sessionStorage.setItem("playMusic", "true");

    // Find the audio element and play the music
    let audio = new Audio('your-audio-file.mp3');
    audio.loop = true; // Loop the music
    audio.play();

    // Redirect to the "Yes" page
    window.location.href = "yes_page.html";
}
