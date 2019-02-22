import React from 'react';

// CHILD - ACTION
const Action = (props) => (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                className="big-button"
            >
                What should I do?
        </button>
        </div>
    );
// class Action extends React.Component {
//     // handlePick() {
//     //     alert('picked');
//     // }
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 What should i do?
//                 </button>
//             </div>
//         );
//     };
// };

export default Action;