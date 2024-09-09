import React, { useEffect, useState } from "react";
import style from "./PromotionAdmin.module.scss";
import { IMGS_URL } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import {
  addPromotion,
  deleteProm,
  getPromotion,
} from "../../../redux/commonRedux";
import Success from "../../../components/common/Success/Success";
import Loading from "../../../components/common/Preloader for button/Loading";

const PromotionAdmin = () => {
  const prom = useSelector(getPromotion);
  const dispatch = useDispatch();
  const user = localStorage.getItem("role");

  const [formData, setFormData] = useState({
    promotionImg: prom.promotionImg,
  });

  const [imagePreview, setImagePreview] = useState(
    prom.promotionImg ? `${IMGS_URL}/promotion/${prom.promotionImg}` : null
  );
  const [successMessage, setSuccessMessage] = useState("");
  const [loadingState, setLoadingState] = useState({
    add: false,
    delete: false,
    back: false,
  });

  useEffect(() => {
    if (successMessage) {
      console.log("Success Message:", successMessage); // Debugging line
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (prom.promotionImg) {
      setImagePreview(`${IMGS_URL}/promotion/${prom.promotionImg}`);
    } else {
      setImagePreview(null);
    }
  }, [prom]);

  const handleBack = () => {
    setImagePreview(null);
  };

  const handleAdd = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("file", formData.promotionImg);

    setLoadingState((prev) => ({ ...prev, add: true }));

    try {
      await dispatch(addPromotion(formDataToSend));
      setSuccessMessage("Promocja została dodana pomyślnie!");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (e) {
      setSuccessMessage("Wystąpił błąd podczas dodawania promocji");
    } finally {
      setLoadingState((prev) => ({ ...prev, add: false }));
    }
  };

  const handleMainFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prevData) => ({
          ...prevData,
          promotionImg: file,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDelete = async (id) => {
    setLoadingState((prev) => ({ ...prev, delete: true }));

    try {
      await dispatch(deleteProm(id));
      setSuccessMessage("Promocja została usunięta pomyślnie!");
    } catch (e) {
      setSuccessMessage("Wystąpił błąd podczas usuwania promocji");
    } finally {
      setLoadingState((prev) => ({ ...prev, delete: false }));
    }
  };

  return (
    <div className={style.container}>
      {user === "ADMIN" ? (
        <>
          <div className={style.content}>Dodaj lub usuń promocję</div>
          <form>
            <div className={style.mainImg}>
              {!imagePreview ? (
                <>
                  <span>Zmień promocję (zdjęcie)</span>
                  <input
                    type="file"
                    name="file"
                    onChange={handleMainFileChange}
                  />
                </>
              ) : (
                <>
                  <img
                    src={imagePreview}
                    alt="Main"
                    className={style.imagePreview}
                  />
                  {prom.length === 0 ? (
                    <div className={style.btnCont}>
                      <button
                        type="button"
                        className={style.btnAd}
                        onClick={() => handleAdd()}
                      >
                        {loadingState.add ? <Loading /> : "DODAJ PROMOCJĘ"}
                      </button>
                      <button
                        type="button"
                        className={style.btnBack}
                        onClick={() => handleBack()}
                      >
                        COFNIJ
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className={style.btnDelete}
                      onClick={() => handleDelete(prom.id)}
                    >
                      {loadingState.delete ? <Loading /> : "USUŃ"}
                    </button>
                  )}
                </>
              )}
            </div>
            {successMessage && <Success>{successMessage}</Success>}
          </form>
        </>
      ) : (
        <h1>Nie masz uprawnień</h1>
      )}
    </div>
  );
};

export default PromotionAdmin;
