// WITH STATE AND CLASS
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        console.log(stringCount);
        console.log(count);
        if (!isNaN(count)) {
            this.setState(() => ({
                count
            }))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('updated');
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
            console.log('saving data');
        }
    }
    handleAddOne() {
        // console.log('add one');
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    };
    handleMinusOne() {
        // console.log('minus one');
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    };
    handleReset() {
        // console.log('reset');
        this.setState(() => {
            return {
                count: 0
            };
        });
    };
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )   
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));



// FIRST EXAMPLE
// let count = 0;

// const add = () => {
//     count++;
//     renderCounter();
// };

// const minus = () => {
//     count--;
//     renderCounter();
// }

// const reset = () => {
//     count = 0;
//     renderCounter();
// }

// const appRoot = document.getElementById('app');

// const renderCounter = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={add}>+1</button>
//             <button onClick={minus}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounter();