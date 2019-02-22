// var nameVar = 'Teresa';
// nameVar = 'Mike';
// console.log('nameVar', nameVar);

// let nameLet = 'Jen';
// console.log('nameLet', nameLet);

// function getPetName() {
//     let petName = 'hal';
//     return petName;
// }

// let petName = getPetName();
// console.log(petName);



// const fullname = 'Teresa Vien';
// let firstname;

// if (fullname) {
//     firstname = fullname.split(' ')[0];
//     console.log(firstname);
// };

// console.log(firstname);

// const getFirstName = (fullname) => {
//     return fullname.split(' ')[0];
// }

// const getFirstName = (fullname) => fullname.split(' ')[0];
// console.log(getFirstName('Teresa Vien'));

// console.log(firstname);


const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());