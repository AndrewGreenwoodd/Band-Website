import styles from './ContactForm.module.css';
import useInput from '../hooks/use-input';
import Modal from '@/UI/Modal';
import { useState } from 'react';
import { useLanguage } from '@/store/language';

const isEmpty = (value: string) => value.trim() !== '';
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const ContactForm: React.FC = () => {
  const { selectedLanguage } = useLanguage();
  const [isSent, setIsSent] = useState(false);

  const closeModal = () => {
    setIsSent(false);
  };

  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetNameInput,
  } = useInput(isEmpty);

  const {
    value: enteredWishes,
    hasError: wishesInputHasError,
    valueChangeHandler: wishesChangedHandler,
    inputBlurHandler: wishesBlurHandler,
    isValid: enteredWishesIsValid,
    reset: resetWishInput,
  } = useInput(isEmpty);

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailInputBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = useInput((value) => emailRegex.test(value));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredWishesIsValid) {
    formIsValid = true;
  }

  const confirmContactHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid || !enteredWishesIsValid) {
      return;
    }

    await fetch('https://ecommerce-8d80b-default-rtdb.europe-west1.firebasedatabase.app/reviews.json', {
      method: 'POST',
      body: JSON.stringify({
        user: enteredName,
        email: enteredEmail,
        reviewText: enteredWishes,
      }),
    });

    resetNameInput();
    resetEmailInput();
    resetWishInput();
    setIsSent(true);
  };

  const textInputClass = nameInputHasError ? styles.invalid : '';
  const emailInputClass = emailInputHasError ? styles.invalid : '';
  const wishesInputClass = wishesInputHasError ? styles.invalid : '';

  const modalContent = (
    <div className={styles.wishesModal}>
      <p>{selectedLanguage === 'en' ? 'Successfully sent' : 'Успішно відправлено'}</p>
      <button type="button" onClick={closeModal}>
        {selectedLanguage === 'en' ? 'Close' : 'Закрити'}
      </button>
    </div>
  );

  return (
    <>
      {isSent && <Modal onClose={closeModal}> {modalContent} </Modal>}
      <div className={styles.contactContainer}>
        <h1 className={styles.heading}>{selectedLanguage === 'en' ? 'Send us your thoughts' : 'Відправте ваші побажання'}</h1>
        <form onSubmit={confirmContactHandler}>
          <label htmlFor="name" className={styles.contactFormLabel}>{selectedLanguage === 'en' ? 'Your name' : "Ваше ім'я "}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            className={textInputClass}
          />
          {nameInputHasError && (
            <p className={styles.errorText}>
              {selectedLanguage === 'en' ? 'Name must not be empty' : 'Поле не повинно бути пустим'}
            </p>
          )}
          <label htmlFor="email" className={styles.contactFormLabel}>{selectedLanguage === 'en' ? 'Your email' : 'Ваш email '}</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={emailChangedHandler}
            value={enteredEmail}
            onBlur={emailInputBlurHandler}
            className={emailInputClass}
          />
          {emailInputHasError && (
            <p className={styles.errorText}>
              {selectedLanguage === 'en' ? 'Please enter a valid email' : 'Будь ласка введіть дійсний email'}
            </p>
          )}
          <label htmlFor="wishings" className={styles.contactFormLabel}>{selectedLanguage === 'en' ? 'Write your wishes here' : 'Ваші побажання '}</label>
          <textarea
            id="wishings"
            name="wishings"
            required
            className={wishesInputClass}
            value={enteredWishes}
            onChange={wishesChangedHandler}
            onBlur={wishesBlurHandler}
          ></textarea>
          {wishesInputHasError && (
            <p className={styles.errorText}>
              {selectedLanguage === 'en' ? 'Wishes must not be empty' : 'Поле не повинно бути пустим'}
            </p>
          )}
          <button type="submit" disabled={!formIsValid} className={styles.reviewFormButton}>
            {selectedLanguage === 'en' ? 'Submit' : 'Відправити'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;