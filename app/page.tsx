'use client';
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    if (typeof window !== 'undefined') {
      // Check if running on the client-side
      setIsDesktop(window.innerWidth > 768);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return (
    <>
      <main className=" flex flex-none text-xs box-border flex-col flex-nowrap gap-50 min-h-content justify-center md:min-h-70 min-h-40 overflow-hidden padding-100 relative width-full bg-[#1A535C] align-center items-center">
        <div className="Header">
          <h1>splash</h1>
        </div>
        <div className="under_header">
          <h2 className=" font-spline font-bold text-[#ffffff]">premuim summer wear</h2>
        </div>
      </main>
      <div className="w-full bg-black -scale-y-100 md:h-16 h-0 ">
        <svg className=" relative md:top-4 top-0   max-w-full  rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,160L120,176C240,192,480,224,720,229.3C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </div>
      <section className="flex flex-none flex-col gap-50 h-min-content justify-start overflow-hidden md:p-100  p-12 relative w-full items-center flex-nowrap centent-center bg-black">

        <div className="items-center flex flex-none md:flex-row flex-col flex-nowrap overflow-visible content-center max-w-full">
          <div className=" w-full md:w-8/12 bg-cover bg-no-repeat bg-center h-36 filter grayscale" style={{ backgroundImage: `url("https://framerusercontent.com/images/zWme0gj8lJnpksAD5Dtx0CuuJs.jpg?scale-down-to=1024")`, backgroundRepeat: 'no-repeat' }} >
            <svg className="relative -bottom-27 h-auto w-52 -left-24" viewBox="0 0 200 200"><path fill="none" stroke="#eb2222" strokeLinecap="round" stroke-miterlimit="10" stroke-width="5" d="M85.358 98.416c0 .681-.199 1.846.818 1.846.688 0 1.712-.908 1.752-1.615.042-.743-.11-1.615-1.052-1.615-.508 0-1.761-.213-1.985.231m24.065-.923c0 1.493-.197 2.531 1.739 2.025 1.393-.364 3.167-1.474 3.167-3.063 0-1.857-1.584-1.73-3.037-1.73-1.403 0-.935 1.708-.935 2.768m-35.981 15.457c4.168 3.741 7.964 7.678 13.344 9.766 3.535 1.372 7.525 1.077 11.241 1.077 4.325 0 7.94-1.235 11.656-3.41 6.811-3.987 14.091-9.688 18.016-16.635 1.677-2.968 2.102-5.811 2.752-9.023M89.204 78.491c-7.811 0-12.649 1.46-18.474 7.177-6.698 6.576-10.219 14.63-11.275 23.732-1.007 8.688-.8 16.556 5.452 23.207 9.892 10.521 26.804 12.85 40.6 11.577 12.06-1.112 24.383-8.465 30.119-19.304 6.533-12.344 6.972-29.255 2.065-42.145-2.709-7.115-7.456-13.21-13.234-18.179-6.326-5.441-14.089-7.371-22.258-8.382-11.135-1.377-23.034-.981-33.004 4.401" /></svg>
            <svg className="relative -top-20 h-auto w-52 -right-24" viewBox="0 0 200 200"><path fill="none" stroke="#eb2222" strokeLinecap="round" stroke-miterlimit="10" stroke-width="5" d="M43.268 68.491c2.031 4.871 6.198 16.012 6.626 21.612m46.132-47.278c-4.633 13.626-14.781 42.661-18.304 49.793m29.189 13.083c8.427-9.292 26.945-28.707 33.59-32.027m-19.052 54.47c6.86-1.839 23.429-5.865 34.819-7.255m-36.192 29.803c3.387.44 11.664 2.484 17.679 7.133" /></svg>
          </div>
          <div>
            <h3 className="p-4 text-center md:text-3xl text-xl">Introducing the Hottest Summer Shorts!</h3>
            <p className="p-4 font-spline text-center text-xs flow-root text-white">Our premium summer swimming shorts will be your beachside go-to, with vibrant colors and perfect fit for the ultimate experience.</p>
          </div>
        </div>

      </section>
      <div className="w-full md:h-60 h-20 md:mb-24 mb-8">
        <svg className=" relative top-88 max-w-full rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,128C672,149,768,171,864,160C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <section className="flex flex-none items-center  flex-row md:flex-col max-h-min overflow-hidden content-start pb-4 md:p-100 relative w-full md:pt-2 bg-[#4ecdc4]">
        <main className=" flex flex-none flex-col  h-min-content content-start overflow-visible relative p-0 w-full max-w-1000 md:items-center">

          <header className=" outline-none flex flex-col centent-center flex-shrink-0 transform-none ">
            <h2 className="title self-center w-full text-white place-content-center text-center"> Why Choose Our Shorts</h2>
          </header>
          <section className="content-start items-start flex flex-none flex-col md:flex-row flex-nowrap h-min justify-center overflow-hidden p-0 relative w-full " >
            <div className="flex flex-col centent-center text-center "><h2 className="font-spline text-[#000000] p-4 ">Our shorts are crafted with quick-dry fabric,ensuring you stay comfy and dry after the swim.The lightweight and stretchable material provides all-day comfort and unhindered movement.</h2></div>
            <div className="flex flex-col centent-center text-center"><h2 className="font-spline text-[#000000] p-4 " >Our shorts are crafted with quick-dry fabric,ensuring you stay comfy and dry after the swim.The lightweight and stretchable material provides all-day comfort and unhindered movement.</h2></div>
          </section>
        </main>
      </section>


      <section className="centent-center items-center bg-[#4ecdc4] flex flex-none flex-col flex-nowrap h-min-content justify-start overflow-hidden  pb-8 md:p-100 w-full ">
        <main className="max-w-1000 w-full p-4 z-5">
          <main className="grid flex-none md:grid-cols-3 grid-cols-1 w-full md:mb-8 mb-4 gap-6 "  >
            {isDesktop ? (
              <motion.div
                whileHover={{ scale: 0.9 }}
                className="drop-shadow-2xl w-full m-0 md:h-96 h-72 md:col-span-2 rounded-xl  bg-[#ffffff] place-self-center  bg-contain bg-center bg-norepeat" style={{ backgroundImage: `url("https://webcdn.protest.eu/resize?type=auto&stripmeta=true&url=https%3A%2F%2Fpim.protest.eu%2FProductMedia%2FNOOS%2FMEN%2FSWIMWEAR%2F2711100%2F2711100_290_front.png&quality=90&width=2500")`, backgroundRepeat: 'no-repeat' }}>
                <svg className="relative md:h-96 h-36 md:w-52 w-24 md:-left-24 md:-top-44 left-88 -top-full" viewBox="0 0 200 200"><path fill="none" stroke="#0a4d49" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M73.587 79.826c0-3.053-.233-5.012 2.227-7.117 2.411-2.062 5.632-1.779 8.566-1.779 1.875 0 3.45-.217 4.257 1.878.877 2.276 1.882 4.024 1.882 6.574 0 1.357-.224 1.084.445.098 1.619-2.381 4.358-4.371 6.684-5.98 4.174-2.889 9.528-5.239 14.704-5.239 1.472 0 6.414.071 6.684 2.224.235 1.881 1.352 4.783-.446 6.45-.963.892-1.546 2.161-2.476 3.089-.161.161-.863.219-.792.148.523-.521 1.542-.769 2.203-1.038 5.83-2.37 11.973-3.307 18.269-2.842 2.256.167 3.677 1.322 5.52 2.447 1.097.669 1.256 1.823 2.005 2.422 1.875 1.497-1.626 5.076-2.203 6.228-.233.465-1.204 1.61-.198 1.754 1.886.269 3.697.53 5.521 1.137 3.034 1.009 6.492 2.557 7.995 5.56 2.16 4.313-.98 8.129-4.208 10.848-3.668 3.09-7.374 3.964-12.03 3.831-1.022-.029-1.587-.661-2.328-1.236-.202-.157-.803 3.296-.891 3.559-2.163 6.479-8.085 15.486-15.149 17.249-7.269 1.814-26.632 3.254-21.734-9.687.386-1.022.915-2.545 1.683-3.312.708-.707-.631.721-1.238.89-5.724 1.587-12.278 2.895-18.17 1.334-5.824-1.542-10.384-5.454-14.259-9.786-2.883-3.224-.112-7.23 1.907-9.711.561-.69 1.731-1.966 2.673-2.175 1.042-.231 1.37.311.174.642-2.901.805-6.065 1.112-9.06 1.112-3.136 0-6.71.507-9.605-.939-7.288-3.637-11.969-14.738-3.565-19.695 3.647-2.151 8.62-4.275 12.922-4.275 2.51 0 5.895-.598 8.243.444 1.864.827 5.069 2.559 6.015 4.448" /></svg>
              </motion.div>
            ) : (
              <div

                className="drop-shadow-2xl w-full m-0 md:h-96 h-72 md:col-span-2 rounded-xl  bg-[#ffffff] place-self-center  bg-contain bg-center bg-norepeat" style={{ backgroundImage: `url("https://webcdn.protest.eu/resize?type=auto&stripmeta=true&url=https%3A%2F%2Fpim.protest.eu%2FProductMedia%2FNOOS%2FMEN%2FSWIMWEAR%2F2711100%2F2711100_290_front.png&quality=90&width=2500")`, backgroundRepeat: 'no-repeat' }}>
                <svg className="relative md:h-96 h-36 md:w-52 w-24 md:-left-24 md:-top-44 left-88 -top-full" viewBox="0 0 200 200"><path fill="none" stroke="#0a4d49" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M73.587 79.826c0-3.053-.233-5.012 2.227-7.117 2.411-2.062 5.632-1.779 8.566-1.779 1.875 0 3.45-.217 4.257 1.878.877 2.276 1.882 4.024 1.882 6.574 0 1.357-.224 1.084.445.098 1.619-2.381 4.358-4.371 6.684-5.98 4.174-2.889 9.528-5.239 14.704-5.239 1.472 0 6.414.071 6.684 2.224.235 1.881 1.352 4.783-.446 6.45-.963.892-1.546 2.161-2.476 3.089-.161.161-.863.219-.792.148.523-.521 1.542-.769 2.203-1.038 5.83-2.37 11.973-3.307 18.269-2.842 2.256.167 3.677 1.322 5.52 2.447 1.097.669 1.256 1.823 2.005 2.422 1.875 1.497-1.626 5.076-2.203 6.228-.233.465-1.204 1.61-.198 1.754 1.886.269 3.697.53 5.521 1.137 3.034 1.009 6.492 2.557 7.995 5.56 2.16 4.313-.98 8.129-4.208 10.848-3.668 3.09-7.374 3.964-12.03 3.831-1.022-.029-1.587-.661-2.328-1.236-.202-.157-.803 3.296-.891 3.559-2.163 6.479-8.085 15.486-15.149 17.249-7.269 1.814-26.632 3.254-21.734-9.687.386-1.022.915-2.545 1.683-3.312.708-.707-.631.721-1.238.89-5.724 1.587-12.278 2.895-18.17 1.334-5.824-1.542-10.384-5.454-14.259-9.786-2.883-3.224-.112-7.23 1.907-9.711.561-.69 1.731-1.966 2.673-2.175 1.042-.231 1.37.311.174.642-2.901.805-6.065 1.112-9.06 1.112-3.136 0-6.71.507-9.605-.939-7.288-3.637-11.969-14.738-3.565-19.695 3.647-2.151 8.62-4.275 12.922-4.275 2.51 0 5.895-.598 8.243.444 1.864.827 5.069 2.559 6.015 4.448" /></svg>
              </div>
            )}


            {isDesktop ? (
              <motion.div
                whileHover={{ scale: 0.9 }} className="drop-shadow-2xl rounded-xl w-full m-0 md:h-96 h-full bg-[#ffffff] place-self-center bg-contain bg-center bg-norepeat" style={{ backgroundImage: `url("https://webcdn.protest.eu/resize?type=auto&stripmeta=true&url=https%3A%2F%2Fpim.protest.eu%2FProductMedia%2FNOOS%2FMEN%2FSWIMWEAR%2F2711100%2F2711100_355_front.png&quality=90&width=2500")`, backgroundRepeat: 'no-repeat' }}>
                <svg className="relative md:h-96 h-36 md:w-52 w-24 md:-right-44 md:-top-44 right-82 -top-full" viewBox="0 0 200 200"><path fill="none" stroke="#0a4d49" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M45.281 66.118c-5.058 0-10.382 6.998-11.645 11.587-2.07 7.517-1.784 16.041-1.245 23.768.554 7.936 3.718 17.717 10.998 22.035 5.72 3.393 15.646 4.484 22.146 3.021 6.309-1.42 13.13-6.699 15.476-12.677 1.617-4.116 1.711-10.363-1.144-13.914-2.055-2.555-7.92-3.153-10.301-.94-3.528 3.275-6.535 7.644-7.166 12.527-.992 7.677.391 12.586 7.116 16.935 8.689 5.62 22.476 5.933 31.75 2.129 10.378-4.256 21.394-12.766 26.475-22.877 2.325-4.627 3.48-9.614 3.881-14.756.231-2.954.71-6.791-.995-9.408-2.789-4.281-8.952-5.205-12.789-1.386-3.559 3.541-4.052 9.657-2.688 14.31 1.083 3.694 5.541 6.616 8.709 8.418 4.088 2.324 9.621 2.704 14.233 2.674 13.348-.089 22.849-13.34 29.908-23.174" /></svg>
              </motion.div>
            ) : (
              <div
                className="drop-shadow-2xl rounded-xl w-full m-0 md:h-96 h-72 bg-[#ffffff] place-self-center bg-contain bg-center bg-norepeat" style={{ backgroundImage: `url("https://webcdn.protest.eu/resize?type=auto&stripmeta=true&url=https%3A%2F%2Fpim.protest.eu%2FProductMedia%2FNOOS%2FMEN%2FSWIMWEAR%2F2711100%2F2711100_355_front.png&quality=90&width=2500")`, backgroundRepeat: 'no-repeat' }}>
                <svg className="relative md:h-96 h-36 md:w-52 w-24 md:-right-44 md:-top-44 right-82 -top-full" viewBox="0 0 200 200"><path fill="none" stroke="#0a4d49" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M45.281 66.118c-5.058 0-10.382 6.998-11.645 11.587-2.07 7.517-1.784 16.041-1.245 23.768.554 7.936 3.718 17.717 10.998 22.035 5.72 3.393 15.646 4.484 22.146 3.021 6.309-1.42 13.13-6.699 15.476-12.677 1.617-4.116 1.711-10.363-1.144-13.914-2.055-2.555-7.92-3.153-10.301-.94-3.528 3.275-6.535 7.644-7.166 12.527-.992 7.677.391 12.586 7.116 16.935 8.689 5.62 22.476 5.933 31.75 2.129 10.378-4.256 21.394-12.766 26.475-22.877 2.325-4.627 3.48-9.614 3.881-14.756.231-2.954.71-6.791-.995-9.408-2.789-4.281-8.952-5.205-12.789-1.386-3.559 3.541-4.052 9.657-2.688 14.31 1.083 3.694 5.541 6.616 8.709 8.418 4.088 2.324 9.621 2.704 14.233 2.674 13.348-.089 22.849-13.34 29.908-23.174" /></svg>
              </div>
            )}


          </main>
          <main className="grid flex-none grid-cols-1 md:grid-cols-3 w-full place-self-center gap-6">

            {isDesktop ? (
              <motion.div
                whileHover={{ scale: 0.9 }} className="drop-shadow-2xl rounded-xl  w-full m-0 md:h-96 h-72  bg-[#ffffff] place-self-center bg-contain bg-center bg-norepeat" style={{ backgroundImage: `url("https://webcdn.protest.eu/resize?type=auto&stripmeta=true&url=https%3A%2F%2Fpim.protest.eu%2FProductMedia%2FNOOS%2FMEN%2FSWIMWEAR%2F2711100%2F2711100_846_front.png&quality=90&width=2500")`, backgroundRepeat: 'no-repeat' }}>

              </motion.div>
            ) : (
              <div
                className="drop-shadow-2xl rounded-xl  w-full m-0 md:h-96 h-72  bg-[#ffffff] place-self-center bg-contain bg-center bg-norepeat" style={{ backgroundImage: `url("https://webcdn.protest.eu/resize?type=auto&stripmeta=true&url=https%3A%2F%2Fpim.protest.eu%2FProductMedia%2FNOOS%2FMEN%2FSWIMWEAR%2F2711100%2F2711100_846_front.png&quality=90&width=2500")`, backgroundRepeat: 'no-repeat' }}>

              </div>
            )}
            {isDesktop ? (
              <motion.div
                whileHover={{ scale: 0.9 }} className="drop-shadow-2xl rounded-xl w-full m-0 md:h-96 h-72 md:col-span-2 bg-[#ffffff] place-self-center pt-0 bg-contain bg-center bg-norepeat" style={{ backgroundImage: `url("https://webcdn.protest.eu/resize?type=auto&stripmeta=true&url=https%3A%2F%2Fpim.protest.eu%2FProductMedia%2FNOOS%2FMEN%2FSWIMWEAR%2F2711100%2F2711100_650_front.png&quality=90&width=2500")`, backgroundRepeat: 'no-repeat' }}>
                <svg className="relative md:h-96 h-36 md:w-52 w-24 md:-left-24 md:-bottom-44 -left-12 " viewBox="0 0 200 200"><path fill="none" stroke="#0a4d49" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M59.521 87.576v12.1m16.531-22.587h8.064m-25.402-15.73c.866-.109.404-4.786.404-5.647M36.942 75.88h12.096m2.419-9.278c-.722 0-2.465-1.703-2.822-2.42m22.982 2.42c2.329 0 2.639-1.522 4.435-2.42M71.617 85.56c.119.953 3.876 3.955 4.838 4.437m-27.821-2.824c-2.919 0-3.799 2.505-6.048 3.63M87.125 33.96c-1.728-.215-1.336-1.22-3.092-.05-.144.096.881.067 1.096-.149.82-.818-.191-1.343-.696-1.596m79.509 106.622c-1.234-1.234-5.073-4.212-6.981-2.494-1.533 1.381 1.325 3.934 2.493 1.595m-66.241-.23c.593 0 1.209.049 1.798-.014 1.08-.113 1.761-1.319 2.571-1.905 2.363-1.711 3.463-4.164 4.862-6.597 1.876-3.26 2.038-6.783 2.038-10.433v-3.838c0-1.046-.48-1.992-.48-2.998 0-.695-.239-2.523-.239-.839v10.539c0 1.776.657 3.482.719 5.238.093 2.6 1.522 5.892 3.357 7.728.772.773 1.241 1.721 2.038 2.519.76.76 1.673 1.322 2.624 1.745 1.883.837 4.325.533 6.367.533m-26.375-.959c1.008 0 1.761-.06 2.638.426.761.424 1.405 1.537 1.918 2.266 2.118 3.01 3.763 5.764 4.569 9.394.854 3.844 1.186 7.756 1.186 11.713v4.504c0 1.218.128-.188.226-.627.42-1.892.283-3.877.867-5.796.661-2.178 1.035-4.613 2.024-6.663 1.425-2.954 2.203-6.088 4.076-8.794 1.306-1.888 2.315-3.273 4.676-3.798.85-.189 1.741-.706 2.624-.706h1.811m16.697-65.415c3.736 0 5.775 5.423 6.541 8.489.608 2.433.359 5.034.788 7.505.121.697.225 1.597.225 2.294 0 .371.185 1.592.185.604 0-2.578.587-4.995 1.555-7.373.988-2.424 2.529-4.521 3.972-6.686 1.704-2.557 4.121-2.989 7.001-2.989m-18.794-2.581c1.475 0 3.239.447 4.331-.645.788-.789 1.158-1.991 1.566-3 .687-1.701 1.303-3.226 1.75-5.018.428-1.713.488-3.517.737-5.263.207-1.454.461-2.893.461-4.362v-.778c0 1.247.373 2.538.552 3.768.638 4.387 1.121 9.792 3.593 13.638.55.857 4.587 3.816 5.78 3.95" /></svg>
              </motion.div>
            ) : (
              <div
                className="rounded-xl w-full m-0 md:h-96 h-72 md:col-span-2 bg-[#ffffff] place-self-center pt-0 bg-contain bg-center bg-norepeat" style={{ backgroundImage: `url("https://webcdn.protest.eu/resize?type=auto&stripmeta=true&url=https%3A%2F%2Fpim.protest.eu%2FProductMedia%2FNOOS%2FMEN%2FSWIMWEAR%2F2711100%2F2711100_650_front.png&quality=90&width=2500")`, backgroundRepeat: 'no-repeat' }}>
                <svg className="relative md:h-96 h-36 md:w-52 w-24 md:-left-24 md:-bottom-44 left-88 " viewBox="0 0 200 200"><path fill="none" stroke="#0a4d49" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M59.521 87.576v12.1m16.531-22.587h8.064m-25.402-15.73c.866-.109.404-4.786.404-5.647M36.942 75.88h12.096m2.419-9.278c-.722 0-2.465-1.703-2.822-2.42m22.982 2.42c2.329 0 2.639-1.522 4.435-2.42M71.617 85.56c.119.953 3.876 3.955 4.838 4.437m-27.821-2.824c-2.919 0-3.799 2.505-6.048 3.63M87.125 33.96c-1.728-.215-1.336-1.22-3.092-.05-.144.096.881.067 1.096-.149.82-.818-.191-1.343-.696-1.596m79.509 106.622c-1.234-1.234-5.073-4.212-6.981-2.494-1.533 1.381 1.325 3.934 2.493 1.595m-66.241-.23c.593 0 1.209.049 1.798-.014 1.08-.113 1.761-1.319 2.571-1.905 2.363-1.711 3.463-4.164 4.862-6.597 1.876-3.26 2.038-6.783 2.038-10.433v-3.838c0-1.046-.48-1.992-.48-2.998 0-.695-.239-2.523-.239-.839v10.539c0 1.776.657 3.482.719 5.238.093 2.6 1.522 5.892 3.357 7.728.772.773 1.241 1.721 2.038 2.519.76.76 1.673 1.322 2.624 1.745 1.883.837 4.325.533 6.367.533m-26.375-.959c1.008 0 1.761-.06 2.638.426.761.424 1.405 1.537 1.918 2.266 2.118 3.01 3.763 5.764 4.569 9.394.854 3.844 1.186 7.756 1.186 11.713v4.504c0 1.218.128-.188.226-.627.42-1.892.283-3.877.867-5.796.661-2.178 1.035-4.613 2.024-6.663 1.425-2.954 2.203-6.088 4.076-8.794 1.306-1.888 2.315-3.273 4.676-3.798.85-.189 1.741-.706 2.624-.706h1.811m16.697-65.415c3.736 0 5.775 5.423 6.541 8.489.608 2.433.359 5.034.788 7.505.121.697.225 1.597.225 2.294 0 .371.185 1.592.185.604 0-2.578.587-4.995 1.555-7.373.988-2.424 2.529-4.521 3.972-6.686 1.704-2.557 4.121-2.989 7.001-2.989m-18.794-2.581c1.475 0 3.239.447 4.331-.645.788-.789 1.158-1.991 1.566-3 .687-1.701 1.303-3.226 1.75-5.018.428-1.713.488-3.517.737-5.263.207-1.454.461-2.893.461-4.362v-.778c0 1.247.373 2.538.552 3.768.638 4.387 1.121 9.792 3.593 13.638.55.857 4.587 3.816 5.78 3.95" /></svg>
              </div>
            )}

          </main>
        </main>
      </section >


      <div className="w-full  grid grid-cols-1 place-items-center justify-center">
        <form className=" md:w-2/3 w-full grid-cols-1 p-8 pt-0 grid  justify-center ">
          <div className='grid grid-cols-1  md:mb-8'>
            <h2 className='title self-center w-full text-white place-content-center mb-4' style={{ textAlign: "center" }}>Make An Order Right Now</h2>

          </div>
          <div className='grid  place-self-center w-full md:w-10/12 grid-cols-1 md:grid-cols-2 gap-0 md:gap-2'>
            {isDesktop ? (
              <input type="text" placeholder="First Name" required className="input  w-full text-center  mt-4 md:mb-4 bg-base-200 bg-opacity-65 place-self-center" name="fname" />
            ) : (
              <>
                <label className=" place-self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your first name:</label>
                <input type="text" placeholder="First Name" required className="input  w-full text-center  mb-4  md:mb-4 bg-base-200 bg-opacity-65 place-self-center" name="fname" />
              </>
            )}

            {isDesktop ? (
              <input type="text" placeholder="Last Name" required className="input   w-full text-center  mb-4 mt-4 bg-base-200 bg-opacity-65 place-self-center" name="lname" />
            ) : (
              <>
                <label className=" place-self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your last name:</label>
                <input type="text" placeholder="Last Name" required className="input   w-full text-center  mb-4  bg-base-200 bg-opacity-65 place-self-center" name="lname" />
              </>
            )}

          </div>
          <div className='grid  place-self-center w-full md:w-10/12 grid-cols-1 md:grid-cols-2 gap-0 md:gap-2'>
            {isDesktop ? (
              <input type="phone" placeholder="Phone" required className="input w-full text-center  mb-4  bg-base-200 bg-opacity-65 place-self-center" name="phone" />
            ) : (
              <>
                <label className=" place-self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your phone number:</label>
                <input type="phone" placeholder="Phone" required className="input w-full text-center  mb-4  bg-base-200 bg-opacity-65 place-self-center" name="phone" />
              </>
            )}

            {isDesktop ? (
              <input type="text" placeholder="District" required className="input  w-full text-center mb-4 bg-base-200 bg-opacity-65 place-self-center" name="wilaya" />
            ) : (
              <>
                <label className=" place-self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your place of stay:</label>
                <input type="text" placeholder="District" required className="input  w-full text-center mb-4 bg-base-200 bg-opacity-65 place-self-center" name="wilaya" />
              </>
            )}
          </div>
          <div className='grid grid-cols-1 place-items-center bg-opacity-20'>

            {isDesktop ? (
              <select className="select w-full text-center md:w-5/6 mb-4  bg-base-200 bg-opacity-65 place-self-center" required name="subject" placeholder="Subject">
                <option value="" selected></option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
                <option value="Grey" >Grey</option>

              </select>

            ) : (
              <>
                <label className=" place-self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a product:</label>
                <select className="select w-full text-center md:w-5/6 mb-4  bg-base-200 bg-opacity-65 place-self-center" required name="subject" placeholder="Subject">
                  <option value="" selected></option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="Black">Black</option>
                  <option value="Grey" >Grey</option>
                </select>
              </>

            )}

          </div>
          <div className='grid  grid-cols-1 place-items-center mt-4 md:mt-8'>
            <button className="btn btn-active bg-[#0f1b3a] md:w-1/4 w-full" name="subject">Submit</button>
          </div>
        </form>
      </div>


      <div className=" w-full h-36">

      </div>

    </>
  )


}
