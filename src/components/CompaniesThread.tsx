"use client";
import React, { useState } from "react";
import Image from "next/image";
import CompanyCard from "./CompanyCard";

interface Details {
  subTitle: string;
  stage: string;
  raised?: string;
  co_investors: string[];
}

export interface Companies {
  img?: string;
  name: string;
  deals: number;
  value: string;
  leadDays: number;
  details1?: Details;
  details2?: Details;
  details3?: Details;
  details4?: Details;
  details5?: Details;
  details6?: Details;
  details7?: Details;
  details8?: Details;
  details9?: Details;
  details10?: Details;
  details11?: Details;
}

export interface CompaniesThreadProps {
  companies: {
    comp1?: Companies;
    comp2?: Companies;
    comp3?: Companies;
    comp4?: Companies;
    comp5?: Companies;
    comp6?: Companies;
  }[];
}

const CompaniesThread = (props: CompaniesThreadProps) => {
  const [showCompany, setShowCompany] = useState<{
    company: Companies;
    showModal: boolean;
  }>({
    company: {
      name: "",
      deals: 0,
      value: "",
      leadDays: 0,
    },
    showModal: false,
  });
  const { companies } = props;

  const handleModal = (
    name: string,
    comp: "comp1" | "comp2" | "comp3" | "comp4" | "comp5" | "comp6"
  ) => {
    const companiesObject = companies.filter(
      (item) => item[comp]?.name === name
    )[0];

    for (const key in companiesObject) {
      if (key === comp) {
        if (companiesObject.hasOwnProperty(comp)) {
          setShowCompany({
            company: companiesObject[comp]!,
            showModal: true,
          });
          break;
        }
      }
    }
  };

  console.log(showCompany);
  return (
    <div className="flex items-center justify-between  ">
      {companies.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-[3px]">
          {item.comp1 ? (
            <div
              className={`${
                item.comp1.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full "
              }`}
            >
              {item.comp1.img && (
                <div
                  onMouseOver={() => handleModal(item.comp1?.name!, "comp1")}
                  onMouseLeave={() => {
                    setShowCompany({
                      showModal: false,
                      company: {
                        name: "",
                        deals: 0,
                        value: "",
                        leadDays: 0,
                      },
                    });
                  }}
                  className="sm:relative"
                >
                  <Image
                    width={30}
                    height={30}
                    onClick={() => handleModal(item.comp1?.name!, "comp1")}
                    className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full cursor-pointer"
                    src={item.comp1.img}
                    alt={item.comp1.name}
                  />
                  <div className="fixed top-0 left-0  w-screen sm:w-auto h-screen sm:h-auto flex justify-center  pt-20 sm:pt-0 sm:absolute sm:left-11 z-50">
                    {showCompany.showModal &&
                      item.comp1.name === showCompany.company.name && (
                        <CompanyCard
                          handleClose={() => {
                            setShowCompany({
                              showModal: false,
                              company: {
                                name: "",
                                deals: 0,
                                value: "",
                                leadDays: 0,
                              },
                            });
                          }}
                          name={showCompany.company.name}
                          img={showCompany.company.img}
                          deals={showCompany.company.deals}
                          value={showCompany.company.value}
                          leadDays={showCompany.company.leadDays}
                          details1={showCompany.company.details1 ?? undefined}
                          details2={showCompany.company.details2 ?? undefined}
                          details3={showCompany.company.details3 ?? undefined}
                          details4={showCompany.company.details4 ?? undefined}
                          details5={showCompany.company.details5 ?? undefined}
                          details6={showCompany.company.details6 ?? undefined}
                          details7={showCompany.company.details7 ?? undefined}
                          details8={showCompany.company.details8 ?? undefined}
                          details9={showCompany.company.details9 ?? undefined}
                          details10={showCompany.company.details10 ?? undefined}
                          details11={showCompany.company.details11 ?? undefined}
                        />
                      )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-[16px] sm:h-[43px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px] min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4  sm:min-h-[24px]  w-[1px] bg-[#417871]" />
          {item.comp2 ? (
            <div
              className={`${
                item.comp2.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp2.img && (
                <div
                  onMouseOver={() => handleModal(item.comp2?.name!, "comp2")}
                  onMouseLeave={() => {
                    setShowCompany({
                      showModal: false,
                      company: {
                        name: "",
                        deals: 0,
                        value: "",
                        leadDays: 0,
                      },
                    });
                  }}
                  className="sm:relative"
                >
                  <Image
                    width={30}
                    height={30}
                    onClick={() => handleModal(item.comp2?.name!, "comp2")}
                    className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full cursor-pointer"
                    src={item.comp2.img}
                    alt={item.comp2.name}
                  />
                  <div className="fixed top-0 left-0  w-screen sm:w-auto h-screen sm:h-auto flex justify-center  pt-20 sm:pt-0 sm:absolute sm:left-11 z-50">
                    {showCompany.showModal &&
                      item.comp2.name === showCompany.company.name && (
                        <CompanyCard
                          handleClose={() => {
                            setShowCompany({
                              showModal: false,
                              company: {
                                name: "",
                                deals: 0,
                                value: "",
                                leadDays: 0,
                              },
                            });
                          }}
                          name={showCompany.company.name}
                          img={showCompany.company.img}
                          deals={showCompany.company.deals}
                          value={showCompany.company.value}
                          leadDays={showCompany.company.leadDays}
                          details1={showCompany.company.details1 ?? undefined}
                          details2={showCompany.company.details2 ?? undefined}
                          details3={showCompany.company.details3 ?? undefined}
                          details4={showCompany.company.details4 ?? undefined}
                          details5={showCompany.company.details5 ?? undefined}
                          details6={showCompany.company.details6 ?? undefined}
                          details7={showCompany.company.details7 ?? undefined}
                          details8={showCompany.company.details8 ?? undefined}
                          details9={showCompany.company.details9 ?? undefined}
                          details10={showCompany.company.details10 ?? undefined}
                          details11={showCompany.company.details11 ?? undefined}
                        />
                      )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-[16px] sm:h-[43px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px] min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4  sm:min-h-[24px]  w-[1px] bg-[#417871]" />
          {item.comp3 ? (
            <div
              className={`${
                item.comp3.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp3.img && (
                <div
                  onMouseOver={() => handleModal(item.comp3?.name!, "comp3")}
                  onMouseLeave={() => {
                    setShowCompany({
                      showModal: false,
                      company: {
                        name: "",
                        deals: 0,
                        value: "",
                        leadDays: 0,
                      },
                    });
                  }}
                  className="sm:relative"
                >
                  <Image
                    width={30}
                    height={30}
                    onClick={() => handleModal(item.comp3?.name!, "comp3")}
                    className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full cursor-pointer"
                    src={item.comp3.img}
                    alt={item.comp3.name}
                  />
                  <div className="fixed top-0 left-0  w-screen sm:w-auto h-screen sm:h-auto flex justify-center  pt-20 sm:pt-0 sm:absolute sm:left-11 z-50">
                    {showCompany.showModal &&
                      item.comp3.name === showCompany.company.name && (
                        <CompanyCard
                          handleClose={() => {
                            setShowCompany({
                              showModal: false,
                              company: {
                                name: "",
                                deals: 0,
                                value: "",
                                leadDays: 0,
                              },
                            });
                          }}
                          name={showCompany.company.name}
                          img={showCompany.company.img}
                          deals={showCompany.company.deals}
                          value={showCompany.company.value}
                          leadDays={showCompany.company.leadDays}
                          details1={showCompany.company.details1 ?? undefined}
                          details2={showCompany.company.details2 ?? undefined}
                          details3={showCompany.company.details3 ?? undefined}
                          details4={showCompany.company.details4 ?? undefined}
                          details5={showCompany.company.details5 ?? undefined}
                          details6={showCompany.company.details6 ?? undefined}
                          details7={showCompany.company.details7 ?? undefined}
                          details8={showCompany.company.details8 ?? undefined}
                          details9={showCompany.company.details9 ?? undefined}
                          details10={showCompany.company.details10 ?? undefined}
                          details11={showCompany.company.details11 ?? undefined}
                        />
                      )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-[16px] sm:h-[43px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px] min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4 w-[1px]  sm:min-h-[24px]  bg-[#417871]" />
          {item.comp4 ? (
            <div
              className={`${
                item.comp4.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp4.img && (
                <div
                  onMouseOver={() => handleModal(item.comp4?.name!, "comp4")}
                  onMouseLeave={() => {
                    setShowCompany({
                      showModal: false,
                      company: {
                        name: "",
                        deals: 0,
                        value: "",
                        leadDays: 0,
                      },
                    });
                  }}
                  className="sm:relative"
                >
                  <Image
                    width={30}
                    height={30}
                    onClick={() => handleModal(item.comp4?.name!, "comp4")}
                    className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full cursor-pointer"
                    src={item.comp4.img}
                    alt={item.comp4.name}
                  />
                  <div className="fixed top-0 left-0  w-screen sm:w-auto h-screen sm:h-auto flex justify-center  pt-20 sm:pt-0 sm:absolute sm:left-11 z-50">
                    {showCompany.showModal &&
                      item.comp4.name === showCompany.company.name && (
                        <CompanyCard
                          handleClose={() => {
                            setShowCompany({
                              showModal: false,
                              company: {
                                name: "",
                                deals: 0,
                                value: "",
                                leadDays: 0,
                              },
                            });
                          }}
                          name={showCompany.company.name}
                          img={showCompany.company.img}
                          deals={showCompany.company.deals}
                          value={showCompany.company.value}
                          leadDays={showCompany.company.leadDays}
                          details1={showCompany.company.details1 ?? undefined}
                          details2={showCompany.company.details2 ?? undefined}
                          details3={showCompany.company.details3 ?? undefined}
                          details4={showCompany.company.details4 ?? undefined}
                          details5={showCompany.company.details5 ?? undefined}
                          details6={showCompany.company.details6 ?? undefined}
                          details7={showCompany.company.details7 ?? undefined}
                          details8={showCompany.company.details8 ?? undefined}
                          details9={showCompany.company.details9 ?? undefined}
                          details10={showCompany.company.details10 ?? undefined}
                          details11={showCompany.company.details11 ?? undefined}
                        />
                      )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-[16px] sm:h-[43px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px] min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4 w-[1px]  sm:min-h-[24px]  bg-[#417871]" />
          {item.comp5 ? (
            <div
              className={`${
                item.comp5.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp5.img && (
                <div
                  onMouseOver={() => handleModal(item.comp5?.name!, "comp5")}
                  onMouseLeave={() => {
                    setShowCompany({
                      showModal: false,
                      company: {
                        name: "",
                        deals: 0,
                        value: "",
                        leadDays: 0,
                      },
                    });
                  }}
                  className="sm:relative"
                >
                  <Image
                    width={30}
                    height={30}
                    onClick={() => handleModal(item.comp5?.name!, "comp5")}
                    className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full cursor-pointer"
                    src={item.comp5.img}
                    alt={item.comp5.name}
                  />
                  <div className="fixed top-0 left-0  w-screen sm:w-auto h-screen sm:h-auto flex justify-center  pt-20 sm:pt-0 sm:absolute sm:left-11 z-50">
                    {showCompany.showModal &&
                      item.comp5.name === showCompany.company.name && (
                        <CompanyCard
                          handleClose={() => {
                            setShowCompany({
                              showModal: false,
                              company: {
                                name: "",
                                deals: 0,
                                value: "",
                                leadDays: 0,
                              },
                            });
                          }}
                          name={showCompany.company.name}
                          img={showCompany.company.img}
                          deals={showCompany.company.deals}
                          value={showCompany.company.value}
                          leadDays={showCompany.company.leadDays}
                          details1={showCompany.company.details1 ?? undefined}
                          details2={showCompany.company.details2 ?? undefined}
                          details3={showCompany.company.details3 ?? undefined}
                          details4={showCompany.company.details4 ?? undefined}
                          details5={showCompany.company.details5 ?? undefined}
                          details6={showCompany.company.details6 ?? undefined}
                          details7={showCompany.company.details7 ?? undefined}
                          details8={showCompany.company.details8 ?? undefined}
                          details9={showCompany.company.details9 ?? undefined}
                          details10={showCompany.company.details10 ?? undefined}
                          details11={showCompany.company.details11 ?? undefined}
                        />
                      )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-[16px] sm:h-[43px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px] min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4  sm:min-h-[24px]  w-[1px] bg-[#417871]" />
          {item.comp6 ? (
            <div
              className={`${
                item.comp6.img
                  ? ""
                  : "bg-homeCircle w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full"
              }`}
            >
              {item.comp6.img && (
                <div
                  onMouseOver={() => handleModal(item.comp6?.name!, "comp6")}
                  onMouseLeave={() => {
                    setShowCompany({
                      showModal: false,
                      company: {
                        name: "",
                        deals: 0,
                        value: "",
                        leadDays: 0,
                      },
                    });
                  }}
                  className="sm:relative"
                >
                  <Image
                    width={30}
                    height={30}
                    onClick={() => handleModal(item.comp6?.name!, "comp6")}
                    className="w-8 sm:w-[43px] h-8 sm:h-[43px] rounded-full cursor-pointer"
                    src={item.comp6.img}
                    alt={item.comp6.name}
                  />
                  <div className="fixed top-0 left-0  w-screen sm:w-auto h-screen sm:h-auto flex justify-center  pt-20 sm:pt-0 sm:absolute sm:left-11 z-50">
                    {showCompany.showModal &&
                      item.comp6.name === showCompany.company.name && (
                        <CompanyCard
                          handleClose={() => {
                            setShowCompany({
                              showModal: false,
                              company: {
                                name: "",
                                deals: 0,
                                value: "",
                                leadDays: 0,
                              },
                            });
                          }}
                          name={showCompany.company.name}
                          img={showCompany.company.img}
                          deals={showCompany.company.deals}
                          value={showCompany.company.value}
                          leadDays={showCompany.company.leadDays}
                          details1={showCompany.company.details1 ?? undefined}
                          details2={showCompany.company.details2 ?? undefined}
                          details3={showCompany.company.details3 ?? undefined}
                          details4={showCompany.company.details4 ?? undefined}
                          details5={showCompany.company.details5 ?? undefined}
                          details6={showCompany.company.details6 ?? undefined}
                          details7={showCompany.company.details7 ?? undefined}
                          details8={showCompany.company.details8 ?? undefined}
                          details9={showCompany.company.details9 ?? undefined}
                          details10={showCompany.company.details10 ?? undefined}
                          details11={showCompany.company.details11 ?? undefined}
                        />
                      )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-[16px] sm:h-[43px] w-[30px] flex items-center justify-center ">
              <span className="min-h-[16px]  sm:min-h-[24px] min-w-[1px] bg-[#417871]" />
            </div>
          )}
          <span className="h-4  sm:min-h-[24px]  w-[1px] bg-[#417871]" />
        </div>
      ))}
    </div>
  );
};

export default CompaniesThread;