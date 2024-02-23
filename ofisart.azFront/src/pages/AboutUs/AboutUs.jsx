import React from 'react'
import './AboutUs.scss'
function AboutUs() {
  return (
    <>
      <div className='aboutUsTop'>
        <div className='aboutUsTopLeft'><img src="https://www.zivella.com/s/2636/i/kulturumuz-1.jpg" alt="" /></div>
        <div className='aboutUsTopRight'>
          <h3>Biz Kimik?</h3>
          <p>OfisArt 2020-ci ildə qurulmuş mebel brendidir və missiyamız iş yerlərinizi və ofislərinizi sənət və estetika ilə bir araya gətirərək daha funksional, rahat və göz oxşayan etməkdir.

            Müştəri məmnuniyyəti bizim prioritetimizdir və biz keyfiyyət standartlarımızı buna uyğun olaraq yüksək səviyyədə saxlayırıq. OfisArt olaraq müştərilərimizə unikal mebel təcrübələri təqdim etməyi və hər bir məhsulumuzla uzunmüddətli keyfiyyətə zəmanət verməyi hədəfləyirik.
            Ofis mebellərindən tutmuş konfrans zalı tənzimləmələrinə, erqonomik stullardan tutmuş saxlama həllərinə qədər geniş çeşidli məhsullarımızla iş yerinizi yenidən yaratmağınıza kömək edirik. OfisArt ilə iş yerlərinizi daha funksional, daha qəşəng və daha rahat edin.</p>
        </div>
      </div>
      <div className='aboutUsBottom'>
        <div className='aboutUsBottomLeft'><h3>Manifestimiz</h3>
          <p>OfisArt komandası olaraq iş yerlərini və ofisləri təkcə mebel deyil, sənət əsərinə çevirmək vizyonu ilə yola çıxdıq. Mebel sadəcə bir əşya deyil, iş yerlərinizin xarakterini əks etdirən və estetik ifadə ilə funksionallıq arasında mükəmməl tarazlığı təmin edən bir sənət növüdür. <br />
          <ol>
            <li>Biz estetika və funksiyanı birləşdiririk.</li>
            <li>Biz sənəti iş yerlərinə gətirməklə yaradıcılığı dəstəkləyirik.</li>
            <li>Müştəri məmnuniyyəti bizim prioritetimizdir.</li>
            <li>Müasir dizayn və keyfiyyətli istehsalımızla seçilirik.</li>
            <li>Ofislərinizi daha rahat və səmərəli etmək üçün buradayıq.</li>
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