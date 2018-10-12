import React, { Component } from 'react';
import './pet.css';

class Pet extends Component {
  render() {
    const pet = this.props.petToAdopt;

    return <section className="pet-info column">
        <header>
          <h2>{pet.name}</h2>
          <img src={pet.imageURL} alt={pet.imageDescription} />
        </header>
        <main>
          <dl>
            <dt>Age:</dt>
          <dd>{pet.age}</dd>
            <dt>Breed:</dt>
          <dd>{pet.breed}</dd>
            <dt>Sex:</dt>
          <dd>{pet.sex}</dd>
            <dt>Story:</dt>
          <dd>{pet.story}</dd>
          </dl>
          <button onClick={() => this.props.onAdoptPet()}>Adopt</button>
        </main>
      </section>;
  }
}

export default Pet;
