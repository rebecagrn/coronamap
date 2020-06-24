import React, { useState, useEffect } from "react";
import { nativeSelect, formControl, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {
  return (
    <FormControl className={StyleSheet.formControl}>
      <nativeSelect>
        <option value="global">Global</option>
      </nativeSelect>
    </FormControl>
  )
}

export default CountryPicker;