const Pagination = ({ handleNext, handlePrev }) => {
    return (
        <ul className="flex list-reset border border-grey-light rounded w-auto font-sans">
            <li><button className="block hover:text-white hover:bg-blue text-blue px-3 py-2" onClick={handleNext}>Anteriores</button></li>
            <li><button className="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2" onClick={handlePrev}>Posteriores</button></li>
        </ul>
    );
}

export default Pagination;