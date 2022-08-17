import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose }) {
  const [values, setValues] = useState({ title: "", job: "" });
  const onChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        className="popup__input popup__input_type_name"
        type="text"
        name="title"
        value={values.title}
        id="input-name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        onChange={onChange}
      />
      <span className="popup__input-error popup__input-error_title"></span>
      <input
        className="popup__input popup__input_type_job"
        type="text"
        name="job"
        value={values.job}
        id="input-job"
        placeholder="Вид деятельности"
        minLength="2"
        maxLength="200"
        required
        onChange={onChange}
      />
      <span className="popup__input-error popup__input-error_job"></span>
    </PopupWithForm>
  );
}
