document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("banner");
    const closeButton = document.getElementById("closeButton");

    // Check if today is Monday, Tuesday, or Wednesday
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) { // Monday = 1, Tuesday = 2, Wednesday = 3
        banner.style.display = "block";
    }

    // to close banner
    closeButton.addEventListener("click", function() {
        banner.style.display = "none";
    });
});
