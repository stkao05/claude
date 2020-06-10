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

  function initRangeControl() {
    const rangeControls = document.querySelectorAll(".range_test");
    rangeControls.forEach(rangeCtrl => {
      const range = rangeCtrl.querySelector("input[type='range']");
      const text = rangeCtrl.querySelector("input[type='text']");
      const valDisplay = rangeCtrl.querySelector(".range_value");

      const render = () => {
        valDisplay.innerHTML = range.value;

        if (range.getAttribute("name") === "optical_size") {
          text.style.cssText = `font-variation-settings: "opsz" ${range.value}`;
        }

        if (range.getAttribute("name") === "font_size") {
          text.style.fontSize = `${range.value}px`;
        }
      };

      range.addEventListener("input", render);

      render();
    });
  }

  initBackgroundSwitch();
  initRangeControl();
})();
