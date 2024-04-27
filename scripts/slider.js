let slider = document.querySelector('#projectslider')

let projects = document.querySelectorAll('.projectdiv')

for (let i = 0; i < projects.length; i++) {
    let circle = document.createElement('div')
    circle.classList.add('indexcircle')
    if (i == 0) circle.classList.add('selectedcircle')
    document.querySelector('#index').appendChild(circle)
}

let indexCircles = document.querySelectorAll('.indexcircle')

let numOfProjects = projects.length

let projectIndex = 0

function changeIndexCircle(prev) {
    indexCircles[prev].classList.remove('selectedcircle')
    indexCircles[projectIndex].classList.add('selectedcircle')
    if (projects[prev].classList.contains('selectedp')) {
        projects[prev].classList.remove("selectedp")
        projects[prev].classList.add("unselectedp")
        projects[prev].querySelector(".pdescription").classList.remove("visibledescription")
        projects[prev].querySelector(".pdescription").classList.add("hiddendescription")
    }
}

function customFinishListener(value) {
    let finishListener = value > 0 ?
        (wheelEvent) => {
            setTimeout(100)
            if (wheelEvent.deltaX < value) {
                slider.removeEventListener('wheel', finishListener)
                slider.addEventListener('wheel', slideListener)
            }
        } :
        (wheelEvent) => {
            setTimeout(100)
            if (wheelEvent.deltaX > value) {
                slider.removeEventListener('wheel', finishListener)
                slider.addEventListener('wheel', slideListener)
            }
        }
    return finishListener
}

let slideListener = (wheelEvent) => {
    setTimeout(100)
    if (wheelEvent.deltaX > 70) {
        if (projectIndex < numOfProjects - 1) {
            projectIndex++
            changeIndexCircle(projectIndex - 1)
            projects.forEach(e => e.setAttribute('style', 'left: ' + String(-100 * projectIndex) + '%'))
            slider.removeEventListener('wheel', slideListener)
            slider.addEventListener('wheel', customFinishListener(5))
        }
    } else if (wheelEvent.deltaX < -70) {
        if (projectIndex > 0) {
            projectIndex--
            changeIndexCircle(projectIndex + 1)
            projects.forEach(e => e.setAttribute('style', 'left: ' + String(-100 * projectIndex) + '%'))
            slider.removeEventListener('wheel', slideListener)
            slider.addEventListener('wheel', customFinishListener(-5))
        }
    }
}

slider.addEventListener('wheel', slideListener)

