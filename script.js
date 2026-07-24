// Browser

document.getElementById("browser").innerText =
navigator.userAgent.includes("Chrome")
? "Chrome"
: navigator.appName;


// Device

const device =
/Mobi|Android/i.test(navigator.userAgent)
? "Android"
: "Desktop";

document.getElementById("device").innerText =
device;


// Negara

fetch("https://ipapi.co/json/")
.then(r=>r.json())
.then(data=>{

document.getElementById("country").innerText =
data.country_name;

})
.catch(()=>{

document.getElementById("country").innerText =
"Tidak terdeteksi";

});


// Battery

if(navigator.getBattery){

navigator.getBattery().then(function(b){

function update(){

const level =
Math.round(b.level*100);

document.getElementById("batteryFill").style.width =
level+"%";

document.getElementById("batteryText").innerText =
level+"%";

}

update();

b.addEventListener("levelchange",update);

});

}
