import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Course&TestPages.css";

const CardFlipping = () => {
  const [cards, setCards] = useState([]);
  const [crdClick, setCrdClick] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [cardsLeft, setCardsLeft] = useState(12);
  const [combo, setCombo] = useState(0);
  const [timeStart, setTimeStart] = useState(null);
  const [finishScreenVisible, setFinishScreenVisible] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    startGame();
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const startGame = () => {
    const initialCards = shuffleArray([
      1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
    ]);
    setCards(
      initialCards.map((value, index) => ({
        id: index,
        value,
        flipped: false,
        matched: false,
      }))
    );
    setCrdClick(0);
    setCardsLeft(12);
    setFirstCard(null);
    setSecondCard(null);
    setCombo(0);
    setTimeStart(null);
    setFinishScreenVisible(false);
  };

  const handleCardClick = (card) => {
    if (card.matched || card.flipped || (firstCard && secondCard)) return;

    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, flipped: true } : c
    );
    setCards(newCards);

    if (firstCard === null) {
      setFirstCard(card);
      if (crdClick === 0) setTimeStart(Math.round(Date.now() / 1000));
    } else {
      setSecondCard(card);
      if (firstCard.value === card.value) {
        setTimeout(() => {
          const updatedCards = newCards.map((c) =>
            c.value === card.value ? { ...c, matched: true } : c
          );
          setCards(updatedCards);
          setCardsLeft((prev) => prev - 1);
          setCombo((prev) => prev + 1);
          setFirstCard(null);
          setSecondCard(null);

          if (cardsLeft === 1) finishGame();
        }, 1000);
      } else {
        setTimeout(() => {
          const revertedCards = newCards.map((c) => ({ ...c, flipped: false }));
          setCards(revertedCards);
          setCombo(0);
          setFirstCard(null);
          setSecondCard(null);
        }, 1000);
      }
    }
    setCrdClick((prev) => prev + 1);
  };

  const finishGame = () => {
    setFinishScreenVisible(true);
    const timeEnd = Math.round(Date.now() / 1000) - timeStart;
    localStorage.setItem(
      "bestMoves",
      Math.min(localStorage.getItem("bestMoves") || Infinity, crdClick)
    );
    localStorage.setItem(
      "bestTime",
      Math.min(localStorage.getItem("bestTime") || Infinity, timeEnd)
    );
  };

  return (
    <div>
      <div className="playground">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card card${card.value} ${
              card.matched ? "matched" : ""
            }`}
            onClick={() => handleCardClick(card)}
          >
            <div className={`flip-card-inner ${card.flipped ? "flip" : ""}`}>
              <div className="flip-card-front"></div>
              <div className="flip-card-back"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <div><p>Moves: <span>{crdClick}</span></p></div>
        <button onClick={startGame}>Start New Game</button>
      </div>

      {finishScreenVisible && (
        <div className="finish-screen">
          <h1>Good job!</h1>
          <p>
            Total: <span>{crdClick} moves in {Math.round(Date.now() / 1000) - timeStart} seconds.</span>
          </p>
          <p>Least moves: <span>{localStorage.getItem("bestMoves") || "?"}</span></p>
          <p>Best time: <span>{localStorage.getItem("bestTime") || "?"} seconds</span></p>
          <button onClick={startGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default CardFlipping;
