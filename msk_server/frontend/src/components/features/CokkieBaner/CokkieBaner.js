import React, { useState, useEffect } from "react";
import styles from "./CookieBanner.module.scss";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Niezbędne, zawsze true
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setPreferences(consent);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleTogglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleOpenPreferences = () => {
    setShowPreferences(true);
  };

  const handleClosePreferences = () => {
    setShowPreferences(false);
  };

  return (
    <>
      {showBanner && !showPreferences && (
        <div className={styles.cookieBanner}>
          <p>
            Używamy plików cookie, aby dostosować stronę do Twoich potrzeb.
            Kliknij „Akceptuj wszystkie”, aby zgodzić się na wszystkie pliki
            cookie, lub „Zarządzaj preferencjami”, aby dostosować swoje
            ustawienia.
          </p>
          <div className={styles.buttonGroup}>
            <button onClick={handleAcceptAll}>Akceptuj wszystkie</button>
            <button onClick={handleOpenPreferences}>
              Zarządzaj preferencjami
            </button>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className={styles.preferencesModal}>
          <div className={styles.modalContent}>
            <span className={styles.x} onClick={handleClosePreferences}>
              X
            </span>
            <h2>Twoje preferencje dotyczące plików cookie</h2>
            <p>Wybierz, które pliki cookie chcesz zaakceptować:</p>
            <div className={styles.preferences}>
              <label>
                Niezbędne pliki cookie (zawsze włączone)
                <input type="checkbox" checked={true} disabled />
              </label>
              <label>
                Analityczne pliki cookie
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handleTogglePreference("analytics")}
                />{" "}
              </label>
              <label>
                Marketingowe pliki cookie
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => handleTogglePreference("marketing")}
                />{" "}
              </label>
              <label>
                Funkcjonalne pliki cookie
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={() => handleTogglePreference("functional")}
                />{" "}
              </label>
            </div>
            <div className={styles.buttonGroup}>
              <button onClick={handleSavePreferences}>Zapisz wybór</button>
              <button onClick={handleClosePreferences}>Anuluj</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
