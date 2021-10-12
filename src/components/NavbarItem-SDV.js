import React, { useRef, useState } from "react";


const ChevronDesktop = () => {
  return (
    <svg
      className="ml-2 hidden lg:inline-block"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 8"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.667 1L7 6.333 12.333 1"
      ></path>
    </svg>
  );
}

const ChevronMobile = ({isActive}) => {
  return (
    <svg
      className={`inline-block lg:hidden rotate-0 ml-3 transform duration-200 ${!isActive ? '' : ' rotate-90'}`}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      fill="none"
      viewBox="0 0 7 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.5 1l4 4-4 4"
      ></path>
    </svg>
  )
}


const SdvNavbarItem = ({ data, dark, idx }) => {
  const [isActive, setActive] = useState(false);
  const subItems = data.subItems || null;
  const currentEl = useRef(null);
  const onHover = (e) => setActive(true);
  const onClick = (e) => {
    if (isActive) {
      setActive(false);
      return;
    } else setActive(true);
  };
  const onLeave = (e) => {
    if (currentEl.current.contains(e.target)) {
      setActive(false);
    }
  };

  if (subItems == null) {
    return (
      <li className="block lg:inline-block lg:border-none w-full max-w-sm lg:w-auto text-center">
        <a
          className="text-grey-3 inline-block text-white hover:opacity-80 w-full px-6 lg:px-6 py-4 lg:py-8 text-left"
          href={data.url}
        >
          {data.name}
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
      } block lg:inline-block lg:border-none  w-full lg:w-auto text-center`}
      ref={currentEl}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      onMouseClick={onClick}
    >
      <button className={`${ idx === 0 ? 'lg:pr-6 lg:pl-12' : 'lg:px-6'} px-6 text-left text-white hover:opacity-80 w-full max-w-sm lg:w-auto focus:outline-none py-4 lg:py-8`}>
        {data.name} {" "}
        <span className="inline-block float-right">
          <span className={` w-3.5 h-3.5 mt-1.5`}>
            <ChevronMobile isActive={isActive} />
          </span>
        </span>
      </button>
      <div className="bg-white lg:absolute lg:left-0 right-0 text-left lg:top-21 dr-dwn">
        <div className="p-4 lg:p-8">
          <div className="text-sdv-dark mx-auto max-w-3xl pb-3 text-center leading-tight text-lg" dangerouslySetInnerHTML={{ __html: data.text}} />
          <div className="max-w-3xl h-0.5 bg-gray-100 mx-auto my-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
            
              <div className="px-4 w-full md:w-8/12">
              <div className=" flex flex-wrap -mx-4">
                {Array.from(firstColItems).slice(0, 4).map((item, idx) => {
                  return (
                    <div className="px-4 w-full md:w-1/2" key={`nav-${idx}`}>
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
              <div className="px-4 w-full md:w-4/12 border-l-2 border-gray-100">
                <a href={lastColItem.url} className="bg-white hover:bg-sdv-navitem text-sdv-dark hover:text-white w-full block rounded-lg xl:px-5 xl:py-4 px-4 py-3">
                  <div className="font-bold text-xl mb-3">{lastColItem.title}</div>
                  <div className="opacity-70 text-sm xl:text-base" dangerouslySetInnerHTML={{ __html: lastColItem.text}} />
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


export default SdvNavbarItem