// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Toronto', 'Ontario', 'L4J5Z1'];

const [, city, province] = address;
// console.log(`you are in ${address[1]} ${address[2]}`);
console.log(`you are in ${city} ${province}`);

// OBJECT DESTRUCTURING

// const person = {
//     name: 'Teresa',
//     age: 26,
//     location: {
//         city: 'Toronto',
//         temperature: 92
//     }
// };

// const { name: firstName = 'anonymous', age, location } = person; // the object we are trying to destructure
// console.log(`${firstName} is ${age}`);

// const { city, temperature: temp } = person.location;
// if ( city && temp) {
// console.log(`It's ${temp} in ${city}`);
// };

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);