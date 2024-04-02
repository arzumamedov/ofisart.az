import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import "./DetailPage.scss";
import { Helmet } from "react-helmet";
function DetailPage() {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  //   const [zoomed, setZoomed] = useState(false);
  //   const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    (`https://ofisart-api.vercel.app/api/product/id/${id}`)
      .then((res) => res.json())
      .then((api) => {
        setDetail(api);
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Deatil</title>
      </Helmet>
      <div className="detail">
        <div className="detailLeft">
          <Slider image={detail?.image} />
        </div>
        <div className="detailRight">
          <div className="name">{detail.name} </div>
          <div className="description">{detail.description}</div>
          <div className="service">
            <div className="spanCountry">
              <span>İstehsalçı ölkə:</span>{" "}
              <div className="country"> {detail.country}</div>
            </div>
            <div className="spanDelivery">
              <span>Çatdırılma:</span>{" "}
              <div className="delivery"> {detail.delivery}</div>
            </div>
            <div className="spanModel">
              <span>Model:</span> <div className="model"> {detail.name}</div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailPage

