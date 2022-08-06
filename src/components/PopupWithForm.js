function PopupWithForm({ title, name, children }) {
  return (
    <div className={`popup popup_${name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <h3 className="popup__title">{title}</h3>
        <form name={name} action="#" className="popup__form" noValidate>
          {children}
          <button type="submit" className="popup__submit-button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
