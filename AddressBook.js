console.log("Welcome To The Address Book Program")
class AddressBook {
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
    // ToString Method
    toString() {
        return "First Name : " + this.firstName + "\nLast Name : " + this.lastName + "\nAddress : " + this.address + "\nCity : " + this.city + "\nState : " + this.state + "\nZip : " + this.zip + "\nPhone Number : " + this.phoneNumber + "\nEmail : " + this.email;
    }
}
let addressBook = new AddressBook("Govardhan", "Reddy", "Bajjuri", "Kodad", "Telangana", "508204", "9666110767", "gopi@gmail.com");
console.log(addressBook.toString());