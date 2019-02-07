// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <h1>Posh Pizza
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Email:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//             <label>
//             Password:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//           </label>
//         </form>
//          </h1>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <NameForm />,
//     document.getElementById("login")
//   );

ReactDOM.render(
    React.createElement(
        "h1", 
        {}, 
        "Posh Pizza",
        React.createElement(
            "form", 
            {}, 
            "Email",
        ),
    ),
    document.getElementById("login")
    );