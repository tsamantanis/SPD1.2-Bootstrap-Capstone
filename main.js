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


function scrollEffect() { 
    const heightOfWindow = window.innerHeight;
    const contentScrolled = window.pageYOffset;
    const bodyHeight = document.body.offsetHeight;
//     // percentage = document.querySelector("[data-scrollPercentage] .percentage")
//     // percentageVal = document.querySelector("#percentage-value")

//     // if(bodyHeight - contentScrolled <= heightOfWindow) {
//     // percentageVal.textContent = percentage.style.width = "100%"
//     // }
//     // else {
    const total = bodyHeight - heightOfWindow;
    const got = contentScrolled;
    percent = (got / total) * 2 * Math.PI;
    console.log(percent);
//     // percentageVal.textContent = percentage.style.width = percent + "%"
//     // }
}

window.addEventListener('scroll', scrollEffect)
drawArcs()

