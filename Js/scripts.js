const title = document.querySelector('.logo');

if (title) {
    title.addEventListener('mouseover', () => {
        title.style.textShadow = "4px 4px 0px #D32F2F";
    });

    title.addEventListener('mouseout', () => {
        title.style.textShadow = "2px 2px 0px rgba(200,200,200,0.5)";
    });
}