import React from "react";
import { useSelector } from "react-redux";
import { getVulcanization } from "../../../../redux/commonRedux";
import styles from "./Vulcanization.module.scss";
import { IMGS_URL } from "../../../../config";

const Vulcanization = () => {
  const vulc = useSelector(getVulcanization);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>{vulc.heading}</h1>

        <section className={styles.section}>
          <h2 className={styles.subheading}>{vulc.subheading}</h2>
          <p className={styles.text}>{vulc.text}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>{vulc.subheading2}</h2>
          <ul className={styles.list}>
            {vulc.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>{vulc.subheading3}</h2>
          <p className={styles.text}>{vulc.text2}</p>
          <div className={styles.fotoCont}>
            <img
              src={`${IMGS_URL}/vulcanization/foto1.jpg`}
              alt="Maszyna do wulkanizacji"
              className={styles.image}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>{vulc.subheading4}</h2>
          <p className={styles.text}>{vulc.text3}</p>
        </section>
      </div>
    </div>
  );
};

export default Vulcanization;
