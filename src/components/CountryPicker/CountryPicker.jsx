import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries ,fetchStates} from '../../api'



const CountryPicker = ({ handleCountryChange , isIndia}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    const [fetchedStates , setFetchedStates]=useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
        setFetchedStates(await fetchStates());
        setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);


    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                   {isIndia?( ""):( <option value="">global</option>) }
                    ({isIndia?(fetchedStates.map((states, i) => <option key={i} value={states}>{states}</option>)):(fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>))})
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;
