import React, { useEffect, useState } from "react";
import style from "./AddRealizationC.module.scss";
import { useDispatch } from "react-redux";
import {
  addRealizationExp,
  addRealizationExport,
} from "../../../../redux/CarsExport/carsexportReducer";
import { IMGS_URL } from "../../../../config";
import Preloader from "../../../../components/common/Preloader/Preloader";
import Loading from "../../../../components/common/Preloader for button/Loading";
import Success from "../../../../components/common/Success/Success";

const AddRealizationC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    carMark: "",
    img: null,
    restImg: [],
    description: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [restImgPreviews, setRestImgPreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.carMark.trim()) {
      newErrors.carMark = "Pole 'Marka samochodu' nie może być puste.";
    }
    if (!formData.img) {
      newErrors.img = "Musisz dodać główne zdjęcie.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Pole 'Opis' nie może być puste.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const handleAdd = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const descriptionArray = formData.description
      .split("/")
      .map((item) => item.trim())
      .map(
        (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      );

    const newRealizationData = {
      carMark: formData.carMark,
      img: formData.img,
      restImg: formData.restImg,
      description: JSON.stringify(descriptionArray),
    };

    try {
      await dispatch(addRealizationExport(newRealizationData));
      setSuccessMessage("Realizacja została dodana pomyślnie!");
      setFormData({
        carMark: "",
        img: null,
        restImg: [],
        description: "",
      });
      setImagePreview(null);
      setRestImgPreviews([]);
    } catch (error) {
      setSuccessMessage("Wystąpił błąd podczas dodawania realizacji.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Dodaj nową realizację</h1>
        <h2>
          <i>"Samochody na zamówienie"</i>
        </h2>
        <form onSubmit={handleAdd}>
          <div className={style.carMark}>
            <span>Marka samochodu</span>
            <input
              type="text"
              name="carMark"
              value={formData.carMark}
              onChange={handleChange}
            />
            {errors.carMark && <p className={style.error}>{errors.carMark}</p>}
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
            {errors.img && <p className={style.error}>{errors.img}</p>}
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
            Aby odzielić od siebie część opisu lub wykonane usługi wpisuj je po
            znaku "/" <br />
            np. Sprowadzony z Niemiec / Zostało naprawione.... / Przygotowany do
            sprzedaży.
          </span>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && (
            <p className={style.error}>{errors.description}</p>
          )}
          <button className={style.submit} type="submit" disabled={isLoading}>
            {isLoading ? <Loading /> : "Dodaj realizację"}
          </button>
          {successMessage && <Success>{successMessage}</Success>}
        </form>
      </div>
    </div>
  );
};

export default AddRealizationC;
