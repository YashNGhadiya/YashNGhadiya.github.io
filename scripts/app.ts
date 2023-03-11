"use strict";
import * as $ from 'jquery';

    (function () {
    class Contact{
        private m_fullName: string;
        private m_contactNumber: string;
        private m_emailAddress: string;

        /**
         * Constructor for the Contact class
         * @param fullName Full name of the contact
         * @param contactNumber Contact number of the contact
         * @param emailAddress Email address of the contact
         */
        constructor(fullName = "",contactNumber = "", emailAddress = "") {
            this.m_fullName = fullName;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;
        }

        // Getters and setters

        /**
         * Getter for the full name of the contact
         * @returns Full name of the contact
         */
        get FullName(){
            return this.m_fullName;
        }

        /**
         * Getter for the contact number of the contact
         * @returns Contact number of the contact
         */
        get ContactNumber(){
            return this.m_contactNumber;
        }

        /**
         * Getter for the email address of the contact
         * @returns Email address of the contact
         */
        get EmailAddress(){
            return this.m_emailAddress;
        }

        /**
         * Setter for the full name of the contact
         * @param fullName Full name of the contact
         */
        set FullName(fullName){
            this.m_fullName = fullName;
        }

        /**
         * Setter for the contact number of the contact
         * @param contactNumber Contact number of the contact
         */
        set ContactNumber(contactNumber){
            this.m_contactNumber = contactNumber;
        }

        /**
         * Setter for the email address of the contact
         * @param emailAddress Email address of the contact
         */
        set EmailAddress(emailAddress){
            this.m_emailAddress = emailAddress;
        }

        /**
         * Serializes the Contact object into a string
         * @returns Serialized string representation of the Contact object
         */
        serialize(){
            if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== ""){
                return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
            }
            console.error("One or more of the properties of the Contact object are missing or invalid");
            return null;
        }

        /**
         * Deserializes a string into a Contact object
         * @param data String representation of the Contact object
         */
        deserialize(data: string){
            let propertyArray = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }

        /**
         * Converts the Contact object into a human-readable string
         * @returns Human-readable string representation of the Contact object
         */
        toString(){
            return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n EmailAddress: ${this.EmailAddress}`;
        }
    }
        function DisplayHomePage() {
            console.log("Home Page Called");
            let AboutUsButton = document.getElementById("AboutUsBtn");
            AboutUsButton.addEventListener("click", function () {
                location.href = "about.html";
            });

            let XHR = new XMLHttpRequest();
            XHR.addEventListener("readystatechange", () => {
                if (XHR.readyState === 4 && XHR.status === 200) {
                    console.log(XHR.responseText);
                }
            });

            XHR.addEventListener("readystatechange", () => {
                if(XHR.readyState === 4 && XHR.status === 200) {
                    $("header").html(XHR.responseText);
                    $("li>a:contains('Home')").addClass("active");
                }
            });

            if(XHR.readyState === 4 && XHR.status === 200) {
                $("header").html(XHR.responseText);
                $("li>a:contains(${document.title})").addClass("active");
            }

            XHR.open("GET", "header.html");
            XHR.send();

            $("#AboutUsBtn").on("click", () => {
                location.href = "index.html";
            });
            $("main").append('<p id="MainParagraph" class="mt-3"> This is the main paragraph</p> ');
            $("body").append('<article class="container"><p id="ArticleParagraph" class="mt-3">This is my article paragraph</p></article>');

            $("main").append('<p id="MainParagraph" class="mt-3"> This is my main Paragraph</p>');
        }

        function AjaxRequest(method: string, url: string, callback: (data: string) => void) {
            let XHR  = new XMLHttpRequest();

            XHR.addEventListener("readystatechange", () => {
                if (XHR.readyState === 4 && XHR.status === 200) {
                    if (typeof callback === "function") {
                        callback(XHR.responseText);
                    } else {
                        console.error("ERROR: callback not a function");
                    }
                }
            });
            XHR.open(method, url);
            XHR.send();
        }

        function DisplayProductsPage() {
            console.log("Products Page Called");
        }

        function DisplayServicePage() {
            console.log("Service Page Called");
        }

        function DisplayAboutUsPage() {

        }


        function DisplayContactPage() {
            let fullName = document.getElementById("fullName");
            let contactNumber = document.getElementById("contactNumber");
            let emailAddress = document.getElementById("emailAddress");

            console.log("Contact Page Called");

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
            console.log("Contact List Page Called");
        }

        function Start() {
            console.log("App Started!");
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

        window.addEventListener("load", Start);
    })();
