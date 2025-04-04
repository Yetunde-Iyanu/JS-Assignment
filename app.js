// FUNCTION ASSIGNMENT ;- Declaring Fullname//
function fullname() {
    console.log("Yetunde Dorcas Awolade");
}
fullname ();

function fullname(firstName,  lastName) {
    return firstName + " " + lastName;
}
console.log(fullname("Yetunde", "Dorcas Awolade"));

    //Decalaring Num//
    function addNumbers(num1, num2) {
        return num1 + num2
    }
    console.log(addNumbers(20, 13))

    //Higher Order Function //
     const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finlandd',
        'Germany',
        'Hungary',
        'Iceland',
        'Ireland',
        'Japan',
        'Kenya',
     ];
     countries.forEach(country => {
        console.log(country)
     });
     //upperCase//
     const upperCaseCountries = 
     countries.map(country => country.toUpperCase());

    
     console.log(upperCaseCountries);

    // COUNTRY LENGTH //
    const CountryLengths = 
    countries.map(country => country.length);
   
    console.log(CountryLengths)

    // flitering out  countries containing 'N'//
    const filteredCountries = 
    countries.filter(country => ! 
    country.toUpperCase('A'));
    console.log('filteredCountries');

    //filtering out countries having six character //
   
    const filterCountries = 
    countries.filter(country => country.length !== 6);
    console.log(filterCountries);

// filtering out countries countaining six letters or more //
const filtereCountries = countries.filter (country => country.length >= 6);
console.log(filtereCountries);

     // //
     const names = ['Tamara', 'Mathias', 'Elias','Brook'];
     names.forEach(name =>{
        console.log(name)
     });
