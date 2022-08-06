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
      <PopupWithForm />

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
