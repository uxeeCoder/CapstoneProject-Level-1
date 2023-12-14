"use strict";

// Add an event listener for mouseover to increase the size of the icon
const iconList = document.querySelectorAll(".icon");
for (let i = 0; i < iconList.length; i++) {
  iconList[i].addEventListener("mouseover", function () {
    // Increase the size of the icon on mouseover
    this.width = "110";
    this.height = "110";
  });
  iconList[i].addEventListener("mouseout", function () {
    // Reset the size of the icon on mouseout
    this.width = "90";
    this.height = "90";
  });
}
