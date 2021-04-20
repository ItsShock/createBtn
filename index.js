
function openAlert() {
  window.alert("super");
};


function createButton() {
  var button = document.createElement("button");
  button.setAttribute("id", "super-button");
  document.body.appendChild(button);
  button.addEventListener("click", openAlert);
  return button;
};

module.exports = {
  openAlert,
  createButton,
};
