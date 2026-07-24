// ==============================
// ALL TOOLS ASTROCAT
// ==============================

// Negara
fetch("https://ipapi.co/json/")
.then(res => res.json())
.then(data => {
    document.getElementById("country").textContent =
        data.country_name || "Unknown";
})
.catch(() => {
    document.getElementById("country").textContent = "Unknown";
});

// Device
const ua = navigator.userAgent;

let device = "Desktop";

if (/iPhone/i.test(ua)) {
    device = "iPhone";
} else if (/iPad/i.test(ua)) {
    device = "iPad";
} else if (/Android/i.test(ua)) {
    device = "Android";
} else if (/Mac/i.test(ua) && "ontouchend" in document) {
    device = "iPad";
}

document.getElementById("device").textContent = device;

// Browser
let browser = "Unknown";

if (ua.includes("Edg")) {
    browser = "Microsoft Edge";
} else if (ua.includes("OPR") || ua.includes("Opera")) {
    browser = "Opera";
} else if (ua.includes("Firefox")) {
    browser = "Firefox";
} else if (ua.includes("Chrome") && !ua.includes("Edg")) {
    browser = "Chrome";
} else if (ua.includes("Safari") && !ua.includes("Chrome")) {
    browser = "Safari";
}

document.getElementById("browser").textContent = browser;

// Battery
if ("getBattery" in navigator) {

    navigator.getBattery().then(battery => {

        function updateBattery() {

            const level = Math.round(battery.level * 100);

            document.getElementById("batteryPercent").textContent =
                level + "%";

            document.getElementById("batteryFill").style.width =
                level + "%";

        }

        updateBattery();

        battery.addEventListener("levelchange", updateBattery);

    });

} else {

    document.getElementById("batteryPercent").textContent = "N/A";
    document.getElementById("batteryFill").style.width = "100%";

}

// Search Tools
const searchInput = document.getElementById("searchInput");
const toolCards = document.querySelectorAll(".toolCard");

searchInput.addEventListener("input", function () {

    const keyword = this.value.toLowerCase();

    toolCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        card.style.display =
            text.includes(keyword)
            ? "block"
            : "none";

    });

});

// Fade In
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// Online / Offline
const onlineText = document.querySelector(".online");

function updateStatus() {

    if (navigator.onLine) {

        onlineText.textContent = "Online";
        onlineText.style.color = "#42ff88";

    } else {

        onlineText.textContent = "Offline";
        onlineText.style.color = "#ff5b5b";

    }

}

updateStatus();

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        ?.scrollIntoView({
            behavior:"smooth"
        });

    });

});

// Console
console.log("%cAll Tools AstroCat",
"color:#b46cff;font-size:20px;font-weight:bold;");
console.log("Developed by Kazo Senpai");
