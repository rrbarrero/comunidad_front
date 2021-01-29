import { FaForward, FaBackward } from "react-icons/fa";

const Pagination = ({ handleNext, handlePrev, nextString, prevString}) => {
    return (
      <ul className="flex justify-between list-reset border border-grey-light rounded w-auto font-sans">
        <li>
          <button
            className="block hover:text-white hover:bg-blue text-blue px-3 py-2"
            onClick={handleNext}
          >
           <FaBackward className="inline" /> {nextString}
          </button>
        </li>
        <li>
          <button
            className="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
            onClick={handlePrev}
          >
            {prevString} <FaForward className="inline"/>
          </button>
        </li>
      </ul>
    );
}

export default Pagination;