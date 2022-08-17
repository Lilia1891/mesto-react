import React from "react";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Main from "../../components/Main.js";
import PopupWithForm from "../../components/PopupWithForm.js";
import ImagePopup from "../../components/ImagePopup.js";
import api from "../../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "../EditProfilePopup.js";

function App() {
  const [isEditAvatarPopupOpen, handleEditAvatarClick] = React.useState(false);
  const [isEditProfilePopupOpen, handleEditProfileClick] =
    React.useState(false);
  const [isAddPlacePopupOpen, handleAddPlaceClick] = React.useState(false);
  const [selectedCard, handleCardClick] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  const closeAllPopups = () => {
    handleEditAvatarClick(false);
    handleEditProfileClick(false);
    handleAddPlaceClick(false);
    handleCardClick({});
  };
  const onEditAvatar = () => {
    handleEditAvatarClick(true);
  };
  const onEditProfile = () => {
    handleEditProfileClick(true);
  };
  const onAddPlace = () => {
    handleAddPlaceClick(true);
  };
  const onCardClick = (data) => {
    handleCardClick(data);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={onEditProfile}
            onAddPlace={onAddPlace}
            onEditAvatar={onEditAvatar}
            onCardClick={onCardClick}
          />
          <Footer />
          <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input
              type="url"
              name="avatar"
              id="avatar"
              placeholder="Ссылка на картинку"
              className="popup__input"
              required
            />
            <span className="popup__input-error popup__input-error_avatar"></span>
          </PopupWithForm>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          />
          <PopupWithForm
            name="add-card"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              className="popup__input popup__input_type_place"
              type="text"
              placeholder="Название"
              name="place"
              id="input-place"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error popup__input-error_place"></span>

            <input
              className="popup__input popup__input_type_link"
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              id="input-link"
              required
            />
            <span className="popup__input-error popup__input-error_link"></span>
          </PopupWithForm>
          <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            onClose={closeAllPopups}
          >
            {" "}
          </PopupWithForm>

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
