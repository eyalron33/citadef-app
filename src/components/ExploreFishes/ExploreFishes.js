import FishCards from "../FishCards/FishCards";



function ExploreFishes(props) {

    return ( 
         <section id="section-collections" className="pt30 pb30">
                <div className="container relative-position">
                    <div className="col-lg-12 top-100">
                        <h2 className="style-2">The Citadef Council -- number of fishes: {props.minted}</h2>
                    </div>
                    <div className="bg-main-middle-left d-none d-lg-block"></div>
                    <div className="bg-main-middle-right d-none d-lg-block"></div>
                    <FishCards fishes={props.fishes}  />
                </div>
            </section>
    )
}

export default ExploreFishes;