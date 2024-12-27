import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialisation de l'état
    this.state = {
      person: {
        fullName: "Arya Stark",
        bio: "Une aventurière en quête de justice.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Guerrière",
      },
      show: false,
      timeElapsed: 0,
    };

    this.timer = null; // Référence pour le timer
  }

  componentDidMount() {
    // Démarrer le timer au montage
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Nettoyer le timer au démontage
    clearInterval(this.timer);
  }

  toggleShow = () => {
    // Fonction pour basculer l'état `show`
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profil React</h1>
        <button onClick={this.toggleShow}>
          {show ? "Cacher le Profil" : "Afficher le Profil"}
        </button>

        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>Profession : {person.profession}</h3>
          </div>
        )}

        <div>
          <p>Temps écoulé depuis le montage : {timeElapsed} secondes</p>
        </div>
      </div>
    );
  }
}

export default App;
