console.log('App.js is running!')

//JSX - JavaScript XML

let app = {
    title: 'Indecision App',
    subtitle: 'Digimon Digital Monsters',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault(); //stops the full page from refreshing

    
    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderApplication();
};

const onRemoveAll = (e) => {
    e.preventDefault();

    app.options = [];
    renderApplication();
}


const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');


const renderApplication = () => {
    const template = (
        <div>
            <h1>{app.title ? app.title : 'Untitled'} </h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All </button>
            <ol>
            {
                app.options.map((option) => {
                 return  <li key={option}>{option}</li>
                })
            }
            </ol>
        
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Options </button>
            </form>




        </div>
        );

        ReactDOM.render(template, appRoot);

};

renderApplication();



