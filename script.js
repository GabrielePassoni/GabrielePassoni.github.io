window.onload = function () {
    var contentBox = document.getElementById("contentpanel")
    var homebutton = document.getElementById("homebutton")
    var projectsbutton = document.getElementById("projectsbutton")
    var aboutmebutton = document.getElementById("aboutmebutton")

    homebutton.addEventListener("click", function (e) {
        this.classList.add("pressedbutton")
        projectsbutton.classList.remove("pressedbutton")
        aboutmebutton.classList.remove("pressedbutton")
        /*let img = new window.Image()
        img.src = "./src/Personal.jpg"
        img.onload = function () {*/
        load("https://gabrielepassoni.github.io/home.html").then(value => {
            contentBox.innerHTML = value
            display()
        })
        //}
    })

    document.getElementById("projectsbutton").addEventListener("click", function (e) {
        this.classList.add("pressedbutton")
        homebutton.classList.remove("pressedbutton")
        aboutmebutton.classList.remove("pressedbutton")
        load("https://gabrielepassoni.github.io/projects.html").then(value => {
            contentBox.innerHTML = value
            contentBox.querySelectorAll(".projectdiv").forEach(e => {
                e.addEventListener("click", function (event) {
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
        contentBox.querySelector("div").classList.add("appear")
    }

    function load(httpsString) {
        return new Promise(resolve => {
            let request = new XMLHttpRequest()
            request.onreadystatechange = () => {
                if (request.readyState == request.DONE) {
                    let reqDoc = request.response
                    let images = [...reqDoc.querySelectorAll("img")]
                    Promise.all(images.map(img => new Promise(resolve => img.onload = resolve)))
                        .then(() => resolve(request.responseText))
                }
            }
            request.open("GET", httpsString)
            request.send()
        })
    }

    const images = [...document.querySelectorAll("div img")];

    // list all image widths and heights _after_ the images have loaded:
    Promise.all(images.map(im => new Promise(resolve => im.onload = resolve))).then(() => {
        console.log("The images have loaded at last!\nHere are their dimensions (width,height):");
        console.log(images.map(im => ([im.width, im.height])));
    })

    document.getElementById("homebutton").click()
}

