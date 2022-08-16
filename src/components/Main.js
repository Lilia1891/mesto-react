import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "./contexts/CurrentUserContext.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.toggleLike(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <>
      <div className="profile">
        <div className="profile__box">
          <img
            src={currentUser.avatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
          <button className="profile__avatar-change" onClick={onEditAvatar} />
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__info-name">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__avatar-edit-button"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__info-occupation">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__info-add-button"
          onClick={onAddPlace}
        />
      </div>
      <div className="gallery">
        <ul className="gallery__elements">
          {cards.map((item, id) => (
            <Card
              data={item}
              key={id}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
export default Main;
