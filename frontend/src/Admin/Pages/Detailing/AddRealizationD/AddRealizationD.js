import React, { useState } from "react";
import style from "./AddRealizationD.module.scss";
import { useDispatch } from "react-redux";
import { addRealizationD } from "../../../../redux/Detailing/detailingReducer";
import { IMGS_URL } from "../../../../config";

const AddRealizationD = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    carMark: "",
    img: null,
    restImg: [],
    description: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [restImgPreviews, setRestImgPreviews] = useState([]);

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

  const handleAdd = (e) => {
    e.preventDefault();

    const descriptionArray = formData.description
      .split(",")
      .map((item) => item.trim());
    const newRealizationData = {
      carMark: formData.carMark,
      img: formData.img,
      restImg: formData.restImg,
      description: JSON.stringify(descriptionArray),
    };

    dispatch(addRealizationD(newRealizationData));
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Dodaj nową realizację</h1>
        <form onSubmit={handleAdd}>
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
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Main"
                className={style.imagePreview}
              />
            )}
            <span>Wybierz miniaturkę</span>
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
            np. Pranie tapicerki, Regeneracja reflektorów, Korekta lakieru itd.
          </span>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <button className={style.submit} type="submit">
            Dodaj realizację
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRealizationD;
