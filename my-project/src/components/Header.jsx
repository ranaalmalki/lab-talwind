import background from "../assets/Screen Shot 2023-11-26 at 10.49.03 AM_cleanup.png"

function Header() {
    return (
        <div>

            <div className="artical p-24" style={{ backgroundImage: `url(${background})` }}>
                <h2 className="text-white ">FreshGoods</h2>
                <h1 className="text-white header">Concisely describe your product or service</h1>
                <p className="text-white">no need to get clever.Tall peop;e exaclty what you'r offering,then use this space to communicate your key value propostion</p>
                <button className="btn btn-warning ">ORDER NOW</button>

            </div>
        </div>


    )
}

export default Header