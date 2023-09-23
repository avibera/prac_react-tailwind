import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Form,
  Input,
  Label,
} from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {aboutData} from './store/store'
import { useDispatch } from "react-redux";

const IntroductionForm = ({setActiveTab}) => {
 
  const dispatch = useDispatch()

  const options = ["Reading Books", "Watching Movies", "Others"];
  const cityOptions = [
    { value: "city1", label: "City 1" },
    { value: "city2", label: "City 2" },
    { value: "city3", label: "City 3" },
  ];
  const defaultValues = {
    gender: "",
    interests: [],
    location: { },
    about: "",
  };

  const schema = Yup.object().shape({
    gender: Yup.string().required(),
    interests: Yup.array()
      .min(2, "Select at least 2 interests")
      .required("Select at least 2 interests"),
    location: Yup.object().shape({
      value: Yup.string().required(),
      label: Yup.string().required(),
    }),
    about: Yup.string()
      .max(100, "About should not exceed 100 characters")
      .required(),
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
      setActiveTab(3)
      dispatch(aboutData(data))
    } else {
      console.log("Form has validation errors");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5 p-6 bg-white shadow-md rounded-md">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <Label
            for="task-desc"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Gender<span className="text-red-500">*</span>
          </Label>
          <div className="flex flex-row">
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <input
                    className="mx-2"
                    type="radio"
                    {...field}
                    value="male"
                  />
                  Male
                  {errors?.gender && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <input
                    className="mx-2"
                    type="radio"
                    {...field}
                    value="male"
                  />
                  Female
                </div>
              )}
            />
          </div>
        </div>

        <div className="mb-2">
          <Label
            for="task-desc"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Interestes<span className="text-red-500">*</span>
          </Label>
          {options.map((option) => (
            <label key={option}>
              <Controller
                name="interests"
                control={control}
                defaultValue={[]}
                render={({ field }) => (
                  <div>
                    <input
                      className=""
                      type="checkbox"
                      {...field}
                      value={option}
                      checked={field.value.includes(option)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          field.onChange([...field.value, option]);
                        } else {
                          field.onChange(
                            field.value.filter((item) => item !== option)
                          );
                        }
                      }}
                    />
                  </div>
                )}
              />{" "}
              {option}
            </label>
          ))}
          {errors?.interests && (
            <p className="text-red-500 text-sm mt-1">
              {errors.interests.message}
            </p>
          )}
        </div>
        <div className="mb-1">
          <Label
            for="task-desc"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Location<span className="text-red-500">*</span>
          </Label>
          <Controller
            name="location"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Select
                {...field}
                options={cityOptions}
                isSearchable={true}
                placeholder="Select a location"
              />
            )}
          />
           {errors?.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>
        <div className="mb-1">
          <Label
            for="task-desc"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            About<span className="text-red-500">*</span>
          </Label>
          <Controller
            name="about"
            control={control}
            render={({ field }) => (
              <div>
                <Input
                  className={`border rounded-md py-2 px-3 w-full ${
                    errors.about ? "border-red-600" : "border-gray-300"
                  }`}
                  type="text"
                  id="about"
                  placeholder="Describe yourself"
                  invalid={!!errors.about}
                  {...field}
                />
                {errors.about && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.about.message}
                  </p>
                )}
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
  );
};

export default IntroductionForm;
