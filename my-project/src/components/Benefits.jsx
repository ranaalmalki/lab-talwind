
function Benefits() {
  return (
    <div className="text-center">
        <h1 className="font-bold text-lg">Here are some of the benefits of your offer</h1>
        <p>Explain What makes your or service great.Tlk about featuers in a way that highlights the real value people get out of them</p>
        <div className=" flex justify-center justify-evenly items-center flex-col md:flex-row ">
        <div className="card shadow-md w-40">
            <div className="card-body">
            <img
            className="img-top w-20" 
            src="./src/assets/Untitled(3).png" 

            />
            <h4 className="card-title ">Benefit 1</h4>
            <p className="card-text">For example, restaurants and bakeries could outline the health benefits of their all- natural ingredients.</p>
            
</div>


        </div>
        <div className="card shadow-md shadow-black  w-40">
            <div className="card-body">
            <img
            className="img-top w-20" 
            src="./src/assets/Untitled(1).png" 

            />
            <h4 className="card-title">Benefit 2</h4>
            <p className="card-text">Florists and other small retailers. might use this space to describe how their products make delightful, one-of-a-kind gifts.</p>
            
</div>


        </div>
        <div className="card shadow-md shadow-black  w-40">
            <div className="card-body">
            <img
            className="img-top w-20" 
            src="./src/assets/Untitled(2).png" 

            />
            <h4 className="card-title">Benefit 3</h4>
            <p className="card-text">You could also add buttons to this section and share links to other products or available delivery methods.</p>
            
</div>


        </div>


        </div>
    </div>
  )
}

export default Benefits