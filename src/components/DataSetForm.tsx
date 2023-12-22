"use client";
import Link from "next/link";
import { basename } from "path";
import React, { useContext } from "react";
import Select, { CSSObjectWithLabel } from "react-select";
import { AppContext } from "@/store/contexts/appContext";

const DataSetForm = () => {
  const { deviceWidth } = useContext(AppContext);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="pt-14 sm:pt-16 xl:pt-14 pb-20 sm:pb-32 px-8 sm:px-11 font-inter bg-white text-darkGreen flex flex-col gap-10 sm:gap-20 sm:w-[523px] xl:w-[406px]">
      <div className="">
        <h2 className="text-2xl sm:text-[40px] xl:text-[28px] font-bold mb-2">
          Free Dataset
        </h2>
        <p className="text-[9px] sm:text-base xl:text-xs font-sora ">
          Please fill out the form below and a TwoTensor team member will be in
          touch to help set up your trial.
        </p>
      </div>
      <div className="font-sora">
        <form action="" className="flex flex-col gap-8 sm:gap-12 xl:gap-8 ">
          <div>
            <label
              htmlFor=""
              className="font-bold text-[8px] sm:text-base xl:text-[10px] "
            >
              * BUSINESS EMAIL
            </label>
            <input
              type="email"
              className=" w-full h-8 sm:h-16 xl:h-10 border-[2px] border-[#49A1A1] rounded-lg sm:rounded-2xl outline-none px-2 sm:mt-2  xl:mt-0"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-bold text-[8px] sm:text-base xl:text-[10px]  "
            >
              * PHONE
            </label>
            <input
              className=" w-full h-8 sm:h-16  xl:h-10 border-[2px] border-[#49A1A1] rounded-lg sm:rounded-2xl outline-none px-2 sm:mt-2  xl:mt-0"
              type="text"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="font-bold text-[8px] sm:text-base xl:text-[10px]  "
            >
              * ROLE
            </label>
            <div className=" w-full h-8 sm:h-16  xl:h-10 border-[2px] border-[#49A1A1] rounded-lg sm:rounded-2xl outline-none px-2 sm:mt-2  xl:mt-0">
              <Select
                options={options}
                styles={{
                  control: (baseStyles, state) => ({
                    border: state.isFocused ? "none" : "none",
                    width: "100%",

                    height:
                      deviceWidth > 1280 ? 40 : deviceWidth > 640 ? 64 : 28,
                    overflowY: "hidden",
                    padding: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }),
                  indicatorsContainer: (baseStyles, state) => ({}),

                  valueContainer: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "60%",
                  }),
                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize:
                      deviceWidth > 1280 ? 10 : deviceWidth > 640 ? 16 : 8,
                  }),
                  dropdownIndicator: (baseStyles, state) => ({
                    ...baseStyles,
                    padding: deviceWidth > 640 ? 8 : 0,
                    height: deviceWidth > 640 ? 36 : 20,
                    width: deviceWidth > 640 ? 36 : 15,
                  }),
                  singleValue: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize: deviceWidth > 640 ? 114 : 10,
                  }),
                }}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor=""
              className="font-bold text-[8px] sm:text-base xl:text-[10px]  "
            >
              * HOW YOU FOUND US
            </label>
            <div className=" w-full h-8 sm:h-16  xl:h-10 border-[2px] border-[#49A1A1] rounded-lg sm:rounded-2xl outline-none px-2 sm:mt-2 xl:mt-0">
              <Select
                options={options}
                className="sm:text-base placeholder:text-[8px] sm:placeholder:text-base"
                styles={{
                  control: (baseStyles, state) => ({
                    border: state.isFocused ? "none" : "none",
                    width: "100%",
                    height:
                      deviceWidth > 1280 ? 40 : deviceWidth > 640 ? 64 : 28,
                    overflowY: "hidden",
                    padding: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }),
                  indicatorsContainer: (baseStyles, state) => ({
                    // ...baseStyles
                  }),

                  valueContainer: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "60%",
                  }),

                  placeholder: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize:
                      deviceWidth > 1280 ? 10 : deviceWidth > 640 ? 16 : 8,
                  }),
                  dropdownIndicator: (baseStyles, state) => ({
                    ...baseStyles,
                    padding: deviceWidth > 640 ? 8 : 0,
                    height: deviceWidth > 640 ? 36 : 20,
                    width: deviceWidth > 640 ? 36 : 15,
                  }),
                  singleValue: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize: 10,
                  }),
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className={`bg-darkGreen mt-2 w-[130px] sm:w-[267px] xl:w-[177px]  h-8 sm:h-16 xl:h-9 
            rounded-[27px] sm:rounded-[56px] flex items-center justify-center text-softBlue text-[9px] sm:text-lg xl:text-xs font-medium`}
          >
            Complimentary Dataset
          </button>
        </form>
        <p className="text-[9px] sm:text-base xl:text-xs mt-6 ">
          By submitting this form, you agree to TwoTensor’s{" "}
          <Link href="" className="text-[#075AD7]">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="" className="text-[#075AD7]">
            Privacy Policy.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DataSetForm;
