import React from 'react';
import classes from './ProductPreview.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';

const ProductPreview = (props) => {
return(
    <div className={classes.ProductPreview}>

    <img src={props.currentPreviewImage} alt="Product Preview"></img>
    {
        props.currentSelectedFeature === 1 ? 
         <div className={classes.TimeSection}>
        <p >{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
        
        </div> 
        :
        <div className={classes.HeartBeatSection}>
        <FontAwesomeIcon className={classes.MyIcon} icon={faHeartPulse} />
      
      <p >78</p>
      
      
          </div>
      

        
    }

    </div>
);
}
export default ProductPreview;