import React, { useRef, useState } from "react";
import ChevronMobile from "./common/chevron-mobile";
import useOutsideClick from "../utils/outside-click";
const SdvNavbarItem = ({ data, dark, idx }) => {
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
    if (e.target !== currentEl.current && currentEl.current.contains(e.target)) {
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
      } block lg:inline-block lg:border-none w-full lg:w-auto text-center `}
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
              <div className=" flex flex-wrap -mx-4">
                {Array.from(firstColItems).slice(0, 4).map((item, idx) => {
                  return (
                    <div className="px-4 w-full md:w-1/2" key={`nav-sdv-${idx}`}>
                      <a
                        className="bg-white hover:bg-sdv-navitem text-sdv-dark hover:text-white w-full block rounded-lg xl:px-5 xl:py-4 px-4 py-3"
                        href={`${item.url}`}
                      >
                        <div className="flex justify-start items-center -mx-2">
                          <div className="w-auto px-2 text-2xl font-bold">
                            {item.icon}
                          </div>
                          <div className="w-auto px-2 xl:text-xl my-2 ">{item.title}</div>
                        </div>
                        <div className="opacity-70 text-sm xl:text-base" dangerouslySetInnerHTML={{ __html: item.text}} />
                      </a>
                    </div>
                  );
                })}
              </div>
              </div>
              <div className="px-4 w-full md:w-4/12 md:border-l-2 border-gray-100">
                <a href={lastColItem.url} className="bg-white hover:bg-sdv-navitem text-sdv-dark hover:text-white w-full block rounded-lg xl:px-5 xl:py-4 px-4 py-3">
                  <div className="font-bold text-xl mb-3">{lastColItem.title}</div>
                  <div className="opacity-70 text-sm xl:text-base" dangerouslySetInnerHTML={{ __html: lastColItem.text}} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};


export default SdvNavbarItem