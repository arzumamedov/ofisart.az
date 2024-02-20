// import React, { useState } from 'react';

// function ScalableElement() {
//   const [scale, setScale] = useState(1);

//   const handleMouseMove = (event) => {
//     const scaleAmount = 1.5; // Change this value to adjust the scaling
//     const offsetX = event.nativeEvent.offsetX;
//     const offsetY = event.nativeEvent.offsetY;

//     const transformValue = `translate(-${offsetX}px, -${offsetY}px) scale(${scaleAmount}) translate(${offsetX}px, ${offsetY}px)`;
//     setScale(transformValue);
//   };

//   const resetScale = () => {
//     setScale(1);
//   };

//   return (
//     <div
//       style={{
//         width: '100px',
//         height: '100px',
//         backgroundColor: 'blue',
//         transform: scale,
//         transition: 'transform 0.3s ease',
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetScale}
//     />
//   );
// }

// export default ScalableElement;