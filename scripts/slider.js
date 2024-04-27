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
}

function customFinishListener(value) {
    let finishListener = value > 0 ?
        (wheelEvent) => {
            setTimeout(100)
            console.log("checking")
            if (wheelEvent.deltaX < value) {
                console.log("free to slide now")
                slider.removeEventListener('wheel', finishListener)
                slider.addEventListener('wheel', slideListener)
            }
            wheelEvent.stopPropagation()
        } :
        (wheelEvent) => {
            setTimeout(100)
            console.log("checking")
            if (wheelEvent.deltaX > value) {
                console.log("free to slide now")
                slider.removeEventListener('wheel', finishListener)
                slider.addEventListener('wheel', slideListener)
            }
            wheelEvent.stopPropagation()
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
            console.log("locking here");
            slider.addEventListener('wheel', customFinishListener(5))
        }
    } else if (wheelEvent.deltaX < -70) {
        if (projectIndex > 0) {
            projectIndex--
            changeIndexCircle(projectIndex + 1)
            projects.forEach(e => e.setAttribute('style', 'left: ' + String(-100 * projectIndex) + '%'))
            slider.removeEventListener('wheel', slideListener)
            console.log("locking here");
            slider.addEventListener('wheel', customFinishListener(-5))
        }
    }
    wheelEvent.stopPropagation()
}

slider.addEventListener('wheel', slideListener)

