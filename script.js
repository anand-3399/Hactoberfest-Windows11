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
window.setInterval("updateClock()", 1);

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

})
