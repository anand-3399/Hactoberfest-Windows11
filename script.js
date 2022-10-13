Menu = document.getElementById("Menu")
startmenu = document.getElementsByClassName("startmenu")[0]

Menu.addEventListener("click", () => {
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px"
    }
    else {
        startmenu.style.bottom = "50px"
        startmenu.style.transform = "translateX(0)"
        searchmenu.style.bottom = "-655px"
        // widgetMenu.style.left = "-50%"
        // widgetMenu.style.display = "none"
    }
})

SearchIcon = document.getElementById("SearchIcon")
searchmenu = document.getElementsByClassName("searchmenu")[0]

SearchIcon.addEventListener("click", () => {
    if (searchmenu.style.bottom == "50px") {
        searchmenu.style.bottom = "-655px"

    }
    else {
        searchmenu.style.bottom = "50px"
        searchmenu.style.transform = "translateX(0)"
        startmenu.style.bottom = "-655px"
        widgetMenu.style.left = "-50%"
    }

})

Widgets = document.getElementById("Widgets")
widgetMenu = document.getElementsByClassName("widgetMenu")[0]

Widgets.addEventListener("click", () => {
    if (widgetMenu.style.left == "0px") {
        widgetMenu.style.left = "-70em"
        
    }
    else {
        widgetMenu.style.left = "0px"
        startmenu.style.bottom = "-655px"
        searchmenu.style.bottom = "-655px"
    }

})




// Setting Timings
// START CLOCK SCRIPT

Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

function updateClock() {
    var now = new Date();
    var sec = now.getSeconds(),
        min = now.getMinutes(),
        hou = now.getHours(),
        mo = now.getMonth(),
        dy = now.getDate(),
        yr = now.getFullYear(),
        ampm = "AM";
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    if (hou >= 12) {
        ampm = "PM";
        if (hou > 12)
            hou = hou - 12;
    }
    else if (hou == 0) {
        hou = 12;
        ampm = "AM";
    }
    var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
        corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), ampm];
    for (var i = 0; i < tags.length; i++)
        document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

updateClock();
window.setInterval("updateClock()", 100);

// END CLOCK SCRIPT
// End

clickanywhere = document.getElementById("myVideo")
clickanywhere.addEventListener("click", () => {
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px"
    }
    else if (searchmenu.style.bottom == "50px") {
        searchmenu.style.bottom = "-655px"
    }
    else if(widgetMenu.style.left == "0px"){
        widgetMenu.style.left = "-50%"
    }

})

/* Get the element you want displayed in fullscreen mode (a video in this example): */
var elem = document.documentElement;

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen property yet */


function Fullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}


function myFunction() {
    var input, filter, icons, figure, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    icons = document.getElementById("myICONS");
    figure = icons.getElementsByTagName("figure");
    for (i = 0; i < figure.length; i++) {
        a = figure[i].getElementsByTagName("figcaption")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            figure[i].style.display = "";
        } else {
            figure[i].style.display = "none";
        }
    }
}

function myFunction1() {
    var input, filter, icons, figure, a, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    icons = document.getElementById("myICONS1");
    figure = icons.getElementsByTagName("figure");

    for (i = 0; i < figure.length; i++) {
        a = figure[i].getElementsByTagName("figcaption")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && filter != "" && filter != " ") {
            // figure[i].style.display = "block";
            figure[i].setAttribute('id', 'SearchedTemp')
            figure[i].style.display = "";
        }
        else if ((i < 5) && (filter == "" || filter == " ")) {
            figure[i].setAttribute('id', 'DefaultDisplaySearch');
            figure[i].style.display = "block";
        }
        else {
            figure[i].removeAttribute('id', 'SearchedTemp')
            figure[i].style.display = "none";

        }
    }
}

function GetTime() {
    let h = document.getElementById('h').innerText;
    let m = document.getElementById('m').innerText;
    let mi = document.getElementById('mi').innerText;

    document.getElementsByClassName('hours')[0].innerText = h;
    document.getElementsByClassName('minutes')[0].innerText = m;
    document.getElementsByClassName('am_pm')[0].innerText = mi;
}

window.setInterval("GetTime()", 100);


