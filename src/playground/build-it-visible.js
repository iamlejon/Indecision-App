
class Visibility extends React.Component {
    constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
        visibility: false
    };

}
    handleToggleVisibility() {
        this.setState(() => {
            return {
            visibility: !this.state.visibility
            }
        });
    }

    render() {
        return (
            <div>
            <h1> Visibility Toggler</h1>
            
            <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>

            {this.state.visibility && (
                <div>
                    <p>Hey, These are some details. </p>
                </div>
            )}
            </div>
        );
    }
}
ReactDOM.render(<Visibility />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleVisibility = (e) => {
//     e.preventDefault();

//     visibility = !visibility;
//     console.log(visibility)
//     renderApplication();
// };

// const renderApplication = () => {
// const template = (
//     <div>
//     <h1> Visibility Toggler</h1>
    
//     <button onClick={toggleVisibility}>
//      {visibility ? 'Hide details' : 'Show details'}
//     </button>

//     {visibility && (
//         <div>
//             <p>Hey, These are some details. </p>
//         </div>
//     )}
//     </div>
// );

// ReactDOM.render(template, appRoot);
// };

// renderApplication();