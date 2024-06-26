import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import "./ProjectDetail.scss";
function ProjectDetail() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

//   const [zoomed, setZoomed] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch(`https://ofisart-az-api.vercel.app/api/project/id/${id}`)
      .then((res) => res.json())
      .then((api) => {
        setDetail(api);
      });
  }, [id]);

  return (
    <>
      <div className="projectDetail">
        <div className="detailLeft">
          <Slider image={detail?.image} />
          {/* <Slider image={`../../assets/ProjectImage/${detail?.image}`} /> */}
          {/* <ScalableElement>    */}
        </div>
        <div className="detailRight">
          <div className="name">{detail.name} </div>
          <div className="description">{detail.description}</div>
          <div className="service">
            <div className="spanCountry">
              <span>Məkan:</span>{" "}
              <div className="country"> {detail.location}</div>
            </div>

            {/* <div className="spanModel">
              <span>Model:</span> <div className="model"> {detail.name}</div>
            </div> */}

            <div></div>
          </div>
        </div>
        {/* <h1>salam</h1> */}
      </div>
    </>
  );
}

export default ProjectDetail;
