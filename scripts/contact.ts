"use strict";

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
