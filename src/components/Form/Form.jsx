import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SideBar from '../SideBar/SideBar';
import PersonalDetails from '../Page1/PersonalDetails';
import { personalSchema } from '../Page1/PersonalDetails';
import { addressSchema } from '../Page2/AddressDetails';
import AddressDetails from '../Page2/AddressDetails';

const Form = ({ setIsSubmitted, setFormData }) => {
  const [step, setStep] = useState(1);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(step === 1 ? personalSchema : addressSchema),
  });

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setFormData((prevData) => ({ ...prevData, ...data })); // Store data from both steps
      setIsSubmitted(true);
    }
  };

  return (
    <div className='main'>
      <SideBar />
      <div className="right">
        {step === 1 && (
          <PersonalDetails control={control} onSubmit={handleSubmit(onSubmit)} />
        )}
        {step === 2 && (
          <AddressDetails control={control} onSubmit={handleSubmit(onSubmit)} />
        )}
      </div>
    </div>
  );
};

export default Form;
