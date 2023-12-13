"use strict";

// Add an event listener for mouseover to increase the size of the icon
const iconList = document.querySelectorAll(".icon");
for (let i = 0; i < iconList.length; i++) {
  iconList[i].addEventListener("mouseover", function () {
    // Increase the size of the icon on mouseover
    this.width = "250";
    this.height = "250";
  });
  iconList[i].addEventListener("mouseout", function () {
    // Reset the size of the icon on mouseout
    this.width = "200";
    this.height = "200";
  });
}
