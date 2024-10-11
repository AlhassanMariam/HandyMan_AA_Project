import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0E3995] text-center text-surface/75 dark:text-white/75 text-white lg:text-left">

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              About Us
            </h6>
            <p>Plot122  Gbadaga street, Lagos</p>
            <p>no 30 Victoria Cresent , Abuja</p>
            <span>
            <svg
      viewBox="0 0 860 1000"
      fill="currentColor"
      height="1em"
      width="1em"
      
    >
      <path d="M752 80c29.333 0 54.667 10.333 76 31s32 45.667 32 75v646c0 29.333-10.667 54.667-32 76s-46.667 32-76 32H590V630h114V496H590v-70c0-20 9.333-30 28-30h86V244h-96c-49.333 0-90.667 18-124 54s-50 80-50 132v66H330v134h104v310H108c-29.333 0-54.667-10.667-76-32S0 861.333 0 832V186c0-29.333 10.667-54.333 32-75s46.667-31 76-31h644" />
    </svg>
            </span>
            <span>
            <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
     
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
            </span>
            <span>
            <svg
      viewBox="0 0 920 1000"
      fill="currentColor"
      height="1em"
      width="1em"
      
    >
      <path d="M920 214c-24 36-55.333 68.667-94 98v24c0 86.667-20 170-60 250S664 733.667 580 789s-180.667 83-290 83c-106.667 0-203.333-28-290-84 9.333 1.333 24.667 2 46 2 88 0 166-26.667 234-80-41.333-1.333-78-14-110-38s-54-55.333-66-94c6.667 2.667 18 4 34 4 17.333 0 34-2 50-6-44-9.333-80-31.333-108-66s-42-74.667-42-120v-2c24 13.333 52 21.333 84 24-56-38.667-84-91.333-84-158 0-32 8.667-63.333 26-94 102.667 125.333 232.667 190.667 390 196-4-12-6-26-6-42 0-52 18.333-96.333 55-133s81.667-55 135-55c54.667 0 100 19.333 136 58 40-8 80-22.667 120-44-13.333 44-40.667 78.667-82 104 37.333-5.333 73.333-15.333 108-30" />
    </svg>
            </span>
          </div>
          {/* Products section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start"> Services</h6>
            <p className="mb-4"><a href="#!">Plumbing</a></p>
            <p className="mb-4"><a href="#!">Interior Services</a></p>
            <p className="mb-4"><a href="#!">Painting</a></p> 
            <p className="mb-4"><a href="#!">Carpentry</a></p>
          </div>
          {/* Page section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Page</h6>
            <p className="mb-4"><a href="#!">Service</a></p>
            <p className="mb-4"><a href="#!">Gallery</a></p>
            <p className="mb-4"><a href="#!">Blog</a></p>
            <p><a href="#!">Contact Us</a></p>
          </div>
          {/* Contact section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                {/* SVG for location */}
                <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
    >
      <path
        fillRule="evenodd"
        d="M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
      />
    </svg>
              </span>
              +22 7272 8282
             
            </p>
           <p>
           <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4 2)"
      >
        <path d="M6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 002.564 3.05z" />
        <path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5 z" />
      </g>
    </svg>
           <span>+7889 Mechanic Rd.Miami, FL 33125</span>
           </p>
            <p>
            <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
     
    >
      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
    </svg>
    <span>Handyman@domain.com</span>
            </p>
            
            {/* Add more contact details similarly */}
          </div>
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center">
        <span>© 2024 All Rights Reserved.</span>
        <a className="font-semibold" href="https://tw-elements.com/">Handy man  Property</a>

      </div>
    </footer>
  );
};

export default Footer;
