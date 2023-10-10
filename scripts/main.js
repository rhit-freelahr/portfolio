const pageNav = document.getElementById("page-navigation");

pageNav.addEventListener("click", () => {
    console.log("Clicked");
});


const pageList = document.querySelectorAll("#page-list li");

pageList.forEach(pageItem => {
    let pathName = window.location.hostname;
    
});