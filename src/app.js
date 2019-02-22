// import './utils.js';
// import {square, add} from './utils.js'

// console.log('app is running!!');
// console.log(square(4));
// console.log(add(1,2));

// import subtract, {isAdult, canDrink} from './newPerson.js';
// import validator from 'validator';
// console.log(validator.isEmail('test@gmail.com'));

// console.log(isAdult(18));
// console.log(canDrink(20));
// console.log(subtract(10,3));

// install --> import --> then use

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';
import 'normalize.css/normalize.css';
import './styles/style.scss';

// const template = React.createElement('p', {}, 'testing');
// const template = <p>this is jsx from webpack</p> // babel can now run this as JSX and convert it
// ReactDOM.render(template, document.getElementById('app'));

// react components MUST have render
// pass data(PROPS) by defining them WITHIN the component element <Header /> and then accessing them within the component using this.props.title
// const obj = {
//     name: 'Teresa',
//     getName() {
//         return this.name;
//     }
// }
// const getName = obj.getName.bind({ name: 'Andrew'});
// console.log(getName());


// STATELESS FUNCTIONAL COMPONENT
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
// ReactDOM.render(<User name='Teresa' age={26}/>, document.getElementById('app'));

// const template =  (
//     <div>
//         <h1>Title</h1>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// )
// ReactDOM.render(template, document.getElementById('app'));
const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
};

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>this is my page</p>
//     </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

// class OldSyntax {
//     constructor() {
//         this.name='Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `hi my name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

//--------------------------

// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `hi my name is ${this.name}`
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());