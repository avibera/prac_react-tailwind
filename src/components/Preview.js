import React from "react";
import { postDetails } from './store/store'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PreviewCard = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.formData);

    const handleClick = () => {
        dispatch(postDetails(data))
        toast.success('Form submitted successfully!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
        });
    };
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-slate-500">
            {/* <img src={imageUrl} alt={title} className="w-full" /> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <span className="text-lg text-gray-700 font-semibold">
                        First Name:
                    </span>{" "}
                    {data?.introductionData?.firstName}
                </div>
                <div className="font-bold text-xl mb-2">
                    <span className="text-lg text-gray-700 font-semibold">
                        Last Name:
                    </span>{" "}
                    {data?.introductionData?.lastName}
                </div>
                <p className="font-semibold text-base mt-3">
                    <span className="text-sm text-gray-700 font-semibold">About: </span>{" "}
                    {data?.aboutData?.about}{" "}
                </p>
                <p className="font-semibold text-base">
                    <span className="text-sm text-gray-700 font-semibold">Email:</span>{" "}
                    {data?.introductionData?.email}
                </p>

                <p className="font-semibold text-base mt-2">
                    <span className="text-sm text-gray-700 font-semibold">
                        Contact No.:
                    </span>{" "}
                    {data?.introductionData?.contactNo}
                </p>
                <p className="font-semibold text-base">
                    <span className="text-sm text-gray-700 font-semibold">Gender:</span>{" "}
                    {data?.aboutData?.gender}
                </p>
                <p className="font-semibold text-base mt-2">
                    <span className="text-sm text-gray-700 font-semibold">
                        interests:
                    </span>{" "}
                    {data?.aboutData?.interests[0]}, {data.aboutData.interests[1]}{" "}
                </p>
                <p className="font-semibold text-base">
                    <span className="text-sm text-gray-700 font-semibold">Location</span>{" "}
                    {data?.aboutData.location?.value}{" "}
                </p>

                <div className="justify-center items-center text-center">
                    <div
                        className="bg-slate-600 mx-24 py-2 mt-8 text-white rounded-lg cursor-pointer"
                        onClick={handleClick}
                    >
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewCard;
