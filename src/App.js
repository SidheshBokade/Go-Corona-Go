// main file containing all the functionalities 


import React, { Component, Fragment } from 'react'
import { Cards, Chart, CountryPicker, Loader, Footer, Guidelines, News } from './components' //good method of taing data from all the components 
import styles from './App.module.css'; //Global styles  for all 
import { fetchData, fetchIndianData, fetchIndianStateData, fetchNews } from './api' //fetching the news form all the three api 
import covid from './assets/covid3.png' //covid logo 



export default class App extends Component {
    _isMounted = false;

    state = {
        data: {},
        country: '',
        isLoading: true,
        isIndia: false,
        indianData: {},
        news: []
    }

    async componentDidMount() {
        this._isMounted = true;
        const fetchedData = await fetchData();

        if (this._isMounted) {
            this.setState({ data: fetchedData })
            this.setState({ isLoading: false })

            const fetchedNews = await fetchNews()
            try {
                this.setState({ news: fetchedNews })
            } catch (error) {
                console.log(error);

            }


        }
    }
    async componentDidUpdate(prevProps, prevState) {
        // const fetchedIndianData = await fetchIndianData();
        // console.log(fetchedIndianData);
        // this.setState({ indianData: fetchedIndianData })
        if (prevState.isIndia !== this.state.isIndia) {
            const fetchedIndianData = await fetchIndianData();
            this.setState({ indianData: fetchedIndianData })
        }


    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    handleCountryChange = async (country) => {
        if (this.state.isIndia) {
            const fetchedIndianData = await fetchIndianStateData(country);
            this.setState({ indianData: fetchedIndianData })
        }
        else {
            const fetchedData = await fetchData(country);
            this.setState({ data: fetchedData, country: country })
        }

    }

    handleIndiaToggle = async () => {
        const fetchedNews = await fetchNews(!this.state.isIndia)
        this.setState({ news: fetchedNews })


    }


    render() {
        const { data, country, isIndia, indianData, news } = this.state;


        return (
            <div className={styles.container}>
                {this.state.isLoading ? (<Loader></Loader>) : (<Fragment>
                    <div className={styles.headWrapper}>
                        {/* <div className={styles.test}></div> */}
                        <img src={covid} alt="covid"></img>
                        <div className={styles.toggle}>
                            <input type="checkbox" id="switch" onClick={() => {
                                this.setState({ isIndia: !isIndia });
                                this.handleIndiaToggle()

                            }} ></input><label htmlFor="switch">Toggle</label>
                            <h6>India</h6>
                        </div>
                    </div>
                    <Cards data={isIndia ? indianData : data} isIndia={isIndia} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} isIndia={isIndia} />
                    <Chart data={isIndia ? indianData : data} country={country} isIndia={isIndia} />
                    {this.state.news ? (<News isIndia={isIndia} news={news}  ></News>
                    ) : (null)}
                    <Guidelines></Guidelines>
                    <Footer></Footer>
                </Fragment>)}
            </div>
        )
    }
}