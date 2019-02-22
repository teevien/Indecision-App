import React from 'react';
import Option from './Option.js';

// CHILD - OPTIONS
const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                className="button button--link"
                onClick={props.handleDeleteOptions}
                >Remove All</button>
            </div>
                {props.options.length === 0 && <p class="widget__message">Please add an option</p>}
                {
                    props.options.map((option, index) => (
                        <Option
                            key={option}
                            optionText={option}
                            count={index+1}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
        </div>
    );


// class Options extends React.Component {
// constructor(props) { // overrides the constructor, passing in the props so that we have control
//     super(props);
//     this.handleRemoveAll = this.handleRemoveAll.bind(this); // this ensures that wherever we call handleRemoveAll, the context is still correct (like below) and we don't have to write bind in-line each time
// }
// handleRemoveAll() {
//     console.log(this.props.options);
// }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/> )
//                 }
//                 <Option />
//             </div>
//         );
//     };
// };

export default Options;