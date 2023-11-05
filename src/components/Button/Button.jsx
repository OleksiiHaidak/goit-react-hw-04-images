import React from "react";
import css from 'components/Button/Button.module.css';

const Button = ({onClick}) => {
  return (
    <div className={css.ButtonContainer}>
         <button type="button" onClick={onClick} className={css.Button}>Load more</button>
        </div>
  );
};

export default Button;