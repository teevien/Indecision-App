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

// PARENT - INDECISION APP
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({
                    options
                }))
            }
        } catch (e) {
            // do nothing at all
        }
       
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('updated');
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }
    componentWillUnmount() {
        console.log('unmounted');
    }
    handleDeleteOptions() {
        this.setState(()=> ({
            options: []
        }))
    }
    handleDeleteOption(optionToRemove) {
        // console.log('hod', option);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState)=> ({
            options: prevState.options.concat(option)
        }))
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
// IndecisionApp.defaultProps = {
//     options: []
// }
    // CHILD - HEADER
    const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
    };

    Header.defaultProps = {
        title: 'Indecision'
    }

    // class Header extends React.Component {
    //     render() {
            // console.log(this.props);
    //         return (
    //             <div>
    //                 <h1>{this.props.title}</h1>
    //                 <h2>{this.props.subtitle}</h2>
    //             </div>
    //         );
    //     };
    // };

    // CHILD - ACTION
    const Action = (props) => {
        return (
            <div>
                <button
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >
                    What should I do?
        </button>
            </div>
        );
    };
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

    // CHILD - OPTIONS
    const Options = (props) => {
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {props.options.length === 0 && <p>Please add an option</p>}
                {
                    props.options.map((option) => (
                        <Option 
                            key={option} 
                            optionText={option} 
                            handleDeleteOption={props.handleDeleteOption}    
                        />
                    ))
                }
            </div>
        );
    };
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

        // CHILD IN OPTIONS - OPTION
        const Option = (props) => {
            return (
                <div>
                    {props.optionText}
                    <button 
                        onClick={(e) => {
                            props.handleDeleteOption(props.optionText);
                        }}
                        >
                    Remove
                    </button>
                </div>
            )
        }

        // class Option extends React.Component {
        //     render() {
        //         return (
        //             <div>
        //                 {this.props.optionText}
        //             </div>
        //         );
        //     };
        // };


    // CHILD - ADD OPTION
    class AddOption extends React.Component {
        constructor(props) {
            super(props);
            this.handleAddOption = this.handleAddOption.bind(this);
            this.state = {
                error: undefined
            }
        }
        // NOTICE THAT NOW WE HAVE A METHOD WHICH WILL PREVENT DEFAULT ON OUR FORM
        // WE ALSO HAVE THE FUNCTION PASSED DOWN FROM THIS.PROPS
        handleAddOption(e) {
            e.preventDefault();
            const option = e.target.elements.option.value.trim();
            const error = this.props.handleAddOption(option);

            this.setState(()=> ({
                error
            }))

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
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.handleAddOption}>
                        <input 
                        type="text" 
                        name="option"/>
                        <button>Add Option</button>
                    </form>
                </div>
            );
        };
    };

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

ReactDOM.render(<IndecisionApp options={['Option One', 'Option Two']} />, document.getElementById('app'));