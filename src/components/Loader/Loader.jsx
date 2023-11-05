import React from "react";
import { Hourglass } from 'react-loader-spinner'
import css from 'components/Loader/Loader.module.css';


const Loader = () => {
  return (
    <div className={css.Loader}>
      <Hourglass
  type="Puff"
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
/>
    </div>
  );
};

export default Loader;
