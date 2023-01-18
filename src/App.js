import React from 'react'
import styles from './Style'
import { Navbar, Hero, Billing, Business, CardDeal, Button, Client, CTA, FeedbackCard, Footer, GetStarted, Stats, sandeep, Testimonials, } from './Components/Index'


const App = () => {
  return (
    <>

      <div className='bg-primary w-full overflow-hidden'>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <sandeep/>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Client/>
            <CTA/>
            <Footer/>
          </div>
        </div>





      </div>
    </>
  )
}

export default App
