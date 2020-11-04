const canvas = document.getElementById('HeaderCanvas');
const ctx = canvas.getContext('2d');

const arcRadius = 150;
const arcWidth = 4;
const primaryColor = '#FFA100';
const secondaryColor = '#2EC4B6';
const colors = ['#FFA100', '#2EC4B6', '#FFBF69', '#CBF3F0'];
const radians = [Math.PI / 2, 3 * Math.PI / 4, Math.PI, 5 * Math.PI / 4, 3 * Math.PI / 2, 7 * Math.PI / 4, 2 * Math.PI];
const arcPositions = generateArcPositionPairs();

let x = canvas.width / 2;
let y = canvas.height / 2;
let dy = radians[getRandomInt(radians.length)];
let dx = radians[getRandomInt(radians.length)];
let angle = Math.atan2(dy, dx);
let percent = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateArcPositionPairs() {
    let arcPositionPairs = [];
    for (let k = arcRadius; k < canvas.width; k += 5 * arcWidth) {
        arcPositionPairs.push({x: radians[getRandomInt(radians.length)], y: radians[getRandomInt(radians.length)], arcRadius: k})
    }
    return arcPositionPairs
}

function drawArcs() {
    arcPositions.forEach((position) => {
        ctx.beginPath();
        ctx.arc(x, y, position.arcRadius, position.x + percent, position.y + percent);
        ctx.strokeStyle = colors[getRandomInt(colors.length)];
        ctx.lineWidth = arcWidth;
        ctx.stroke();
    })
}

window.addEventListener("scroll", function(e) {
    let paths = [
        document.getElementById('scrollDash'),
    ]
    paths.forEach((path) => {
        let pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;
        path.getBoundingClientRect();
        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        if (scrollPercentage > 0.10) {
            let drawLength = pathLength * (0.10 - scrollPercentage);
            path.style.strokeDashoffset = pathLength + drawLength;
            if (scrollPercentage > 0.999999999) {
                path.style.strokeDasharray = "none";
            } else {
                path.style.strokeDasharray = pathLength + ' ' + pathLength;
            }
        }
    });

    let projects = [
        document.getElementById('board-off-container'),
        document.getElementById('wave-app-container'),
        document.getElementById('wesolve-container'),
        document.getElementById('nissos-suites-container')
    ]

    projects.forEach((project) => {
        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        // let scrollPosition = (document.documentElement.scrollTop + document.body.scrollTop) / 100;
        console.log(project);
        console.log("Scroll position: " + project.getBoundingClientRect().top)
        if (project.getBoundingClientRect().top > 1200) {
            project.style.opacity = 0;
        } else if (project.getBoundingClientRect().top < 1200 && project.getBoundingClientRect().top >= 100) {
            project.style.opacity = 1 - (project.getBoundingClientRect().top / 350)
        } else if (project.getBoundingClientRect().top < 100 && project.getBoundingClientRect().top >= -100) {
            project.style.opacity = 1
        } else if (project.getBoundingClientRect().top < 0) {
            project.style.opacity = 1 - (- project.getBoundingClientRect().top / 350)
        }
    })
});

drawArcs()

