function openGift() {

    const giftWrapper =
        document.querySelector(".gift-wrapper");

    const message =
        document.getElementById("gift-message");

    const sparkles =
        document.getElementById("sparkles");

    const clickText =
        document.querySelector(".click-text");


    // Prevent repeated clicks
    if (giftWrapper.classList.contains("opened")) {
        return;
    }


    // Open gift
    giftWrapper.classList.add("opened");


    // Sparkle animation
    sparkles.classList.add("show");


    // Change instruction
    clickText.innerHTML =
        "A little something for you ❤️";


    // Reveal message
    setTimeout(() => {

        message.classList.add("show");

        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 700);

}