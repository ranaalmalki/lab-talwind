
function Featuer() {
  return (
    <div className=" flex justify-evenly bg-[#f5f5f5] p-24 flex-col md:flex-row">
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
    src="./src/assets/Untitled(5).png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Feature 1</h2>
    <p>Talk about some of the details of your offer with a focus on the value people get back.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
    src="./src/assets/Untitled(6).png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <h2 className="card-title">Feature 2</h2>
  <p>Is there a pain point that your product service resolves? Tell visitors about it here.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
    src="./src/assets/Untitled(7).png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <h2 className="card-title">Feature 3</h2>
  <p>Alternatively, you could use this section to address some
  frequently asked questions.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default Featuer