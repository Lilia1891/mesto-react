import React from "react";
import api from "../utils/Api.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
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
      console.log(res);
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
          ></button>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__info-name">{userName}</h1>
              <button
                type="button"
                className="profile__avatar-edit-button"
                onClick={() => onEditProfile(true)}
              ></button>
            </div>
            <p className="profile__info-occupation">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__info-add-button"
          onClick={() => onAddPlace(true)}
        ></button>
      </div>
      <div className="gallery">
        <ul className="gallery__elements">
          {cards.map((item, i) => (
            <li className="gallery__element" key={i}>
              <img
                src={item.link}
                className="gallery__element-image"
                alt={item.name}
              />
              <div className="gallery__element-description">
                <h2 className="gallery__element-title">{item.name}</h2>
                <div className="gallery__element-like-container">
                  <button
                    type="button"
                    className="gallery__element-like gallery__element-like"
                  ></button>
                  <div className="gallery__element-like-counter">
                    {item.likes.length}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="gallery__element-delete"
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Main;
