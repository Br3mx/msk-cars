import React, { useState } from "react";
import style from "./EditSingleRealizationD.module.scss";
import { useSelector } from "react-redux";
import { getCarById } from "../../../../redux/Detailing/detailingReducer";
import { useParams } from "react-router-dom";
import { IMGS_URL } from "../../../../config";
import { getRole } from "../../../../redux/commonRedux";

const EditSingleRealizationD = () => {
  const { id } = useParams();
  const car = useSelector((state) => getCarById(state, id));
  const user = useSelector(getRole);

  const [formData, setFormData] = useState({
    carMark: car.carMark,
    img: car.img,
    restImg: JSON.parse(car.restImg) || [],
    description: JSON.parse(car.description),
  });

  const [imagePreview, setImagePreview] = useState(
    `${IMGS_URL}/detailing/cars/${car.img}`
  );

  const [restImgPreviews, setRestImgPreviews] = useState(
    formData.restImg.map((img) => `${IMGS_URL}/detailing/cars/${img}`)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const updatedRestImg = [...formData.restImg];
        const updatedRestImgPreviews = [...restImgPreviews];

        // Update the file and preview for the specific index
        updatedRestImg[index] = file;
        updatedRestImgPreviews[index] = reader.result;

        setFormData((prevData) => ({
          ...prevData,
          restImg: updatedRestImg,
        }));
        setRestImgPreviews(updatedRestImgPreviews);
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleDelete = (index) => {
    if (!window.confirm("Czy na pewno chcesz usunąć te zdjęcie ?")) return;
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
        // Add new file and its preview
        setFormData((prevData) => ({
          ...prevData,
          restImg: [...prevData.restImg, file],
        }));
        setRestImgPreviews((prevPreviews) => [...prevPreviews, reader.result]);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ///
  };

  return (
    <div className={style.container}>
      {user === "ADMIN" ? (
        <div className={style.content}>
          <h1>
            Edytuj realizacje <br />"{formData.carMark}"
          </h1>
          <form onSubmit={handleSubmit}>
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
              {"-"}
              <span>Zmień miniaturkę</span>
              <input type="file" name="img" onChange={handleFileChange} />
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
              <input type="file" multiple onChange={handleAddRestImg} />
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
