var root = document.getElementById("root");

var Email = () => {
    return React.createElement("input", { className: 'form-control-md input-group text-center', placeholder: 'Email' });
  };
  
  var ZipCode = () => {
    return React.createElement("input", { className: ' form-control-md input-group text-center', placeholder: 'Zipcode'});
  };
  
  var SubmitButton = () => {
    return React.createElement("button", { style: { float: 'right' } }, "Submit")
  };
  
  var Form = () => {
      return React.createElement('form', {}, [
        React.createElement(Email),
        React.createElement(ZipCode),
        React.createElement(SubmitButton)
      ])
  };
  
  var App = () => {
      return React.createElement('div', { className: "bg-info p-4 border-dark", style: { width: 200, height: 150 } },
        React.createElement(Form, {})
      )
  };
  
  ReactDOM.render(React.createElement(App), root);