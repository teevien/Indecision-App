import React from 'react'

// CHILD - ADD OPTION
class AddOption extends React.Component {
    state = {
        error: undefined
    }
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
        // this.state = {
        //     error: undefined
        // }
    // }
    // NOTICE THAT NOW WE HAVE A METHOD WHICH WILL PREVENT DEFAULT ON OUR FORM
    // WE ALSO HAVE THE FUNCTION PASSED DOWN FROM THIS.PROPS
    handleAddOption = (e) => {
        e.preventDefault();
        // console.log(testing);
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = '';
        }
        // this.setState(() => {
        //     return {
        //         // error: error
        //         error
        //     };
        // });
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form 
                className="add-option"
                onSubmit={this.handleAddOption}
                >
                    <input
                        className="add-option__input"
                        type="text"
                        name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    };
};

export default AddOption