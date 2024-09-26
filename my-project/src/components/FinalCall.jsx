import background from "../assets/Screen Shot 2023-11-26 at 11.03.28 AM_cleanup.png"

function FinalCall() {
  return (
    <div className="">
        
    <div className=" text-center"style={{backgroundImage: `url(${background})`}}>
        <h1 className="text-black">End with one final call to action </h1>
    <p className="text-black">Share a real testimonial that hits some of your benefits (but is't too sales-y)</p>
    
       <button  className="btn btn-warning ">ORDER NOW</button>

    </div>
        </div>  )
}

export default FinalCall