import React, { useRef, useState } from "react";
import MeetTheTeam from "../../assets/meat-the-team.svg"
import ChevronMobile from "./common/chevron-mobile";
import useOutsideClick from "../utils/outside-click";

const CompanyNavbarItem = ({ data, dark, idx }) => {
  const [isActive, setActive] = useState(false);
  const subItems = data.subItems || null;
  const currentEl = useRef(null);
  const onClick = (e) => {
    setActive(true);
  }
  const onHover = (e) => {
    // console.log('hover', e.target, currentEl.current.contains(e.target));  
    setActive(true);
  };
  const onFocus = (e) => {
    // console.log('focus', e.target, currentEl.current.contains(e.target));
    setActive(true)
  };
  const onBlur = (e) => {
    // console.log('blur', e.target, currentEl.current.contains(e.target));
    if (!currentEl.current.contains(e.target)) {
      setActive(false);
    }
  };

  const onLeave = (e) => {
    // console.log('leave', e.target, e.target != currentEl.current, currentEl.current.contains(e.target));
    if (e.target != currentEl.current && currentEl.current.contains(e.target)) {
      setActive(false);
    }
  };

  useOutsideClick(currentEl, () => {
    if (isActive) {
      setActive(!isActive);
    }
  });

  if (subItems == null) {
    return (
      <li className="block lg:inline-block lg:border-none w-full lg:w-auto text-center">
        <a
          className="text-grey-3 inline-block text-white hover:opacity-80 w-full px-6 lg:px-6 py-4 lg:py-8 text-left border-b lg:border-none border-white"
          href={data.url}
        >
          {data.name} {isActive}
        </a> 
      </li>
    );
  }

  let firstColItems = data.subItems;
  let lastColItem = firstColItems[firstColItems.length - 1];

  return (
    <li
      className={`${
        isActive ? `is-active` : ``
      } block lg:inline-block lg:border-none w-full lg:w-auto text-center`}
      ref={currentEl}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
    >
      <button
        className={`${ idx === 0 ? 'lg:pr-6 lg:pl-12' : 'lg:px-6'} px-6 text-left text-white hover:opacity-80 w-full lg:w-auto focus:outline-none py-4 lg:py-8 border-b lg:border-none border-white pointer-events-none lg:pointer-events-auto`}>
        {data.name} {" "} 
        <span className="inline-block float-right">
          <span className={` w-3.5 h-3.5 mt-1.5`}>
            <ChevronMobile isActive={isActive} />
          </span>
        </span>
      </button>
      <div className="bg-white lg:absolute lg:left-0 right-0 text-left lg:top-21 dr-dwn">
        <div className="p-4 lg:p-8" >
          <div className="text-sdv-dark mx-auto max-w-3xl pb-3 text-center leading-tight text-lg" dangerouslySetInnerHTML={{ __html: data.text}} />
          <div className="max-w-3xl h-0.5 bg-gray-100 mx-auto my-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
            
              <div className="px-4 w-full md:w-8/12">
              <div className=" flex flex-wrap items-center justify-center -mx-4">

                    <div className="px-4 w-auto" key={`nav-${idx}`}>
                      <a
                        className="bg-white hover:bg-sdv-navitem text-sdv-dark hover:text-white w-full w-40 block rounded-lg xl:px-5 xl:py-4 px-4 py-3"
                        href={`/team/`}
                      >
                        <MeetTheTeam />
                      </a>
                    </div>

                    <div className="px-4 w-full md:w-1/2 max-w-xs text-center" key={`nav-company-${idx}`}>
                    <a
                      href="/team/"
                      className="inline-block rounded-full text-white px-10 py-3 font-bold hover:opacity-80 grad-bg"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #03B0F2 1.57%, #01E0C9 100%);",
                      }}
                    >
                      Meet the team!
                    </a>
                    </div>

              </div>
              </div>
              <div className="px-4 w-full md:w-4/12 md:border-l-2 border-gray-100">
                <div className="h-0.5 bg-gray-100 mt-6 mb-2 -mx-4"> </div>
                <a
                  className="bg-white hover:bg-sdv-navitem text-sdv-dark hover:text-white w-full block rounded-lg xl:px-5 xl:py-4 px-4 py-3"
                  href={`${lastColItem.url}`}
                >
                  <div className="flex justify-center sm:justify-start items-center -mx-2">
                    <div className="w-auto px-2 text-2xl font-bold">
                      {lastColItem.icon}
                    </div>
                    <div className="w-auto px-2 xl:text-xl my-2 ">{lastColItem.title}</div>
                  </div>
                  <div className="opacity-70 text-sm xl:text-base text-center sm:text-left" dangerouslySetInnerHTML={{ __html: lastColItem.text}} />
                </a>
              </div>
            </div>
          </div>

          <ul>
            
          </ul>
        </div>
      </div>
    </li>
  );
};


export default CompanyNavbarItem