let topics = document.getElementsByTagName("h2");
const topic_list = Array.from(topics).map(topic => topic.innerText)
let ul = document.createElement("ul")
Array.from(topics).forEach((h2) =>{
    const id = h2.innerText
    h2.id = id;
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = id;
    a.href = `#${id}`;
    li.style.cursor = "pointer";
    a.style.textDecoration = "none";
    a.style.color = "black";

    a.addEventListener("click",(e) =>{
        e.preventDefault();
        document.getElementById(id).scrollIntoView({
            behavior:"smooth"
        })
        console.log("this is happening")
    })
    
    li.appendChild(a);
    ul.appendChild(li);
})
const sidebar = document.getElementById("sidebar")
sidebar.appendChild(ul)

function expandOnTouch() {
    const all_h2 = document.querySelectorAll("h2");
    
    all_h2.forEach((h2) => {
        h2.addEventListener("click", () => {
            const p = h2.nextElementSibling;
            const h3 = p ? p.nextElementSibling : null;

            if (p && p.tagName.toLowerCase() === "p") {
                const pDisplay = window.getComputedStyle(p).display;
                p.style.display = (pDisplay === "none") ? "block" : "none";
            }

            if (h3 && h3.tagName.toLowerCase() === "h3") {
                const h3Display = window.getComputedStyle(h3).display;
                h3.style.display = (h3Display === "none") ? "block" : "none";
            }
        });
    });
}
expandOnTouch();