import FishCards from "./FishCards/FishCards";

const HOME_PAGE_MAX_FISH_SHOW = 5

function Citadef(props) {

    const homePageFishes = Object.fromEntries(Object.entries(props.fishes).sort(() => 0.5 - Math.random()).slice(0, HOME_PAGE_MAX_FISH_SHOW))

    return ( 
         <section id="section-collections" className="pt30 pb30">
                <div className="container relative-position">
                    <div className="col-lg-12 top-100">
                        <h2 className="style-2">The Citadef Council -- number of fishes: {props.minted}</h2>
                    </div>
                    <div className="bg-main-middle-left d-none d-lg-block"></div>
                    <div className="bg-main-middle-right d-none d-lg-block"></div>
                    <FishCards fishes={homePageFishes}  />
                </div>
            </section>
    )
}

export default Citadef;