import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <LetterButtons />
    </>
  )
}

function Header() {
  return (
    <header className="header">
      <h1><RandomWordPage /></h1>
    </header >

  )
}



const RandomWordPage = () => {
  const [randomWord, setRandomWord] = useState('');


  useEffect(() => {
    const wordList = ['chat', 'chien', 'maison', 'soleil', 'ordinateur']; // Replace with your own array of words
    const getRandomWord = () => {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      setRandomWord(wordList[randomIndex]);
    };

    getRandomWord();

  }, []); // Include wordList in the dependency array

  return (
    <>
      {randomWord}
    </>
  );
};


// Fonction pour générer un nombre aléatoire entre min et max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Fonction pour générer une couleur aléatoire en format RGB
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Composant des boutons de lettre
function LetterButtons() {
  const [buttons, setButtons] = useState([]);
  const getRandomPosition = () => Math.floor(Math.random() * 90) + 1; // Génère une position aléatoire entre 1 et 90

  useEffect(() => {
    const generateButtonPositions = () => {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const newButtons = alphabet.split('').map((letter) => ({
        letter,
        top: `${getRandomPosition()}vh`,
        left: `${getRandomPosition()}vw`,
        backgroundColor: getRandomColor(),
        animationName: `moveButton${letter}`, // Utilisation d'une animation individuelle pour chaque bouton
      }));
      setButtons(newButtons);
    };

    generateButtonPositions();

    const intervalId = setInterval(generateButtonPositions, 5000); // Met à jour les positions toutes les 2 secondes

    return () => {
      clearInterval(intervalId); // Nettoie l'intervalle lorsque le composant est démonté
    };
  }, []);

  return (
    <div className={styles.container}>
      {buttons.map((button, index) => (
        <button
          key={index}
          style={{
            position: 'absolute',
            top: button.top,
            left: button.left,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#3f51b5',
            color: '#303030',
            fontSize: '18px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'top 10s, left 10s',
            animationDelay: `${index * 10}s`, // Ajoute un décalage d'animation différent à chaque bouton
            // Utilisation de l'animation individuelle pour chaque bouton
          }}
        >
          {button.letter}
        </button>
      ))}
    </div>
  );
}
// import { useEffect, useState } from 'react';

// const ButtonPage = () => {
//   const [buttonPositions, setButtonPositions] = useState([]);

//   useEffect(() => {
//     const getRandomPosition = () => Math.floor(Math.random() * 90) + 1; // Génère une position aléatoire entre 1 et 90

//     const generateButtonPositions = () => {
//       const positions = [];
//       for (let i = 0; i < 10; i++) {
//         const position = {
//           top: `${getRandomPosition()}vh`,
//           left: `${getRandomPosition()}vw`,
//         };
//         positions.push(position);
//       }
//       setButtonPositions(positions);
//     };

//     generateButtonPositions();

//     const intervalId = setInterval(generateButtonPositions, 2000); // Met à jour les positions toutes les 2 secondes

//     return () => {
//       clearInterval(intervalId); // Nettoie l'intervalle lorsque le composant est démonté
//     };
//   }, []);

//   return (
//     <div>
//       {buttonPositions.map((position, index) => (
//         <button
//           key={index}
//           style={{
//             position: 'absolute',
//             top: position.top,
//             left: position.left,
//             transition: 'top 2.5s, left 2.5s', // Ajoute une transition de 0.5 seconde pour les propriétés top et left
//           }}
//         >
//           Button {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ButtonPage;
