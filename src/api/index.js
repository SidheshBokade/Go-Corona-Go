import axios from 'axios'; //for fetching the api 
require('dotenv').config(); //for better envorinmenet variables 
const api = process.env.REACT_APP_NEWS_API; //for fetching news for an api news api 


const newsUrl = `https://gnews.io/api/v3/search?q=corona&token=${api}` //Api band hai (News api).
const url = "https://covid19.mathdro.id/api"; //api for golabal data 
const urlIndia = "https://api.covid19india.org/data.json"; //api for country wise data 

//fetching the country wise data
export const fetchData = async (country) => { //async await promisies is used to fetch

    let changeableUrl = url
    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try { //for types of data basically an api containes lots of data but we are intreseted in confirmed, recovered, deaths, lastUpdate
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) { //else catch error 
        console.error();

    }
}
//fetching daily data country wise data
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({ //map over all the three data's 
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData;
    } catch (error) {
        console.error();

    }
}
//this is the functionality of the hover tab like we can hover to any contry and state get the data 
export const fetchCountries = async () => {

    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.error();

    }
}

//to fetch the News of covid19
export const fetchNews = async () => {//async await promisies is used to fetch

    try {
        const { data: { articles } } = await axios.get(`${newsUrl}`);
        return articles.map((news) => news);
    } catch (error) {
        console.log(error.response);

    }

    // try {
    //     return articles.map((news) => news);
    //     console.log(articles);
    // } catch (error) {
    //     console.error();

    //}
}
//fetching the State wise data
export const fetchIndianData = async () => {
    try {
        const { data: { statewise } } = await axios.get(`${urlIndia}`);
        //console.log ( statewise[0].confirmed, statewise[0].recovered, statewise[0].deaths );
        //for types of data basically an api containes lots of data but we are intreseted in confirmed, recovered, deaths, lastUpdate
        const { confirmed, recovered, deaths, lastupdatedtime } = statewise[0];
        return ({ confirmed, recovered, deaths, lastupdatedtime });
    } catch (error) { //else catch the error 
        console.error();

    }
}
//fetching daily data indian states wise data
export const fetchStates = async () => {
    try {
        const { data: { statewise } } = await axios.get(`${urlIndia}`);

        return (statewise.map((states) => states.state));
    } catch (error) {
        console.error();

    }
}

export const fetchIndianStateData = async (country) => {
    try {
        const { data: { statewise } } = await axios.get(`${urlIndia}`);
        for (let index = 0; index < statewise.length; index++) {//for all the 28 states and 7 UT
            if (statewise[index].state === country) {
                const obj = {
                    confirmed: statewise[index].confirmed, //countup will be start from 0 because index is 0 in country
                    recovered: statewise[index].recovered,
                    deaths: statewise[index].deaths,
                    lastupdatedtime: statewise[index].lastupdatedtime,
                    state: statewise[index].state
                }


                return (obj);

            }

        }
    } catch (error) {
        console.error();

    }
}

