//Create a menu app that meets the following:
//1)Use at least one array.
//2)Use at least two classes.
//3)Your menu should have the options to create, view, and delete elements
class Sport{
    constructor(name, medals){
        this.name = name;
        this.medals =medals;
    }
    describe(){
        return `${this.name} has this many ${this.medals}.`;
    }
}

class Country{
    constructor(name){
        this.name = name;
        this.country = [];
    }
    addCounty(country){
        if (country instanceof Country){
            this.country.push(country);
        } else {
            throw new Error('You can only add an instance of Country, Argument is not a country: ${country}');
        }
    }
    describe(){
        return `${this.name} has ${this.country.length} competing.`;
    }
}

class Menu{
    constructor() {
        this.countries = [];
        this.selectedCountry = null;
    }

    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection){
                case '1':
                    this.createcountry();
                    break;
                case '2':
                    this.viewcountry();
                    break;
                case '3':
                    this.deletecountry();
                    break;
                case '4':
                    this.displaycountry();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Create Country
        2) View Country
        3) Delete Country
        4) Display All Countries
        `);
    }
    showCountryMenuOptions(countryInfo){
        return prompt(`
        0) Back
        1) Create Total Medals
        2) Delete Tolal Medals
        ----------------------
        ${countryInfo}
        `);
    }

    displayCouuntry(){
        let countryString = '';
        for(let i = 0; i < this.country.length; i++){
            countryString += i + ') ' + this.country[i].name + '\n';
        }
        alert(countryString);
    }
    createCountry(){
        let name = prompt('Enter name for new Country: ');
        this.country.push(new Country(name));
    }
    viewCountry(){
        let index = prompt('Enter the index of the Country you wish to view');
        if(index > -1 && index < this.country.length){
            this.selectedCountry = this.countty[index];
            let description = 'Country Name: ' + this.selectedCountry.name + '\n';
            for(let i = 0; i < This.selectedCountry.country.length; i ++){
                description += i + ') ' + this.selectedCountry.country[i].name + ' - ' + this.selectedCountry[i].medals + '\n';
            }
            let selection = this.showCountryMenuOptions(description);
            switch(selection){
                case '1':
                    this.createCountry();
                    break;
                case '2':
                    this.deleteCountry();
            }
        }
    }
}

let menu = new Menu();
menu.start();