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
            contentBox.innerHTML = `<div class="presentationcontainer">
            <img id="mainimg" src="./src/Personal.JPG" loading="eager">
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti explicabo dicta delectus distinctio
                sed numquam, aut laborum odit, tempore quasi cupiditate, repellendus ex quod facere ipsam minima
                repellat cumque temporibus?</div>
            <div id="contactpanel">
                <a href=""><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></a>
                <a href=""><img
                        src="//upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png"></a>
                <a href=""><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"></a>
                <a href=""><img
                        src="https://static.vecteezy.com/system/resources/previews/009/973/213/original/email-and-mail-icon-sign-symbol-design-free-png.png"></a>
            </div>
        </div>`
            display();
        }
    })

    document.getElementById("projectsbutton").addEventListener("click", function (e) {
        this.classList.add("pressedbutton");
        homebutton.classList.remove("pressedbutton");
        aboutmebutton.classList.remove("pressedbutton");
        contentBox.innerHTML = ``
        contentBox.querySelectorAll(".projectdiv").forEach((e, n, l) => {
            e.addEventListener("click", function (event) {
                if (e.classList.contains("selectedp")) {
                    e.classList.remove("selectedp");
                } else {
                    e.classList.add("selectedp");
                    e.querySelector(".pdescription").classList.add("visibledescription");
                }
            })
        })
        contentBox.querySelector("div").classList.add("appear");
    })

    contentBox.querySelectorAll(".projectdiv").forEach((e, n, l) => {
            e.addEventListener("click", function (event) {
                if (e.classList.contains("selectedp")) {
                    e.classList.remove("selectedp");
                } else {
                    e.classList.add("selectedp");
                    e.querySelector(".pdescription").classList.add("visibledescription");
                }
            })
        })

    document.getElementById("aboutmebutton").addEventListener("click", function (e) {
        this.classList.add("pressedbutton");
        projectsbutton.classList.remove("pressedbutton");
        homebutton.classList.remove("pressedbutton");
        contentBox.innerHTML = `<div class="cvcontainer">
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus rerum unde nisi, inventore
            enim
            qui perspiciatis sit vel tempora aliquid totam ipsa necessitatibus assumenda at earum asperiores harum
            ea!
        </div>
        <div id="downloadcvpanel">
            <a href="./src/CVita.pdf" class="button">
                Download here my CV (ENG)
            </a>
            <a href="./src/CVita.pdf" class="button">
                Download here my CV (ITA)
            </a>
        </div>
        </div>`
        display();
    })

    function display() {
        contentBox.querySelector("div").classList.add("appear");
    }

    //document.getElementById("homebutton").click();
}

