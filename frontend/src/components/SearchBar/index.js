import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';
import API from '../../services/api.js';

import './styles.css';

const SearchBar = () => {
  const [titles, setTitles] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    API.get('titles')
      .then(res => setTitles(res.data));
  }, []);

  const selectOption = (id) => {
    history.push(`/title/${id}`);
  }

  return (
      <Autocomplete
        className='search-bar'
        clearOnEscape
        autoHighlight
        inputValue={inputValue}
        onInputChange={(e, v) => e && e.type === 'change'? setInputValue(v): setInputValue('')}
        options={titles}
        onChange={(e,option)=> option && selectOption(option.id)}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <div className='input-option'>
            <img className='option-img' src={option.image}/>
            <span className='option-label'>{option.name}</span>
          </div>
        )}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} placeholder='Buscar título'/>
          </div>
        )}
      />
  );
}
export default SearchBar;