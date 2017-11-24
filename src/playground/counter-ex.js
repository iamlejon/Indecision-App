

class Counter extends  React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }


    // LIFE CYCLE METHODS
    componentDidMount() {
    
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
            
            if (!isNaN(count)) {
                this.setState(() => ({ count: count }));
            }
        } catch (e) {
            // Do nothing at all if JSON data is invalid
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }
    
    componentWillUnmount () {
        console.log('componentWillUnmount');
    }
    
    // END LIFE CYCLE METHODS
    


    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
     
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });

    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });

    }


    render() {
        return (
            <div>
            <h1>Count: {this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// };


ReactDOM.render(<Counter/>, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };




// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//            <h1>Count: {count}</h1>
//            <button onClick={addOne}>+1</button> 
//            <button onClick={minusOne}>-1</button>
//            <button onClick={reset}>reset</button>
//         </div>
//         );

//         //ReactDOM.render takes 2 arguments, the JSX you'd like to render and the div element (Where you'd like to render it)
//         ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();