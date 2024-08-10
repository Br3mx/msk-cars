import React, { useState } from "react";
import style from "./EditSingleRealizationD.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  editRealizationD,
  getCarById,
} from "../../../../redux/Detailing/detailingReducer";
import { useParams } from "react-router-dom";
import { IMGS_URL } from "../../../../config";

const EditSingleRealizationD = () => {
  const { id } = useParams();
  const car = useSelector((state) => getCarById(state, id));
  const user = localStorage.getItem("role");
  const dispatch = useDispatch();

  const parseJSON = (data) => {
    if (!data) return []; // Jeśli dane są puste lub undefined, zwróć pustą tablicę.

    try {
      return JSON.parse(data); // Spróbuj sparsować dane jako JSON.
    } catch (e) {
      console.error("Failed to parse JSON:", e);
      return Array.isArray(data) ? data : []; // Jeśli JSON.parse się nie uda, zwróć oryginalne dane (jeśli są tablicą) lub pustą tablicę.
    }
  };

  const [formData, setFormData] = useState({
    carMark: car.carMark,
    img: car.img,
    restImg: car.restImg,
    description: parseJSON(car.description),
  });

  const [imagePreview, setImagePreview] = useState(
    `${IMGS_URL}/detailing/cars/${car.img}`
  );

  const [restImgPreviews, setRestImgPreviews] = useState(
    parseJSON(car.restImg).map((img) => `${IMGS_URL}/detailing/cars/${img}`)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMainFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prevData) => ({
          ...prevData,
          img: file,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const updatedRestImg = [...formData.restImg];
        const updatedRestImgPreviews = [...restImgPreviews];

        updatedRestImg[index] = file;
        updatedRestImgPreviews[index] = reader.result;

        setFormData((prevData) => ({
          ...prevData,
          restImg: updatedRestImg,
        }));
        setRestImgPreviews(updatedRestImgPreviews);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (index) => {
    if (!window.confirm("Czy na pewno chcesz usunąć te zdjęcie?")) return;
    const updatedRestImg = formData.restImg.filter((_, i) => i !== index);
    const updatedRestImgPreviews = restImgPreviews.filter(
      (_, i) => i !== index
    );

    setFormData((prevData) => ({
      ...prevData,
      restImg: updatedRestImg,
    }));
    setRestImgPreviews(updatedRestImgPreviews);
  };

  const handleAddRestImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          restImg: [...prevData.restImg, file],
        }));
        setRestImgPreviews((prevPreviews) => [...prevPreviews, reader.result]);
      };

      reader.readAsDataURL(file);
    }
  };

  const descriptionArray = Array.isArray(formData.description)
    ? formData.description.map((item) => item.trim())
    : String(formData.description)
        .split(",")
        .map((item) => item.trim());
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedData = {
      carMark: formData.carMark,
      img: formData.img,
      restImg: formData.restImg,
      description: JSON.stringify(descriptionArray),
    };

    dispatch(editRealizationD(id, updatedData));
  };

  return (
    <div className={style.container}>
      {user === "ADMIN" ? (
        <div className={style.content}>
          <h1>
            Edytuj realizacje <br />"{formData.carMark}"
          </h1>
          <form onSubmit={handleUpdate}>
            <div className={style.carMark}>
              <span>Marka samochodu</span>
              <input
                type="text"
                name="carMark"
                value={formData.carMark}
                onChange={handleChange}
              />
            </div>
            <div className={style.mainImg}>
              <span>Główne zdjęcie (miniaturka)</span>
              <img
                src={imagePreview}
                alt="Main"
                className={style.imagePreview}
              />
              <span>Zmień miniaturkę</span>
              <input type="file" name="img" onChange={handleMainFileChange} />
            </div>
            <span>Zdjęcia dodatkowe</span>
            <div className={style.restImgs}>
              {restImgPreviews.map((preview, index) => (
                <div key={index} className={style.restImgContainer}>
                  <img
                    src={preview}
                    alt={`Rest ${index}`}
                    className={style.imagePreview}
                  />
                  <input
                    type="file"
                    name="restImg"
                    onChange={(e) => handleFileChange(e, index)}
                  />
                  <button
                    className={style.btnDelete}
                    onClick={() => handleDelete(index)}
                  >
                    Usuń
                  </button>
                </div>
              ))}
            </div>
            <div className={style.addRestImg}>
              <span>Dodaj nowe zdjęcie</span>
              <input type="file" name="restImg" onChange={handleAddRestImg} />
            </div>
            <span>
              Aby dodać więcej usług detalingowych wpisuj je po przecinku <br />
              np. Pranie tapicerki, Regeneracja reflektorów, Korekta lakieru
              itd.
            </span>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <button className={style.submit} type="submit">
              Zapisz zmiany
            </button>
          </form>
        </div>
      ) : (
        <h1>Nie masz uprawnień do tej akcji</h1>
      )}
    </div>
  );
};

export default EditSingleRealizationD;
