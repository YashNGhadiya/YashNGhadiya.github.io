"use strict";

class Contact{
    constructor(fullName = "",contactNumber = "", emailAddress = "") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }


    // Getters and setters
    get FullName(){
        return this.FullName;
    }

    get ContactNumber(){
        return this.ContactNumber;
    }

    get EmailAddress(){
        return this.EmailAddress;
    }

    set FullName(fullName){
        this.m_fullName = fullName;
    }
    set ContactNumber(contactNumber){
        this.m_conatactNumber = contactNumber;
    }
    set EmailAddress(emailAddress){
        this.m_emailAddress = emailAddress;
    }

    serialize(){
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== ""){
            return '${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}';
        }
        console.error("One or more of the properties of the Contact object are missing or iovalid");
        return null;
    }
    deserialize(data){
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }

    toString(){
       return 'Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n EmailAddress: ${this.EmailAddress}' ;
    }


}