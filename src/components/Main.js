import React from "react";
import api from "../utils/Api.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
    });
  });

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
        <ul className="gallery__elements"></ul>
      </div>
    </>
  );
}
export default Main;
