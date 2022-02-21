let checkbox = document.getElementById('themeCheckbox');
let features = document.getElementById('features');
let about = document.getElementById('about');


checkbox.onchange = function(e) {
    console.log(e.target.checked);

    if(e.target.checked) {
        document.body.className = "dark";
        features.style.color = "rgb(243, 243, 240)";
        about.style.color = "white";
        localStorage.setItem("isDarkMode", true);
    } else {
        document.body.className = "";
        features.style.color = "";
        about.style.color = "";
        localStorage.removeItem("isDarkMode");
    }
}

let dark = localStorage.getItem('isDarkMode');

if(dark) {
    checkbox.checked = true;
    document.body.className = "dark";
    features.style.color = "white"
    about.style.color = "white";
}