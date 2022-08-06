function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <>
      <div className="profile">
        <div className="profile__box">
          <img src="" alt="Аватар профиля" className="profile__avatar" />
          <button
            className="profile__avatar-change"
            onClick={() => onEditAvatar(true)}
          ></button>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__info-name">Жак Кусто</h1>
              <button
                type="button"
                className="profile__avatar-edit-button"
                onClick={() => onEditProfile(true)}
              ></button>
            </div>
            <p className="profile__info-occupation">Мореплаватель</p>
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
