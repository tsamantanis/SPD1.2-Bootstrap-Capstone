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
        if (project.getBoundingClientRect().top > 1200) {
            project.style.opacity = 0;
        } else if (project.getBoundingClientRect().top < 1800 && project.getBoundingClientRect().top >= 300) {
            project.style.opacity = 1 - (project.getBoundingClientRect().top / 1000)
        } else if (project.getBoundingClientRect().top < 300 && project.getBoundingClientRect().top >= -100) {
            project.style.opacity = 1
        } else if (project.getBoundingClientRect().top < 0) {
            project.style.opacity = 1 - (- project.getBoundingClientRect().top / 350)
        }
    })
});

