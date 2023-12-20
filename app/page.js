
import Navbar from './navbar'
import Herosection from './herosection';
 import './App.css'; 
 import './Mobile.css'
import HoverRating from './hoverrating';
import Sociallink from './sociallink';
export default function Home() {
  return (
    <div>

 <Navbar/>
 <Herosection/>
 <div className="hoverrating absolute left-[850px] top-[500px] bg-zinc-300 h-12 w-60 rounded-lg pl-5 pt-3">
  < HoverRating/>
 </div>
 <div className="sociallink text-orange-300 absolute left-[100px] top-[500px]">
  <Sociallink/>
 </div>
 
    </div>
   
  )
}
