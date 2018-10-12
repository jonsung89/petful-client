import React, { Component } from 'react';
import './Dashboard.css';
import Pet from './Pet';

class Dashboard extends Component {

  adoptPet() {
    console.log("Pet was adopted")
  }

  render() {

    return <div className="Dashboard">
        <header className="Dash-header">
          <h1>Welcome to the Petful app</h1>
        </header>
        <div className="grid">
          <Pet 
            petToAdopt={this.props.catToAdopt} 
            onAdoptPet={() => this.adoptPet()}/>
          <Pet 
            petToAdopt={this.props.dogToAdopt}
            onAdoptPet={() => this.adoptPet()}/>
        </div>

      </div>;
  }
}

export default Dashboard;
