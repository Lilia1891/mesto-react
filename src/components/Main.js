function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector(".popup_avatar").classList.add("popup_opened");
  };
  const handleEditProfileClick = () => {
    document.querySelector(".popup_profile").classList.add("popup_opened");
  };
  const handleAddPlaceClick = () => {
    document.querySelector(".popup_add-card").classList.add("popup_opened");
  };

  return (
    <>
      <div className="profile">
        <div className="profile__box">
          <img src="" alt="Аватар профиля" className="profile__avatar" />
          <button
            className="profile__avatar-change"
            onClick={handleEditAvatarClick}
          ></button>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__info-name">Жак Кусто</h1>
              <button
                type="button"
                className="profile__avatar-edit-button"
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p className="profile__info-occupation">Мореплаватель</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__info-add-button"
          onClick={handleAddPlaceClick}
        ></button>
      </div>
      <div className="gallery">
        <ul className="gallery__elements"></ul>
      </div>
    </>
  );
}
export default Main;
