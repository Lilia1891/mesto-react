import React from "react";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Main from "../../components/Main.js";
import PopupWithForm from "../../components/PopupWithForm.js";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name="avatar" title="Обновить аватар">
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
      <PopupWithForm name="profile" title="Редактировать профиль">
        <input
          className="popup__input popup__input_type_name"
          type="text"
          name="title"
          id="input-name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error popup__input-error_title"></span>

        <input
          className="popup__input popup__input_type_job"
          type="text"
          name="job"
          id="input-job"
          placeholder="Вид деятельности"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error popup__input-error_job"></span>
      </PopupWithForm>
      <PopupWithForm name="add-card" title="Новое место">
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
      <PopupWithForm name="confirm" title="Вы уверены?">
        {" "}
      </PopupWithForm>

      <div className="popup popup_view-image">
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="" />
          <figcaption className="popup__image-title"></figcaption>
          <button className="popup__close-button" type="button"></button>
        </figure>
      </div>

      <template className="template-elements">
        <li className="gallery__element">
          <img src="#" className="gallery__element-image" alt="" />
          <div className="gallery__element-description">
            <h2 className="gallery__element-title"></h2>
            <div className="gallery__element-like-container">
              <button
                type="button"
                className="gallery__element-like gallery__element-like"
              ></button>
              <div className="gallery__element-like-counter"></div>
            </div>
          </div>
          <button type="button" className="gallery__element-delete"></button>
        </li>
      </template>
    </div>
  );
}

export default App;
