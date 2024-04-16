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
            contentBox.src="home.html"
            display();
        }
    })

    document.getElementById("projectsbutton").addEventListener("click", function (e) {
        this.classList.add("pressedbutton");
        homebutton.classList.remove("pressedbutton");
        aboutmebutton.classList.remove("pressedbutton");
        contentBox.innerHTML = `<div class="projectscontainer">
        <div>Here are my projects, click on them for resources and to know more!</div>
        <div class="projectdiv">
            <img
                src=".src/Sensor.jpg">
            <div class="ptitle">Parking lot sensor</div>
            <div class="pdescription">Built on Wokwi I've implemented a simple but working example of a parking lot sensor. 
                Download <a href="./src/ESP32 Parking Lot Sensor.pdf">here</a> the documentation and see the code of the two versions here:<br>
            <a href="https://wokwi.com/projects/392709327217516545">Debug Version</a><br><a href="https://wokwi.com/projects/392342464269069313">Time Version</a></div>
        </div>
        <div class="projectdiv">
            <img
                src="https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1">
            <div class="ptitle">
                Veryverylongtiabcdefghijkl lllllllll
            </div>
            <div class="pdescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus a esse minima!
                Fuga voluptas, quos corrupti tempora amet nihil sed similique quisquam autem magnam dicta quibusdam
                doloremque, quia aut perspiciatis.</div>
        </div>
        <div class="projectdiv">
            <img
                src="https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1">
            <div class="ptitle">Veryverylongtitle</div>
            <div class="pdescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus a esse minima!
                Fuga voluptas, quos corrupti tempora amet nihil sed similique quisquam autem magnam dicta quibusdam
                doloremque, quia aut perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi
                blanditiis, rem accusamus voluptas nesciunt porro earum soluta facilis eius exercitationem
                doloremque ipsa, corrupti, commodi a totam deserunt ipsum provident. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Commodi nam rem veritatis sunt quam tempore eaque! Quas veritatis
                magnam odit quod ipsum cum, obcaecati laudantium veniam aliquam nesciunt sint sit. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Debitis porro a dolore quo ipsum quos quia possimus illum
                repellendus iusto. Provident culpa nihil aliquid ullam nemo vero laudantium quam voluptas! Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Quod adipisci aliquam et aperiam voluptates
                repellendus aliquid eaque minus quidem minima consequuntur voluptatum eligendi, inventore dolorem ut
                sequi quasi, iusto asperiores?</div>
        </div>
        <div class="projectdiv">
            <img
                src="https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1">
            <div class="ptitle">Veryverylongtitle</div>
            <div class="pdescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus a esse minima!
                Fuga voluptas, quos corrupti tempora amet nihil sed similique quisquam autem magnam dicta quibusdam
                doloremque, quia aut perspiciatis.</div>
        </div>
        <div class="projectdiv">
            <img
                src="https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1">
            <div class="ptitle">Veryverylongtitle</div>
            <div class="pdescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus a esse minima!
                Fuga voluptas, quos corrupti tempora amet nihil sed similique quisquam autem magnam dicta quibusdam
                doloremque, quia aut perspiciatis.</div>
        </div>
        <div class="projectdiv">
            <img
                src="https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1">
            <div class="ptitle">Veryverylongtitle</div>
            <div class="pdescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus a esse minima!
                Fuga voluptas, quos corrupti tempora amet nihil sed similique quisquam autem magnam dicta quibusdam
                doloremque, quia aut perspiciatis.</div>
        </div>
    </div>`
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

    document.getElementById("homebutton").click();
}

