console.log('app.js is running');

const app = {
    title: 'hello',
    subtitle: 'world',
    options: []
}

// function to submit form
const formSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    // console.log(option);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
}

// function to remove all options
const removeAll = (e) => {
    app.options = [],
        renderApp();
}

// function to make decision
const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

// JSX - JavaScript XML
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0
                ? 'here are your options'
                : 'No options'}
            </p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What Should I Do?</button>
            <button onClick={removeAll}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>

            <form onSubmit={formSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
