function PopupWithForm({ title, name }) {
  return (
    <>
      <div className="popup popup_avatar">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form
            name="avatar-form"
            action="#"
            className="popup__form"
            noValidate
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
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_profile">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form className="popup__form" name="form" noValidate>
            <h3 className="popup__title">Редактировать профиль</h3>
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

            <button disabled className="popup__submit-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_add-card">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <form
            className="popup__add-form popup__form"
            name="popup__add-form"
            noValidate
          >
            <h3 className="popup__title">Новое место</h3>
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

            <button className="popup__submit-button" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_confirm">
        <div className="popup__container">
          <h3 className="popup__title">Вы уверены?</h3>
          <button className="popup__submit-button" type="submit">
            Да
          </button>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>
    </>
  );
}
export default PopupWithForm;
