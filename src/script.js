const elmBook = document.querySelector(".book_content")

function setSelectedColor() {
    const checked = document.querySelector(".bg_radio input:checked")
    elmBook.setAttribute("data-color", checked.value)
}

setSelectedColor()
document.querySelector(".bg_radio").addEventListener("change", setSelectedColor);
