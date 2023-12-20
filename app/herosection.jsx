import './Mobile.css';

function Herosection(){
    return(
        <div class="container ">
   <div class="hero-text">
    <h1 className="herotext absolute left-[90px] top-[100px] text-green-900 font-bold text-[50px] ">Hey!!</h1>
    <h1 className="iam absolute left-[100px] top-[150px] text-[70px]">I Am Aneesh</h1>
   </div>
   <div className="ss">
    <img className="heroimg heroimage absolute left-[500px] top-[250px] h-[250px] w-[300px] rounded-full shadow-lg" src="hh.jpg" alt="hi" />
     <img className="vectorimg absolute left-[210px] top-[250px] w-72" src="Vector.png" alt="" />
    <p className="leftsidetext absolute text-green-900 left-[900px] top-[200px]">I design beautifully simple things,<br/>and I love what i do.</p>

   </div>
   
        </div>
    )
}
export default Herosection;