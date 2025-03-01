function ranCol() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
document.getElementById("ColorCng").addEventListener("click", function() {
    document.body.style.backgroundColor = ranCol();
});