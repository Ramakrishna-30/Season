document.addEventListener("DOMContentLoaded", function () {
    const seasonImage = document.querySelector(".season-image");
    const springButton = document.getElementById("springBtn");
    const summerButton = document.getElementById("summerBtn");
    const autumnButton = document.getElementById("autumnBtn");
    const winterButton = document.getElementById("winterBtn");

    // URLs for the season images
    const seasonImages = {
        spring: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/spring-img.png",
        summer: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/summer-img.png",
        autumn: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/autumn-img.png",
        winter: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/winter-img.png"
    };

    // Function to change the season image
    function changeSeason(season) {
        seasonImage.src = seasonImages[season];
    }

    // Event listeners for each button
    springButton.addEventListener("click", () => changeSeason("spring"));
    summerButton.addEventListener("click", () => changeSeason("summer"));
    autumnButton.addEventListener("click", () => changeSeason("autumn"));
    winterButton.addEventListener("click", () => changeSeason("winter"));
});
