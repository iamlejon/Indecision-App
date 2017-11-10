let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};




const renderCounterApp = () => {
    const template2 = (
        <div>
           <h1>Count: {count}</h1>
           <button onClick={addOne}>+1</button> 
           <button onClick={minusOne}>-1</button>
           <button onClick={reset}>reset</button>
        </div>
        );

        //ReactDOM.render takes 2 arguments, the JSX you'd like to render and the div element (Where you'd like to render it)
        ReactDOM.render(template2, appRoot);
};

renderCounterApp();