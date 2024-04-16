window.onload = function () {
    var contentBox = document.getElementById("contentpanel")
    var homebutton = document.getElementById("homebutton")
    var projectsbutton = document.getElementById("projectsbutton")
    var aboutmebutton = document.getElementById("aboutmebutton")

    homebutton.addEventListener("click", function (e) {
        this.classList.add("pressedbutton")
        projectsbutton.classList.remove("pressedbutton")
        aboutmebutton.classList.remove("pressedbutton")
        load("https://gabrielepassoni.github.io/home.html").then(value => {
            contentBox.innerHTML = value
            display()
        })
    })

    document.getElementById("projectsbutton").addEventListener("click", function (e) {
        this.classList.add("pressedbutton")
        homebutton.classList.remove("pressedbutton")
        aboutmebutton.classList.remove("pressedbutton")
        load("https://gabrielepassoni.github.io/projects.html").then(value => {
            contentBox.innerHTML = value
            contentBox.querySelectorAll(".projectdiv").forEach(e => {
                e.addEventListener("click", event => {
                    if (e.classList.contains("selectedp")) {
                        e.classList.remove("selectedp")
                        e.querySelector(".pdescription").classList.remove("visibledescription")
                        e.querySelector(".pdescription").classList.add("hiddendescription")
                    } else {
                        e.classList.add("selectedp")
                        e.querySelector(".pdescription").classList.remove("hiddendescription")
                        e.querySelector(".pdescription").classList.add("visibledescription")
                    }
                })
            })
            contentBox.querySelectorAll(".projectdiv a").forEach(e => {
                e.addEventListener("click", event => event.stopPropagation())
                e.classList.add("descanchor")
            })
            display()
        })
    })

    document.getElementById("aboutmebutton").addEventListener("click", function (e) {
        this.classList.add("pressedbutton")
        projectsbutton.classList.remove("pressedbutton")
        homebutton.classList.remove("pressedbutton")
        load("https://gabrielepassoni.github.io/aboutme.html").then(value => {
            contentBox.innerHTML = value
            display()
        })
    })

    function display() {
        let images = [...contentBox.querySelectorAll("img")]
        Promise.all(images.map(img => new Promise(resolve => img.onload = resolve)))
            .then(() => contentBox.querySelector("div").classList.add("appear"))
    }

    function load(httpsString) {
        return new Promise(resolve => {
            let request = new XMLHttpRequest()
            request.onreadystatechange = () => {
                if (request.readyState == request.DONE) resolve(request.responseText)
            }
            request.open("GET", httpsString)
            request.send()
        })
    }

    document.getElementById("homebutton").click()
}

