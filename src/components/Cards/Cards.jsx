import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';



export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate, lastupdatedtime }, isIndia }) {


    if (!confirmed || confirmed === undefined) {
        return 'Loading..'
    }

    return (
        <div className={styles.container}>
            <div className={cx(styles.card, styles.infected)}>
                <h3 >Infected</h3>
                <h5 ><CountUp
                    start={0}
                    end={(isIndia ? parseInt(confirmed) : confirmed.value)}
                    duration={1.5}
                    seperator="," /></h5>
                <h4>{isIndia ? (lastupdatedtime) : (new Date(lastUpdate).toDateString())}</h4>
                <h2 >Number of confirmed cases of covid-19</h2>

            </div>

            <div className={cx(styles.card, styles.deaths)}>

                <h3 >Deaths</h3>
                <h5 ><CountUp
                    start={0}
                    end={(isIndia ? parseInt(deaths) : deaths.value)}
                    duration={1.5}
                    seperator="," /></h5>
                <h4>{isIndia ? (lastupdatedtime) : (new Date(lastUpdate).toDateString())}</h4>
                <h2 >Number of deaths due to covid-19</h2>

            </div>

            <div className={cx(styles.card, styles.recovered)}>

                <h3 >Recovered</h3>
                <h5 ><CountUp
                    start={0}
                    end={(isIndia ? parseInt(recovered) : recovered.value)}
                    duration={1.5}
                    seperator="," /></h5>
                <h4>{isIndia ? (lastupdatedtime) : (new Date(lastUpdate).toDateString())}</h4>
                <h2 >Number of recovered cases of covid-19</h2>

            </div>




        </div >
    )
}
