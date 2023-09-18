let header = document.querySelector("header");
let links = document.querySelectorAll("header ul li a");
// let home1 = document.querySelector(".home")
// window.onscroll = () => {
    //     if (window.scrollY >= home1.offsetTop) {
        //         links[0].classList.remove("active")
        //     }
        // }
        // console.log(links)
        
        ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 250
});

ScrollReveal().reveal('.projects .project, .home .head h1 ' ,{ origin: 'left' });
ScrollReveal().reveal('.head-section , .home .head, .about .img  ' ,{ origin: 'top' });
ScrollReveal().reveal(' .home .head h3:nth-of-type(2)' ,{ origin: 'right' });
ScrollReveal().reveal('.about .details , .home .img , .services .our-services , footer form ' ,{ origin: 'bottom' });

let home = document.getElementById("home")
let about = document.getElementById("about")
let serv = document.getElementById("services")
let projects = document.getElementById("projects")
let contact = document.getElementById("contact")
let button = document.querySelector(".top")

window.onscroll = () => {
    if (window.scrollY >= 400) {
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.zIndex = "99";
        header.style.borderBottom = "1px solid var(--gray-color)"
        button.style.display = "block"
    } else {
        header.style.position = "relative"
        header.style.border = "none"
        button.style.display = "none"
    }

    //home
    if (window.scrollY >= home.offsetTop) {
        links[0].classList.add("active")
    } else {
        // links[0].classList.remove("active")
    }
    //about
    if (window.scrollY >= about.offsetTop - 100) {
        links[0].classList.remove("active")
        links[1].classList.add("active")
    } else {
        links[1].classList.remove("active")
    }
    //services
    if (window.scrollY >= serv.offsetTop - 100) {
        links[1].classList.remove("active")
        links[2].classList.add("active")
    } else {
        links[2].classList.remove("active")
    }
    //projects
    if (window.scrollY >= projects.offsetTop - 100) {
        links[2].classList.remove("active")
        links[3].classList.add("active")
    } else {
        links[3].classList.remove("active")
    }
    //contact
    if (window.scrollY >= contact.offsetTop - 100) {
        links[3].classList.remove("active")
        links[4].classList.add("active")
    } else {
        links[4].classList.remove("active")
    }
}

button.onclick = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

var typed = new Typed('.multi-strings', {
    strings: ['Front-End Developer', 'Back-End Developer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let loading = document.querySelector(".loading");
window.onload = ()=> {
    loading.style.display="none"
}

let xMark = `<i class="fa-solid fa-square-xmark"></i>`
let listMark = `<i class="fa-solid fa-list"></i>`
let list = document.querySelector("header .list");
let listLinks = document.querySelector(".mobile-view .mobile ul");
let ulLinks = document.querySelectorAll(".mobile-view .mobile ul li a");

list.addEventListener("click",()=> {
    listLinks.classList.toggle("height");
    if (!listLinks.classList.contains("height")) {
        // listLinks.style.display = "none"
        list.innerHTML = listMark
    }else {
        // listLinks.style.display = "flex"
        list.innerHTML = xMark
    }
})

ulLinks.forEach(link => {
    link.onclick = ()=> {
        listLinks.classList.remove("height");
        list.innerHTML = listMark
    }
});

let mode = document.querySelectorAll(".mode");
let iMode = document.querySelectorAll(".mode i");
let pMode = document.querySelectorAll(".mode p");
let ul = document.querySelectorAll(".desktop-view ul li a");
let getMode = localStorage.getItem("mode");

if (getMode == "dark") {
    document.body.classList.add("dark")
    iMode.forEach (i => {
        i.style.left = "64%"
    })
    pMode.forEach(p => {
        p.style.right = "39.5%"
        p.innerHTML = "light"
    })
    ul.forEach(link => {
        link.style.fontWeight = "600"
    })
} 
mode.forEach(mo => {
    mo.onclick = () => {
        document.body.classList.toggle("dark")
        if (document.body.classList.contains("dark")) {
            iMode.forEach (i => {
                i.style.left = "64%"
            })
            pMode.forEach(p => {
                p.style.right = "39.5%"
                p.innerHTML = "light"
            })
            ul.forEach(link => {
                link.style.fontWeight = "600"
            })
            localStorage.setItem("mode","dark");
        
        } else {
            iMode.forEach (i => {
                i.style.left = "0px"
            })
            pMode.forEach(p => {
                p.style.right = "4px"
                p.innerHTML = "dark"
            })
            ul.forEach(link => {
                link.style.fontWeight = "400"
            })
            localStorage.setItem("mode","light");
        }
    }
});

if (!document.body.classList.contains("dark")) {
    localStorage.setItem("mode","light");
} else {
    localStorage.setItem("mode","dark");
}




// mode.onclick = () => {
//     document.body.classList.toggle("dark")
//     if (document.body.classList.contains("dark")) {
//         iMode.style.left = "45px"
//         pMode.style.right = "28px"
//         pMode.innerHTML = "light"
//     } else {
//         iMode.style.left = "0px"
//         pMode.style.right = "4px"
//         pMode.innerHTML = "dark"
//     }
// }

// window.onclick = e => {
//     if (listLinks.classList.contains("height")) {
//         if (!list.contains(e.target) && !listLinks.contains(e.targer)) {
//             // listLinks.style.display = "none"
//             listLinks.classList.remove("height");
//             list.innerHTML = listMark
//         }
//     }
// }





// var x = window.matchMedia("(max-width: 500px)");

// function myfun(x) {
//     if (x.matches) {
//         ScrollReveal({
//             reset: true,
//             distance: '40px',
//             duration: 2000,
//             delay: 250
//         });
        
//         ScrollReveal().reveal('.projects .project, .home .head h1 ' ,{ origin: 'left' });
//         ScrollReveal().reveal('.head-section , .home .head, .about .img  ' ,{ origin: 'top' });
//         ScrollReveal().reveal(' .home .head h3:nth-of-type(2)' ,{ origin: 'right' });
//         ScrollReveal().reveal('.about .details , .home .img , .services .our-services , footer form ' ,{ origin: 'bottom' });
//     } else {
//         ScrollReveal({
//             reset: true,
//             distance: '80px',
//             duration: 2000,
//             delay: 250
//         });
        
//         ScrollReveal().reveal('.projects .project, .home .head h1 ' ,{ origin: 'left' });
//         ScrollReveal().reveal('.head-section , .home .head, .about .img  ' ,{ origin: 'top' });
//         ScrollReveal().reveal(' .home .head h3:nth-of-type(2)' ,{ origin: 'right' });
//         ScrollReveal().reveal('.about .details , .home .img , .services .our-services , footer form ' ,{ origin: 'bottom' });
//     }
// }
// myfun(x);
// x.onchange = ()=> {
//     myfun
// };
