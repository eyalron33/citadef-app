import CardMainpage from "./cardMainpage"
import {useWindowDimensions} from  "./helpers/sizeUtils"


function FishCards(props) {
    let fish_rows = [];
    let big_fish_size = "";
    let small_fish_size = "";

    let {width} = useWindowDimensions();
    if (width > 992) {
        big_fish_size = "600";
        small_fish_size = "265"
    }
    else {
        big_fish_size = "250";
        small_fish_size = "250"
    }

    const fishes = props.fishes;
    const fishes_keys = Object.keys(props.fishes);



    let direction = "right";
    for (let i=0; i<= Math.floor((fishes_keys.length-1)/5); i++) {

        const big_fish = fishes[fishes_keys[i*5]];
        let big_fish_element = 
                <div className="col-md-6">
                <CardMainpage key={'fish0'} nick={big_fish.nick} seed={big_fish.seed} posts={big_fish.posts} col="col-md-12" size={big_fish_size} key={big_fish.seed} direction={direction} />
                </div>;

        direction = (direction=="right") ? direction = "left" : direction = "right";
        let small_fishes = [];
        if (i < Math.floor((fishes_keys.length-1)/5)) {
            for (let j=1; j<5; j++) {
                let small_fish = fishes[fishes_keys[5*i+j]];
                small_fishes.push(<CardMainpage key={'fish' + i.toString() + '|' + j.toString()} nick={small_fish.nick} seed={small_fish.seed} key={small_fish.seed} posts={small_fish.posts} col="col-md-6" size={small_fish_size} direction={direction}/>);
            }

        } else {
             for (let j=1; j<=(fishes_keys.length-1) % 5; j++) {
                 let small_fish = fishes[fishes_keys[5*i+j]];
                 small_fishes.push(<CardMainpage key={'fish' + i.toString() + '|' + j.toString()} nick={small_fish.nick} seed={small_fish.seed} key={small_fish.seed} posts={small_fish.posts} col="col-md-6" size={small_fish_size} direction={direction}/>);
             }
        }

        // odd rows (count of i begin from 0)
        if (i% 2 == 0) {
            fish_rows[i] = (
                <div  key={i} className="row">
                    {big_fish_element}
                    <div className="col-md-6">
                        <div className="row">
                            {small_fishes}
                        </div>
                    </div>
                </div>
            )
        } 
        // even rows
        else {
            fish_rows[i] = (
                <div key={i} className="row">
                    <div className="col-md-6">
                        <div className="row">
                            {small_fishes}
                        </div>
                    </div>
                    {big_fish_element}
                </div>
            )
        }
    }


    return (
        <div>
            {fish_rows}
            
        </div>
    )
}



function Citadef(props) {

    return ( 
         <section id="section-collections" className="pt30 pb30">
                <div className="container relative-position">
                    <div className="col-lg-12 top-100">
                        <h2 className="style-2">The Citadef Council -- number of fishes: {props.minted}</h2>
                    </div>
                    <div className="bg-main-middle-left d-none d-lg-block"></div>
                    <div className="bg-main-middle-right d-none d-lg-block"></div>
                    <FishCards fishes={props.fishes} />
                </div>
            </section>
    )
}

export default Citadef;