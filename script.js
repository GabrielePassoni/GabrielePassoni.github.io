window.onload = function () {
    var contentBox = document.getElementById("contentpanel");

    document.getElementById("homebutton").addEventListener("click", function (e) {
        //this.classList.add("pressedbutton");
        contentBox.innerHTML = `<div class="presentationcontainer">
        <img id="mainimg" src="./src/Personal.JPG" loading="eager">
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti explicabo dicta delectus distinctio sed numquam, aut laborum odit, tempore quasi cupiditate, repellendus ex quod facere ipsam minima repellat cumque temporibus?</div>
    </div>`
    })

    document.getElementById("projectsbutton").addEventListener("click", function (e) {
        contentBox.innerHTML = ``
    })

    document.getElementById("aboutmebutton").addEventListener("click", function (e) {
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
    })

    document.getElementById("homebutton").click();
}

