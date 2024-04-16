window.onload = function () {
    var contentBox = document.getElementById("contentpanel");
    var homebutton = document.getElementById("homebutton");
    var projectsbutton = document.getElementById("projectsbutton");
    var aboutmebutton = document.getElementById("aboutmebutton");

    homebutton.addEventListener("click", function (e) {
        this.classList.add("pressedbutton");
        projectsbutton.classList.remove("pressedbutton");
        aboutmebutton.classList.remove("pressedbutton");
        let img = new window.Image();
        img.src = "./src/Personal.JPG";
        img.onload = function () {
            contentBox.src="./home.html"
            display();
        }
    })

    document.getElementById("projectsbutton").addEventListener("click", function (e) {
        this.classList.add("pressedbutton");
        homebutton.classList.remove("pressedbutton");
        aboutmebutton.classList.remove("pressedbutton");
        contentBox.src="./projects.html"
        contentBox.querySelectorAll(".projectdiv").forEach((e, n, l) => {
            e.addEventListener("click", function (event) {
                if (e.classList.contains("selectedp")) {
                    e.classList.remove("selectedp");
                    e.querySelector(".pdescription").classList.remove("visibledescription");
                    e.querySelector(".pdescription").classList.add("hiddendescription");
                } else {
                    e.classList.add("selectedp");
                    e.querySelector(".pdescription").classList.remove("hiddendescription");
                    e.querySelector(".pdescription").classList.add("visibledescription");
                }
            })
        })
        display();
    })

    document.getElementById("aboutmebutton").addEventListener("click", function (e) {
        this.classList.add("pressedbutton");
        projectsbutton.classList.remove("pressedbutton");
        homebutton.classList.remove("pressedbutton");
        contentBox.src = "./aboutme.html"
        display();
    })

    function display() {
        contentBox.querySelector("div").classList.add("appear");
    }

    document.getElementById("homebutton").click();
}

