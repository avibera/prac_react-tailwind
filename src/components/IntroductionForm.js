import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Modal, ModalBody, Button, Form, Input, Label, FormFeedback } from 'reactstrap'
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {introductionData} from './store/store'
import { useDispatch } from "react-redux";

const IntroductionForm = ({setActiveTab}) => {

  const dispatch = useDispatch()

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    contactNo: ''
  }
 
  const schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    contactNo: Yup.string().required("Contact No is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      setActiveTab(2)
      dispatch(introductionData(data))
    } else {
     
      console.log('Form has validation errors');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5 p-6 bg-white shadow-md rounded-md">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-1'>
          <Label for='task-desc' className="block text-gray-700 text-sm font-bold mb-2">
            First Name<span className="text-red-500">*</span>
          </Label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  className={`border rounded-md py-2 px-3 w-full ${
                    errors.firstName ? 'border-red-600' : 'border-gray-300'
                  }`}
                  type="text"
                  id='firstName'
                  placeholder="Enter first name"
                  invalid={!!errors.firstName}
                  {...field}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
              </div>
            )}
          />
        </div>
        <div className='mb-1'>
          <Label for='task-desc' className="block text-gray-700 text-sm font-bold mb-2">
            Last Name<span className="text-red-500">*</span>
          </Label>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  className={`border rounded-md py-2 px-3 w-full ${
                    errors.lastName ? 'border-red-600' : 'border-gray-300'
                  }`}
                  type="text"
                  id='lastName'
                  placeholder="Enter first name"
                  invalid={!!errors.lastName}
                  {...field}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
              </div>
            )}
          />
        </div>
        <div className='mb-1'>
          <Label for='task-desc' className="block text-gray-700 text-sm font-bold mb-2">
            Email<span className="text-red-500">*</span>
          </Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  className={`border rounded-md py-2 px-3 w-full ${
                    errors.email ? 'border-red-600' : 'border-gray-300'
                  }`}
                  type="text"
                  id='email'
                  placeholder="Enter first name"
                  invalid={!!errors.email}
                  {...field}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
              </div>
            )}
          />
        </div>
        <div className='mb-1'>
          <Label for='task-desc' className="block text-gray-700 text-sm font-bold mb-2">
           Contact Number<span className="text-red-500">*</span>
          </Label>
          <Controller
            name="contactNo"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  className={`border rounded-md py-2 px-3 w-full ${
                    errors.contactNo ? 'border-red-600' : 'border-gray-300'
                  }`}
                  type="text"
                  id='contactNo'
                  placeholder="Enter first name"
                  invalid={!!errors.contactNo}
                  {...field}
                />
                {errors.contactNo && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
              </div>
            )}
          />
        </div>
        
        <div className=" flex flex-row justify-end">
          <Button
            type="submit"
            className="bg-blue-500 px-5 py-2 text-white rounded-lg mt-4"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
          </div>
        </Form>
        </div>
    )
};

export default IntroductionForm;
