/*
    this file creates a blueprint for bookInformation 
*/

class BookInformation{
    constructor(...arg){
        this.username       = arg[0];
        this.itemname       = arg[1];
        this.shopName       = arg[2];
        this.shopAddress    = arg[3];
        this.contactNumber  = arg[4];
        this.price          = arg[5];
        this.status         = arg[6];
    }
}

module.exports = { BookInformation }