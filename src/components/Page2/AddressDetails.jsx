// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Inputs from "../Page1/Inputs";
// import Button from "../Page1/Button";

// export const addressSchema = yup.object().shape({
//   streetAddress: yup.string().required("Address is required"),
//   building: yup.string().required("Building is required"),
//   country: yup.string().required("Country is required"),
//   city: yup.string().required("City is required"),
// });

// const AddressDetails = (control, onSubmit) => {
//   return (
//     <div className="page2">
//       <div className="header">
//         <h1>Address Details</h1>
//         <p>Required fields *</p>
//       </div>
//       <form action="SUBMIT" className="input-section">
//         <div>
//           <Controller
//             name="streetAddress"
//             control={control}
//             defaultValue=""
//             render={({ field }) => <Inputs label="Street Address" {...field} />}
//           />
//         </div>
//         <div>
//           <Controller
//             name="building"
//             control={control}
//             defaultValue=""
//             render={({ field }) => <Inputs label="Apt, Building" {...field} />}
//           />
//         </div>
//         <div>
//           <Controller
//             name="country"
//             control={control}
//             defaultValue=""
//             render={({ field }) => <Inputs label="Country" {...field} />}
//           />
//         </div>
//         <div>
//           <Controller
//             name="city"
//             control={control}
//             defaultValue=""
//             render={({ field }) => <Inputs label="City" {...field} />}
//           />
//         </div>
//         <Button btntext="SUBMIT" type="submit"/>
//       </form>
//     </div>
//   );
// };

// export default AddressDetails;




import React from "react";
import * as yup from "yup";

import { Controller } from "react-hook-form";
import Inputs from "../Page1/Inputs";
import Button from "../Page1/Button";

export const addressSchema = yup.object().shape({
  streetAddress: yup.string().required("Address is required"),
  building: yup.string().required("Building is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
});


const AddressDetails = ({ control, onSubmit }) => {
  return (
    <div className="page2">
      <div className="header">
        <h1>Address Details</h1>
        <p>Required fields *</p>
      </div>
      <form className="input-section" onSubmit={onSubmit}>
        <div>
          <Controller
            name="streetAddress"
            control={control}
            defaultValue=""
            render={({ field }) => <Inputs label="Street Address" {...field} />}
          />
        </div>
        <div>
          <Controller
            name="building"
            control={control}
            defaultValue=""
            render={({ field }) => <Inputs label="Apt, Building" {...field} />}
          />
        </div>
        <div>
          <Controller
            name="country"
            control={control}
            defaultValue=""
            render={({ field }) => <Inputs label="Country" {...field} />}
          />
        </div>
        <div>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => <Inputs label="City" {...field} />}
          />
        </div>
        <Button btntext="SUBMIT" type="submit" />
      </form>
    </div>
  );
};

export default AddressDetails;
