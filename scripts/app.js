"use strict";

(function () {


   function DisplayHomePage() {
       let AboutUsButton = document.getElementById("AboutUsBtn");
       AboutUsButton.addEventListener("click",function (){
           location.href = "about.html"
       });


   }
    let MainContent = document.getElementsByTagName("main");
   let MainParagraph = document.createElement("p");


   MainParagraph.setAttribute("id","MainParagraph");
   MainParagraph.setAttribute("class", "mt-3");
   MainParagraph.textContent = "This is the Main Paragraph!";
   MainContent.appendChild(MainParagraph);


   function DisplayProductsPage() {
       let ProductButton = document.getElementById("ProductBtn");
       ProductButton.addEventListener("click",function (){
           location.href = "products.html"
       });
   }

   function DisplayServicePage() {
       let ServiceButton = document.getElementById("ServiceBtn");
       ServiceButton.addEventListener("click",function (){
           location.href = "Service.html"
       });
   }


   function DisplayAboutUsPage() {
       let AboutUsButton = document.getElementById("AboutUsBtn");
       AboutUsButton.addEventListener("click",function (){
           location.href = "about.html"
       });
   }

   function DisplayContactPage() {
       let AboutUsButton = document.getElementById("AboutUsBtn");
       AboutUsButton.addEventListener("click",function (){
           location.href = "about.html"
       });
   }

   function Start() {
       console.log("App Started!")
       switch (document.title) {
           case "Home":
               DisplayHomePage();
               break;
           case  "Our Products":
               DisplayProductsPage();
               break;
           case "About Us":
               DisplayAboutUsPage();
               break;
           case "Our Services":
               DisplayServicePage();
               break;
           case "Contact Us":
               DisplayContactPage();
               break;
       }

   }



}) ();