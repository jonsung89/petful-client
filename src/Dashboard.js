import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    const cat = this.props.catToAdopt;
    const dog = this.props.dogToAdopt;

    return <div className="Dashboard">
        <header className="Dash-header">
          <h1>Welcome to the Petful app</h1>
        </header>
        <div className="grid">
          <section className="pet-info column">
            <header>
              <h2>{cat.name}</h2>
              <img src={cat.imageURL} alt={cat.imageDescription} />
            </header>
            <main>
              <dl>
                <dt>Age:</dt>
                <dd>{cat.age}</dd>
                <dt>Breed:</dt>
                <dd>{cat.breed}</dd>
                <dt>Sex:</dt>
                <dd>{cat.sex}</dd>
                <dt>Story:</dt>
                <dd>{cat.story}</dd>
              </dl>
              <button>Adopt</button>
            </main>
          </section>

        <section className="pet-info column">
          <header>
            <h2>{dog.name}</h2>
            <img src={dog.imageURL} alt={dog.imageDescription} />
          </header>
          <main>
            <dl>
              <dt>Age:</dt>
              <dd>{dog.age}</dd>
              <dt>Breed:</dt>
              <dd>{dog.breed}</dd>
              <dt>Sex:</dt>
              <dd>{dog.sex}</dd>
              <dt>Story:</dt>
              <dd>{dog.story}</dd>
            </dl>
            <button>Adopt</button>
          </main>
        </section>

        </div>

      </div>;
  }
}

export default Dashboard;
