import './Mobile.css'
function Navbar(){
    return(
        <nav className=" navbar text-green-900 font-light flex justify-between items-center bg-lime-200">
        <h2 className=" brand ml-40 font-bold text-[40px] ">Portfolio</h2>
        <ul className="link flex space-x-11 mr-40 ">
            <li className="hover:text-sky-700 cursor-alias">Home</li>
            <li className="hover:text-sky-700 cursor-alias">About</li>
            <li className="hover:text-sky-700 cursor-alias">Contact</li>
            <li className="hover:text-sky-700 cursor-alias">Course</li>
        </ul>
        <button type="button" class="btn bg-green-900 text-white w-36 rounded-lg mr-3 mt-3 h-10">
            Download CV
      </button>
    </nav>
    )
}
export default Navbar;