(function() {
  function initBackgroundSwitch() {
    const elmBook = document.querySelector(".book_content");

    function setSelectedColor() {
      const checked = document.querySelector(".bg_radio input:checked");
      elmBook.setAttribute("data-color", checked.value);
    }

    setSelectedColor();
    document
      .querySelector(".bg_radio")
      .addEventListener("change", setSelectedColor);
  }

  //function initCollapser() {
    //document.querySelector("details").addEventListener("toggle", event => {
      //if (details.open) {
          //event.target.classList.add("detail__open")
      //} else {
          //event.target.classList.remove("detail__open")
      //}
    //});
  //}

  initBackgroundSwitch();
})();
