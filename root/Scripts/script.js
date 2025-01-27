/*-----------BANNER----------- */

function tppNotifications() {
  var message = "Tyler's pub at the pier will be closed";
  var message2 = "Will reopen";
  const event = [
    "New Years",
    "Martin Luther King Day",
    "Presidents Day",
    "Easter",
    "Memorial Day",
    "4th of July",
    "Labor Day",
    "Thanksgiving Break",
    "Christmas Break",
    "Private Event",
    "Inclement Weather",
    "Spring Break",
    "Fall Break",
  ];
  var closed = "May 27th 2024";
  var reOpen = "May 28th 2024";

  var notification =
    message +
    " " +
    closed +
    " for " +
    event[10] +
    ". " +
    message2 +
    " " +
    reOpen +
    ".";
  const output = document.getElementById("banner");
  output.innerHTML = notification;
  output.style.textAlign = "center";
  output.style.backgroundColor = "#FFFF00";
  output.style.color = "red";
  output.style.textTransform = "capitalize";
}
/*tppNotifications();*/

/*-----------FOOD MENU----------- */
const menuBtns = document.querySelectorAll(".full-menu-btn");
const foodItems = document.querySelectorAll(".food-item");

let activeBtn = "featured";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    resetActiveBtn();
    showFoodMenu(btn.id);
    btn.classList.add("active-btn");
  });
});

function resetActiveBtn() {
  menuBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

function showFoodMenu(newMenuBtn) {
  activeBtn = newMenuBtn;
  foodItems.forEach((item) => {
    if (item.classList.contains(activeBtn)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}
