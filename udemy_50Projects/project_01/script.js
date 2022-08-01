"use strict";
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}






















// panels.forEach((panel) => {
//     panel.addEventListener("click", () => {
//         console.log(panel)
//         removeActiveClass()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClass() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active');
//     })
// }


// panels.forEach((panel) => {
//     panel.addEventListener("click", () => {
//         console.log(panel);
//         removeActiveClass()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClass() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active')
//     });
// }


// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         // console.log(panel)
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// });

// function removeActiveClasses() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active')
//     });
// }


// panels.forEach((panel) => {
//     panel.addEventListener("click", () => {
//         removeActiveClasses()
//         panel.classList.add('active');
//         // console.log(panel)
//     })
// });

// function removeActiveClasses() {
//     panels.forEach((panel) => {
//         panel.classList.remove('active')
//     });
// }