import React from 'react';
import TextField from "@mui/material/TextField";
import "./Personal Details.css";

const Inputs = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="text-fields">
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        inputRef={ref} // Forward the ref to the TextField
        {...props} // Spread the rest of the props to the TextField
      />
    </div>
  );
});

export default Inputs;
