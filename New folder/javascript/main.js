window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.background =  "rgba(44, 73, 100, 0.5)";
    } else {
        document.getElementById("navbar").style.background =  "transparent";
    }
    }