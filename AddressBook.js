console.log("Welcome To The Address Book Program")
class Contact {
    constructor(...params) {
            this.firstName = params[0];
            this.lastName = params[1];
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
            this.zip = params[5];
            this.phoneNumber = params[6];
            this.email = params[7];
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let nameRegex =RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else throw "Invalid First Name!!"
    }
    get lastName(){return this._lastName;}
    set lastName(lastName){
        let nameRegex =RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else throw "Invalid last Name!!"
    }
    get address(){return this._address;}
    set address(address){
        let addressRegex = RegExp("^[A-Za-z]{3,}$");
        if (addressRegex.test(address))
            this._address=address;
        else throw "Invalid Address!!";
    }
    get city(){return this._city;}
    set city(city){
        let cityStateRegex =  RegExp("^[A-Za-z]{3,}$");
        if (cityStateRegex.test(city))
            this._city = city;
        else throw "Invalid City "    
    }
    get state(){return this._state;}
    set state(state){
        let cityStateRegex = RegExp("^[A-Za-z]{3,}$");
        if(cityStateRegex.test(state))
            this._state = state;
        else throw "Invalid State!!";
    }
    get zip(){return this._zip;}
    set zip(zip){
        let zipRegex = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw "Invalid Zip"        
    }
    get phoneNumber(){return this._phoneNumber;}
    set phoneNumber(phoneNumber){
        let phoneNumberRegex = RegExp("^[1-9]{1}[0-9]{9}$");
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber=phoneNumber;
        else throw "Imvalid Phone Number"
    }
    get email(){return this._email;}
    set email(email){
        let emailRegex = RegExp("^([a-z]+)([0-9])*([_+-.]{1}[a-z0-9]+)*(@)([a-z0-9]+)[.]([a-z]{2,})([.][a-z]{2}){0,1}$");
        if(emailRegex.test(email))
        this._email=email;
        else throw "Invalid Emial "
    }
    toString() {
        return "First Name : " + this.firstName + "\nLast Name : " + this.lastName + "\nAddress : " + this.address + "\nCity : " + this.city + "\nState : " + this.state + "\nZip : " + this.zip + "\nPhone Number : " + this.phoneNumber + "\nEmail : " + this.email;
    }
}
const prompt = require('prompt-sync')();
let addressBookArr = new Array();
let getContact =()=>{
    let firstName = prompt("Enter First Name ");
    let lastName = prompt("Enter Last Name ");
    let address = prompt("Enter Address ");
    let city = prompt("Enter City ");
    let state = prompt("Enter State ");
    let zip = prompt("Enter Zip ");
    let phoneNumber = prompt("Enter Phone Number ");
    let email = prompt("Enter Email ");
    let contactDetails =null;
try{
 contactDetails =  new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
}catch(e){
    console.error(e);
}
return contactDetails;
};

countContact = () => {
    let numberOfContact = addressBookArr
      .map((contact) => contact)
      .reduce((numberOfContact) => numberOfContact + 1, 0);
    console.log("\nNumber of contacts are : " + numberOfContact + " \n");
  };
let viewContacts = () => {
    console.log("Number of contacts in this addressbook : " + countContact());
    addressBookArr.forEach(contact => console.log(contact.toString()));
}
let addContact = (contact) => {
    let index = getindexByName(contact.firstName, contact.lastName);
    if (index == -1) {
        addressBookArr.push(contact);
        console.log("Contact Added Successfully!!");
    }
    else
        console.log("Could not add contact as Name already exists!!");       
}       
let editContact = () => {
    let frstName = prompt("Enter First Name : ");
    let lstName = prompt("Enter Lastt Name : ");
    let index = addressBookArr.findIndex(contact => contact.firstName == frstName && contact.lastName == lstName);
    if (index == -1)
        console.log("Could not find the contact!!")
    else {
        addressBookArr[index] = getContact();
        console.log("Contact edited successfully!!");
    }
}    
let getindexByName = (frstName, lstName) => {
    return addressBookArr.findIndex(contact => contact.firstName == frstName && contact.lastName == lstName);
}
let deleteContact = () => {
    let frstName = prompt("Enter First Name : ");
    let lstName = prompt("Enter Last Name : ");
    let index = getindexByName(frstName, lstName);
        if (index == -1)
            console.log("Could not find the contact!!")
        else {
            console.log("Contact deleted successfully!!");
        return addressBookArr.splice(index, 1);
    }
}
let searchByCity = () => {
    let searchCity = prompt("Enter the city name ");
    let cityresult = addressBookArr.filter(contact => contact.city == searchCity);
    console.log("The persons Are :" +cityresult);
}
let searchByState = () => {
    let searchState = prompt("Enter the state name ");
    let stateresult= addressBookArr.filter(contact => contact.state == searchState);
    console.log("The persons Are :" +stateresult);
}
let viewByState = () => {
    let searchState = prompt("Enter the state name ");
    let stateresult= addressBookArr.filter(contact => contact.state == searchState);
    console.log("The persons Are :" +stateresult);
}
let searchByCityState = (item) => {
    let contactsByItemArr = new Array();
    let itemName = prompt("Enter the " + item + " name ");
    if (item == "City")
        contactsByItemArr = addressBookArr.filter(contact => contact.city == itemName);
    else if (item == "State")
        contactsByItemArr = addressBookArr.filter(contact => contact.state == itemName);
    console.log("Number of contacts " + countContact(contactsByItemArr));
    contactsByItemArr.forEach(contact => console.log(contact.toString()))

}
let choice = 0;
do {
    console.log("Choose\n1. View Contacts\n2. Add Contact\n3. Edit Contact By name\n4. Delete Contact\n5. Search Contacts By City\n6. Search Contacts By State\n7. Count Contacts\n8.View Contact By State\n9.Serach Contacts By City Or State\n10. Exit");
    choice = prompt("Enter Your Choice ");
    switch (choice) {
    case "1": viewContacts();
        break;
    case "2": addContact(getContact());
        break;
    case "3": editContact();
        break;
    case "4": deleteContact();
        break;
    case "5": searchByCity();
        break;
    case "6": searchByState();
        break;
    case "7": countContact();
        break;
    case "8" : viewByState();
        break;
    case "9":searchByCityState();
        break;    
    case "10":
        break;    
    default: console.log("Invalid Choice !!");
    }

} while (choice != 10)