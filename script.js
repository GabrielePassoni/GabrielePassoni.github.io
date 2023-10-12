window.onload = function () {
    var contentBox = document.getElementById("contentpanel");

    document.getElementById("homebutton").addEventListener("click", function (e) {
        contentBox.innerText = "home";
    })

    document.getElementById("projectsbutton").addEventListener("click", function (e) {
        contentBox.innerText = "project";
    })

    document.getElementById("aboutmebutton").addEventListener("click", function (e) {
        contentBox.innerHTML = `<div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus rerum unde nisi, inventore enim
        qui perspiciatis sit vel tempora aliquid totam ipsa necessitatibus assumenda at earum asperiores harum ea!
    </div>
    <div class="downloadcvpanel">
        <a href="./CVeng.pdf">
            Download here my CV (ENG)
        </a>
        <a href="./CVita.pdf">
            Download here my CV (ITA)
        </a>
    </div>`
    })

    document.getElementById("aboutmebutton").click();

}

