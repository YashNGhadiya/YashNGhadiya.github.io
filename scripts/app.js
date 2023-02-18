"use strict";

(function () {


    function DisplayHomePage() {
        console.log("Home Page Called")
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function () {
            location.href = "about.html"
        });

        let XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", () => {
            if (XHR.readyState === 4 && XHR.status === 200)
            {
                console.log(XHR.responseText);
            }
        });

        XHR.addEventListener("readystatechange", () => {
            if(XHR.readyState === 4 && XHR.status === 200)
            {
                $("header").html(XHR.responseText);
                $("li>a:contains('Home')").addClass("active");
            }
        });

        if(XHR.readyState === 4 && XHR.status === 200)
        {
            $("header").html(XHR.responseText);
            $("li>a:contains(${document.title})").addClass("active");
        }

        XHR.open("GET", "header.html")
        XHR.send();


        $("#AboutUsBtn").on("click", () => {
            location.href = "index.html"
        });
        $("main").append('<p id="MainParagraph" class="mt-3" > This is the main paragraph</p> ');
        $("body").append('<article class="container"><p id="ArticleParagraph" class="mt-3">This is my article paragraph</p></article>');

        $("main").append('<p id="MainParagraph" class="mt-3"> This is my main Paragraph</p>');

    }
    function AjaxRequest(method, url, callback){
        let XHR  = new XMLHttpRequest();

        XHR.addEventListener("readyStatechange", () =>{
            if(XHR.readyState === 4 && XHR.status === 200) {
                if (typeof callback === "function") {
                    callback(XHR.responseText);
                } else {
                    console.error("ERROR: callback not a function");
                }
            }
        });
        XHR.open("GET", "header.html")
        XHR.send();
    }

       function DisplayProductsPage() {
           console.log("Products Page Called")

       }

       function DisplayServicePage() {
           console.log("Service Page Called")
       }


       function DisplayAboutUsPage() {

       }

       function DisplayContactPage() {
           console.log("Contact Page Called")

           let sendButton = document.getElementById("sendButton");
           let subscribeCheckBox = document.getElementById("subscribeCheckbox");

           sendButton.addEventListener("click", function (event) {
               event.preventDefault();
               if (subscribeCheckBox.checked) {

                   let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                   if (contact.serialize()) {
                       let key = contact.FullName.substring(0, 1) + Date.now();
                       localStorage.setItem(key, contact.serialize());
                   }

               }

           });

           sendButton.addEventListener("click", function (event) {

               if (subscribeCheckBox.checked) {

                   let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                   if (contact.serialize()) {
                       let key = contact.FullName.substring(0, 1) + Date.now();
                       localStorage.setItem(key, contact.serialize());
                   }

               }
           });


       }


       function DisplayContactListPage() {
           console.log("Contact List Page Called")
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
               case "Contact List":
                   DisplayContactListPage();
                   break;
           }

       }
    function displayHomePage() {
        // Step 1: Instantiate an XHR object
        const xhr = new XMLHttpRequest();

        // Step 2: Add event listener for the readystatechange
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        });

        // Step 3: Open a connection to the server
        xhr.open("GET", "header.html");

        // Step 4: Send the request to the server
        xhr.send(null);
    }

// Call the function to display the homepage
    displayHomePage();


    window.addEventListener("load", Start)



}) ();