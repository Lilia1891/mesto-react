import React from "react";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Main from "../../components/Main.js";
import PopupWithForm from "../../components/PopupWithForm.js";
import ImagePopup from "../../components/ImagePopup.js";
import api from "../../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "../EditProfilePopup.js";
import EditAvatarPopup from "../EditAvatarPopup.js";
import AddPlacePopup from "../AddPlacePopup.js";

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
  const handleUpdateUser = (data) => {
    api.editProfile(data).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    });
  };
  const handleUpdateAvatar = (item) => {
    api.changeAvatar(item).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    });
  };

  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.toggleLike(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  const handleAddPlaceSubmit = (item) => {
    api.addNewCard(item).then((res) => {
      setCards([res, ...cards]);
      closeAllPopups();
    });
  };

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
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={onEditProfile}
            onAddPlace={onAddPlace}
            onEditAvatar={onEditAvatar}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

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
