import React from 'react'
import Layout from '../components/Layout'
import DonateBtn from '../components/DonateBtn'

export default function Home() {
  return (
    <Layout title="Art Translated for Movements">
      <div className="body">
        Have fun, be smarter, challenge yourself, open up your eyes to a new
        world, communicate with people over time, impress your friends and learn
        an entirely new language.
      </div>

      <div className="body">
        Welcome to a new world. Try our new mobile apps leveraging new
        technologies and mobile capabilities.
      </div>
      <div className="body"></div>

      <div className="flex-btns">
        <DonateBtn
          txt="Google Pay"
          href="https://support.actblue.com/donors/contributions/how-do-i-use-google-pay-to-donate/"
        />
        <DonateBtn
          txt="Paypal"
          href="https://support.actblue.com/donors/contributions/how-do-i-use-google-pay-to-donate/"
        />
      </div>
    </Layout>
  )
}
