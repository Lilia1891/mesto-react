import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "./contexts/CurrentUserContext.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  /*const [userAvatar, setUserAvatar] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");*/
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    console.log(isLiked);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.toggleLike(card._id, isLiked).then((newCard) => {
      console.log(newCard);
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  React.useEffect(() => {
    /*api.getUserInfo().then((res) => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
    });*/
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
            />
          ))}
        </ul>
      </div>
    </>
  );
}
export default Main;
