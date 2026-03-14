import React from 'react'

import { Helmet } from 'react-helmet'

import './desktop1.css'

const Desktop1 = (props) => {
  return (
    <div className="desktop1-container">
      <Helmet>
        <title>Business card printing (TSSCA 2025 Event1)</title>
        <meta name="description" content="活動當天用-明信片列印" />
        <meta
          property="og:title"
          content="Business card printing (TSSCA 2025 Event1)"
        />
        <meta property="og:description" content="活動當天用-明信片列印" />
        <link
          rel="canonical"
          href="https://tssca2025activity1.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://tssca2025activity1.teleporthq.app/"
        />
      </Helmet>
      <div className="desktop1-thq-desktop1-elm">
        <div className="desktop1-thq-frame1-elm">
          <h1 className="desktop1-text">
            <span>{/*locale-text_EbafKK*/}</span>
          </h1>
          <button
            type="button"
            className="ifa-print button DEVONLYdownloadPDF inline-icon-fa ifa-solid"
          >
            <span>{/*locale-text_lqLYFW*/}</span>
          </button>
        </div>
        <div className="desktop1-thq-frame3-elm">
          <div className="desktop1-thq-frame4-elm">
            <div className="notyet inline-icon-fa ifa-circle-left ifa-solid desktop1-thq-frame6-elm"></div>
          </div>
          <div className="mainBC desktop1-thq-frame2-elm"></div>
          <div className="desktop1-thq-frame5-elm">
            <div className="notyet inline-icon-fa ifa-solid ifa-circle-right desktop1-thq-frame7-elm"></div>
          </div>
        </div>
        <div className="desktop1-thq-frame8-elm">
          <div
            id="NEEDTODISPNONEAFERDYNAMICRENDER"
            className="desktop1-thq-frame9-elm"
          >
            <div className="desktop1-thq-frame10-elm"></div>
            <div className="desktop1-thq-frame12-elm"></div>
            <div className="desktop1-thq-frame11-elm">
              <input
                type="text"
                placeholder="placeholder"
                className="input desktop1-textinput"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Desktop1
