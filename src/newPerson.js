const isAdult = (x) => {
    if (x >= 18) {
        return true
    } else {
        return false
    }
}
const canDrink = (age) => age >= 21;
const subtract = (a, b) => a-b;

export {isAdult, canDrink, subtract as default};