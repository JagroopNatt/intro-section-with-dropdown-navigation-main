"use strict";

const burgerMenu = document.querySelector(".icon-menu");

const sidebar = document.querySelector(".sidebar");

const closeBtn = document.querySelector(".icon-close");

const dropDown = document.querySelector(".dropdown");

const dropDownCompany = document.querySelector(".dropdown-company");

const featureBtn = document.querySelector(".feature-btn");
console.log(featureBtn);

const companyBtn = document.querySelector(".company-btn");

const arrow = document.querySelector(".arrow-icon");

const main = document.querySelector(".container");

// burger menu

burgerMenu.addEventListener("click", function () {
  sidebar.classList.add("active");
  main.classList.add("blur");
  sidebar.classList.add("show");
});

// close button
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("active");
  sidebar.classList.remove("show");
  main.classList.remove("blur");
});

// feature dropdown

featureBtn.addEventListener("click", function () {
  dropDown.classList.toggle("active");
  arrow.classList.toggle("arrow");
});

// company dropdown

companyBtn.addEventListener("click", function () {
  dropDownCompany.classList.toggle("active");
});
