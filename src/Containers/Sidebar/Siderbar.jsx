const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) pt-10 pl-8 pb-6 top-18 bg-blue-congreso100">
            <div className="mb-8">
                <h5 className="text-red-congreso200 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs">Últimas publicaciones</h5>
                <ul className="overflow-x-hidden text-gray-500 font-medium">
                    <li><a href="#class-reference" className="block transform transition-colors duration-200 py-2 hover:text-gray-900 text-gray-900">Publicación más comentada</a></li>
                    <li><a href="#float-right" className="block transform transition-colors duration-200 py-2 hover:text-gray-900">Float right</a></li>
                    <li><a href="#float-left" className="block transform transition-colors duration-200 py-2 hover:text-gray-900">Float left</a></li>
                    <li><a href="#don-t-float" className="block transform transition-colors duration-200 py-2 hover:text-gray-900">Don't float</a></li>
                    <li><a href="#responsive" className="block transform transition-colors duration-200 py-2 hover:text-gray-900">Responsive</a></li>
                    <li><a href="#customizing" className="block transform transition-colors duration-200 py-2 hover:text-gray-900">Customizing</a></li>
                    <li className="ml-4"><a href="#variants" className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium">Variants</a></li>
                    <li className="ml-4"><a href="#disabling" className="block py-2 transition-colors duration-200 hover:text-gray-900 font-medium">Disabling</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar;