import React, { useState } from "react";
import style from "./PromotionAdmin.module.scss";
import { IMGS_URL } from "../../../config";
import { useSelector } from "react-redux";
import { getPromotion } from "../../../redux/commonRedux";
const PromotionAdmin = () => {
  const prom = useSelector(getPromotion);

  const [formData, setFormData] = useState({
    promotionImg: prom.promotionImg,
  });

  const [imagePreview, setImagePreview] = useState(
    `${IMGS_URL}/promotion/${prom.promotionImg}`
  );

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
  return (
    <div className={style.container}>
      <div className={style.content}>Dodaj lub usuń promocję</div>
      <form>
        <div className={style.mainImg}>
          <img src={imagePreview} alt="Main" className={style.imagePreview} />
          {prom.length === 0 ? (
            <>
              <span>Zmień promocję (zdjęcie)</span>
              <input type="file" name="img" onChange={handleMainFileChange} />
            </>
          ) : (
            <button type="button" className={style.btnDelete}>
              USUŃ
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PromotionAdmin;
