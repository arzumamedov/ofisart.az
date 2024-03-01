import React from 'react'
import './AboutUs.scss'
import { useTranslation } from 'react-i18next';
function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <div className='aboutUsTop'>
        <div className='aboutUsTopLeft'><img src="https://www.zivella.com/s/2636/i/kulturumuz-1.jpg" alt="" /></div>
        <div className='aboutUsTopRight'>
          <h3>{t('who')}</h3>
          <p>{t('whodesc')}</p>
        </div>
      </div>
      <div className='aboutUsBottom'>
        <div className='aboutUsBottomLeft'><h3>{t('manifest')}</h3>
          <p>{t('manifestdesc')}<br />
            <ol>
              <li>{t('manifestfirst')}.</li>
              <li>{t('manifestsecond')}</li>
              <li>{t('manifestthird')}</li>
              <li>{t('manifestfourth')}</li>
              <li>{t('manifestfifth')}</li>
            </ol>
          </p></div>
        <div className='aboutUsBottomRight'>
          <img src="https://www.zivella.com/s/2636/i/kulturumuz-2.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default AboutUs