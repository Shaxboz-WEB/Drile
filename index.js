"use strict";

const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

menu.addEventListener("click", (e) => {
  navigation.style.right = "32px";
});
header.addEventListener("click", (e) => {
  navigation.style.right = "-300px";
});
