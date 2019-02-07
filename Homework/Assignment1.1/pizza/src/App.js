import React, { Component } from 'react';
import './App.css';
import ChPizza from './img/ChPizza.jpg';
import PepPizza from './img/PepPizza.jpg';
import HWPizza from './img/HWPizza.jpg';
import VegPizza from './img/VegPizza.jpg';

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
              CC #:    
              <input type="text"/>
            </label>
          </form>
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Cheese Pizza</h3>
                  <img src={ChPizza} height="100"></img>
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
                  <img src={PepPizza} height="100"></img>
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
                  <img src={HWPizza} height="100"></img>
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
                  <img src={VegPizza} height="100"></img>
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
