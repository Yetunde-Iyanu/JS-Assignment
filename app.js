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

     //Names in an Array //
     const names = ['Tamara', 'Mathias', 'Elias','Brook'];
     names.forEach(name =>{
        console.log(name)
     });
     const upperCasenames = names.map(names => names.toUpperCase());
     console.log(upperCasenames)




     // numbers //
     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     numbers.map(number => console.log(number));
     
     // square number //
     const squareNumbers = numbers.map(number => number **2);
     console.log(squareNumbers)


     // Product Pricing, using map to map //
     const products = [
        {product: 'banana', price: 3},
        {product: 'mango', price: 6},
        {product: 'potatoes', price: ''},
        {product: 'avocado', price: 8},
        {product: 'coffe', price: 10},
        {product: 'tea', price: 10},
     ]
     const prices = products.map(product => product.price);
     console.log(prices)
    
     // filtering out //
     const price = products.map(product => product.price);
     const currentprice = price.filter(price => price !== '' && price !== '');
     console.log(currentprice);




     //OBJECTIVE ASSIGNMENT//
    const dog = {
    name:'Smart', 
    legs:4, 
    color:'black and brown', 
    age:5,
     bark:"woof! woof!"
    };
     console.log(dog);
