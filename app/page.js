
import Navbar from './Navbar'
import Herosection from './Herosection';
 import './App.css'; 
 import './Mobile.css'
import HoverRating from './HoverRating';
import Sociallink from './Sociallink';

import { ClassNames } from '@emotion/react';

export default function Home() {
  return (
    <div>

 <Navbar/>
 <Herosection/>
 <div className="hoverrating absolute left-[850px] top-[500px] bg-zinc-300 h-12 w-60 rounded-lg pl-5 pt-3">
  < HoverRating/>
 </div>
 <div className="sociallink text-orange-300 absolute left-60 top-[500px]">
  <Sociallink/>
 </div>
 
    </div>
   
  )
}
