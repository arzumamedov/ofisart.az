import React from 'react'
import './Gallery.scss'
import { useNavigate } from 'react-router-dom'
function Gallery() {
    const navigation = useNavigate()
    return (
        <>
            <div className='gallery'>
                <div className='galleryImg'>
                    <img src="https://www.zivella.com/s/2636/i/luna-calisma-koltugu-8-2-2024-web-ana-gorsel.jpg" alt="" onClick={() => { navigation('/detail/65d261d4716bda8ffb394895') }} />
                    <img src="https://www.zivella.com/s/2636/i/19-09-2023-kanepeler-ana-gorsel-ren.jpg" alt="" onClick={() => { navigation('/detail/65d264d1716bda8ffb3948ab') }} />
                    <img src="https://www.zivella.com/s/2636/i/19-09-2023-toplanti-masasi-ana-gorsel-mass.jpg" alt="" onClick={() => { navigation('/detail/65d6415ccfd494d162959212') }} />
                    <img src="https://www.zivella.com/s/2636/i/19-09-2023-calisma-masalari-ana-gorsel-lenta.jpg" alt="" onClick={() => { navigation('/detail/65d25913716bda8ffb394809') }} />
                </div>
                <div className='galleryImg'>
                    <img src="https://www.zivella.com/s/2636/i/19-09-2023-az-calisma-koltugu-ana-gorsel-blaze.jpg" alt="" onClick={() => { navigation('/detail/65d5f6f50b430e91300a23dd') }} />
                    <img src="https://www.zivella.com/s/2636/i/19-09-2023-kanepeler-ana-gorsel-poz.jpg" alt="" onClick={() => { navigation('/detail/65d5f4de0b430e91300a23a7') }} />
                    <img src="https://www.zivella.com/s/2636/i/19-09-2023-toplanti-masasi-ana-gorsel-sunny.jpg" alt="" onClick={() => { navigation('/detail/65d25a52716bda8ffb394823') }} />
                    <img src="https://www.zivella.com/s/2636/i/19-09-2023-calisma-masalari-ana-gorsel-mio.jpg" alt="" onClick={() => { navigation('/detail/65d5fa0f0b430e91300a23eb') }} />
                </div>
                <div className='galleryImg'>
                    <img src="https://www.zivella.com/s/2636/i/cross-sef-calisma-koltugu-16-08-23-web-ana-gorsel.jpg" alt="" onClick={() => { navigation('/detail/65d5f7620b430e91300a23e2') }} />
                    <img src="https://www.zivella.com/s/2636/i/19-09-2023-kanepeler-ana-gorsel-phase.jpg" alt="" onClick={() => { navigation('/detail/65d2654b716bda8ffb3948b4') }} />
                    <img src="https://www.zivella.com/s/2636/i/19-09-2023-toplanti-masasi-ana-gorsel-jet.jpg" alt="" onClick={() => { navigation('/detail/65d25afe716bda8ffb39482c') }} />
                    <img src="https://www.zivella.com/s/2636/i/19-09-2023-calisma-masalari-ana-gorsel-demo.jpg" alt="" onClick={() => { navigation('/detail/65d5fa750b430e91300a23f2') }} />
                </div>
            </div>
        </>
    )
}

export default Gallery