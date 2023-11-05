import React, {useState} from "react";
import Notiflix from 'notiflix';
import css from 'components/Searchbar/Searchbar.module.css';


const Searchbar = ({onSubmit}) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = evt => {
    const evtValue = evt.target.value.trim().toLowerCase();
    setInputValue(evtValue);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (inputValue.trim().toLowerCase() === '') {
    Notiflix.Notify.info('Please enter your request', {position: 'center-center', fontSize: '16px'});
    return;
  }
  onSubmit(inputValue);
  };


    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
      </header>
    );
};

export default Searchbar;