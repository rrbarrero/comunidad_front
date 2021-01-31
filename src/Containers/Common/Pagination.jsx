import { FaForward, FaBackward } from "react-icons/fa";

const Pagination = ({ handleNext, handlePrev, nextString, prevString}) => {
    return (
      <ul className="flex justify-between list-reset rounded w-auto font-sans md:mx-10 my-7">
        <li>
          <button
            className="block h-32 sm:h-16 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-4 border-red-500 shadow-md ml-3 px-3 py-2"
            onClick={handleNext}
          >
           <svg className="mr-2 float-left" width="24" height="30" viewBox="0 0 24 24" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
									fill="currentColor" /></svg> {nextString}
          </button>
        </li>
        <li>
          <button
            className="block h-32 sm:h-16 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-4 border-red-500 shadow-md mr-3 px-3 py-2"
            onClick={handlePrev}
          >
            <svg className="ml-2 float-right" width="24" height="30" viewBox="0 0 24 24" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
									fill="currentColor" /></svg> {prevString} 
          </button>
        </li>
      </ul>
    );
}

export default Pagination;