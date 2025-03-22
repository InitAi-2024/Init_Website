import React from 'react';
import timeline_img from './timeline_img.png'; 

const Timeline = () => {
  return (
    <div className="w-full h-79 mt-10">
      <img
        src={timeline_img}
        alt="Timeline"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Timeline;





// import React from 'react';

// const Timeline = () => {
//   return (
//     <div className="container-fluid blue-bg">
//       <div className="container">
//         <h2 className="pb-3 pt-2">Vertical Left-Right Timeline</h2>

//         {/* First section */}
//         <div className="row align-items-center how-it-works">
//           <div className="col-2 text-center bottom">
//             <div className="circle">1</div>
//           </div>
//           <div className="col-6">
//             <h5>Fully Responsive</h5>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//             </p>
//           </div>
//         </div>

//         {/* Path between 1-2 */}
//         <div className="row timeline">
//           <div className="col-2">
//             <div className="corner top-right"></div>
//           </div>
//           <div className="col-8">
//             <hr />
//           </div>
//           <div className="col-2">
//             <div className="corner left-bottom"></div>
//           </div>
//         </div>

//         {/* Second section */}
//         <div className="row align-items-center justify-content-end how-it-works">
//           <div className="col-6 text-right">
//             <h5>Using Bootstrap</h5>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>
//           </div>
//           <div className="col-2 text-center full">
//             <div className="circle">2</div>
//           </div>
//         </div>

//         {/* Path between 2-3 */}
//         <div className="row timeline">
//           <div className="col-2">
//             <div className="corner right-bottom"></div>
//           </div>
//           <div className="col-8">
//             <hr />
//           </div>
//           <div className="col-2">
//             <div className="corner top-left"></div>
//           </div>
//         </div>

//         {/* Third section */}
//         <div className="row align-items-center how-it-works">
//           <div className="col-2 text-center top">
//             <div className="circle">3</div>
//           </div>
//           <div className="col-6">
//             <h5>Now with Pug and Sass</h5>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;
