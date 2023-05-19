let collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach(collapsible => {
    collapsible.addEventListener("click", () => {
        collapsible.classList.toggle("active");

        // console.log({collapsible});
        let content = collapsible.nextElementSibling;

        // console.log({content});
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    })
})

