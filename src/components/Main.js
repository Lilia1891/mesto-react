import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
    });
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <>
      <div className="profile">
        <div className="profile__box">
          <img
            src={userAvatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-change"
            onClick={() => onEditAvatar(true)}
          />
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__info-name">{userName}</h1>
              <button
                type="button"
                className="profile__avatar-edit-button"
                onClick={() => onEditProfile(true)}
              />
            </div>
            <p className="profile__info-occupation">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__info-add-button"
          onClick={() => onAddPlace(true)}
        />
      </div>
      <div className="gallery">
        <ul className="gallery__elements">
          {cards.map((item, id) => (
            <Card data={item} key={id} onCardClick={onCardClick} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default Main;
