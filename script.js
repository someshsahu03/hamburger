const svgImgBar = document.querySelector(".svgImg")
const svgImgCross = document.querySelector(".svgImgCross")
const sidebar = document.querySelector(".sidebar")
const links = document.querySelectorAll("#link")
links.forEach((link) => {
    link.addEventListener("click", (e) =>{
        if(e.target.id = "link") {
            e.preventDefault()
        }
        
    })
})


function showSideBar(e) {
    e.preventDefault();
    sidebar.style.display = "flex"
    setTimeout(() => {
        sidebar.classList.add("active"); // Apply transition after making it visible
    }, 10);
}
function hideSideBar(e) {
    e.preventDefault();
    sidebar.classList.remove("active"); // Apply transition after making it visible
    setTimeout(() => {
        sidebar.style.display = "none"
    }, 250);
}

if (svgImgBar) svgImgBar.addEventListener("click", showSideBar);
if (svgImgCross) svgImgCross.addEventListener("click", hideSideBar);
