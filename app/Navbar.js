import './Mobile.css'
function Navbar(){
    return(
        <nav className=" navbar text-green-900 font-light flex justify-between items-center">
        <h2 className=" brand ml-40 font-bold text-[40px] ">Portfolio</h2>
        <ul className="link flex space-x-11 mr-40 ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Course</li>
        </ul>
        <button type="button" class="btn bg-green-900 text-white w-36 rounded-lg mr-3 mt-3 h-10">
            Download CV
      </button>
    </nav>
    )
}
export default Navbar;