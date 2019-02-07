import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 class = "header">Posh Pizza</h1>
        </header>
        <body>
          <form>
            <label>
              Email: 
              <input type="text"/>
            </label>
            <br></br>
            <label>
              Password:    
              <input type="text"/>
            </label>
          </form>
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Cheese Pizza</h3>
                  <img src="src/img/ChPizza.jpg" alt="Cheese Pizza" height="42" width="42"></img>
                  <form class="cheese">
                    <label>
                      Quanitity:   
                      <input type="text"/>
                    </label>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Peperonni Pizzza</h3>
                  <img src="src/img/PepPizza.jpg" alt="Pepperoni Pizza" height="42" width="42"></img>
                  <form>
                    <label>
                      Quanitity:   
                      <input type="text"/>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Hawaiian Pizza</h3>
                  <img src="src/img/HWPizza.jpg" alt="Hawaiian Pizza" height="42" width="42"></img>
                  <form>
                    <label>
                      Quanitity:   
                      <input type="text"/>
                    </label>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Vegetarian Pizzza</h3>
                  <img src="src/img/VegPizza.jpg" alt="Veggiie Pizza" height="42" width="42"></img>
                  <form>
                    <label>
                      Quanitity:   
                      <input type="text"/>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <button>Place Order</button>

        <p id="demo"></p>
        </body>
      </div>
    );
  }
}

export default App;
