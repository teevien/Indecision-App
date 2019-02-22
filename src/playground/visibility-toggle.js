// WITH CLASS AND STATE
class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    toggleVisibility() {
        console.log('toggled');
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
        // if (this.state.visibility) {
        //     this.setState(() => {
        //         return {
        //         visibility: false
        //         }
        //     });
        // } else {
        //     this.setState(() => {
        //         return {
        //         visibility: true
        //         }
        //     })
        // }
    }
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{ this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                <p>{ this.state.visibility ? 'you can see me!' : null }</p>
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));






// FIRST EXAMPLE
// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     // if (visibility) {
//     //     visibility = false
//     // } else {
//     //     visibility = true;
//     // }
//     renderApp();
// }

// const renderApp = () => {
//     const app = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'hide details' : 'show details'}
//             </button>
//             <p>{visibility ? 'you can see me' : null}</p>
//         </div>
//     )
//     ReactDOM.render(app, appRoot);
// }

// renderApp();