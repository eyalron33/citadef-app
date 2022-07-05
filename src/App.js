import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import LandingScreen from "./components/landingScreen"
import Citadef from "./components/Citadef"
import SelectWNFTtoMint from "./components/selectWNFTtoMint"
import MintWNFTScreen from "./components/MintWnft/MintWNFTScreen"
import EditWnft from "./components/EditWnft/EditWnft"
import FishPersonal from "./components/FishPersonal"
import SinglePost from "./components/SinglePost/SinglePost"
import EditPost from "./components/EditPost/EditPost"
import NewPost from "./components/EditPost/NewPost"
import {Error404, UnderConstruction} from "./components/loadingProcess"
import About from "./components/about"

import ScrollToTop from "./components/scroll_to_top";

import WnftData from "./components/WnftData/WnftData";
import invitationTokensAmount from "./components/InvitationTokenData/InvitationTokenData";
import useIpfsFactory from "./components/hooks/useIpfsFactory"


import './components/WNFTABI.js'; 


//TODO:
//3. Change 'Manage Fish' to 'My Fish' and lead to personal fish page
//4. Change main screen for 15 fishes
//5. Link Explore to Citadef part
//6. Write that search is inactive now
//7. Create 'feature doesn't exist yet' screen
//8. Footer
//9. Make sure post starts with title
//10. Limit to 5 posts (no pagination yet message)
//11. Fix markdown style in single post view
//12. fix size of preview screen in 'edit post page' and in 'new post'
//13. what to do if we got 1500 fishes?
function App() {
  const [provider, setProvider] = useState(null);
  const [NFTWContract, setNFTWContract] = useState(null);
  const [NFTWWithSigner, setNFTWWithSigner] = useState(null);
  const [fishes, setFishes] = useState([]);
  const [minted, setMinted] = useState(0);
  const [fishOwners, setFishowners] = useState({});
  const [wallet, setWallet] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [ownFish, setOwnFish] = useState(false);
  const [hasInvitationToken, setHasInvitationToken] = useState(false);

  const initState = {wallet: false, ownFish: false, address: null};
  const [userState, setUserState] = useState(initState);
  const { ipfs, ipfsInitError, isIpfsReady } = useIpfsFactory({ commands: ['id'] });

  const InvitationTokensNeeded = 0;

  // setup userState
  var signer;
  if (provider) { 
    // set that wallet exists
    if (wallet == false) 
      setWallet(true)

    // check if ownFish and address need to be updated
    if (signer !== null) {
      if (!ownFish) {
          provider.listAccounts().then(async(res)=>{
            if (res.length > 0) {
              if (res !== walletAddress) 
                setWalletAddress(res[0]);

              if (await invitationTokensAmount(res[0]) >= InvitationTokensNeeded)
                setHasInvitationToken(true);

              if (fishOwners[res[0]]) 
                setOwnFish(true);
            }
          });
      }
    }
  }

  const headerObj = (<Header provider={provider} setProvider={setProvider}
                        NFTWContract={NFTWContract} setNFTWContract={setNFTWContract}
                        NFTWWithSigner={NFTWWithSigner} setNFTWWithSigner={setNFTWWithSigner}
                        wallet={wallet} ownFish={ownFish} hasInvitationToken={hasInvitationToken}/>);



  return (
    <Router basename="/">
    <WnftData setMinted={setMinted} setFishes={setFishes} setFishowners={setFishowners}  ipfs={ipfs} isIpfsReady={isIpfsReady} />
    <ScrollToTop />
      <Switch>
        <Route exact path="/">
          {headerObj}
          <LandingScreen/>
          <Citadef fishes={fishes} minted={minted}/>
          <Footer/>
          <div className="bg-main-top"></div>
          <div className="bg-main-bottom"></div>
        </Route>
        <Route path="/mint/select">
        {headerObj}
          <SelectWNFTtoMint/>
          <Footer/>
          <div className="bg-main-top"></div>
        </Route>
        <Route path="/mint/details/:seed">
        {headerObj}
          <MintWNFTScreen NFTWWithSigner={NFTWWithSigner} provider={provider} walletAddress={walletAddress}  ipfs={ipfs} isIpfsReady={isIpfsReady} />
          <Footer/>
        </Route>
        <Route path="/personal/edit/:seed">
        {headerObj}
          <EditWnft NFTWWithSigner={NFTWWithSigner} fishes={fishes} walletAddress={walletAddress}  ipfs={ipfs} isIpfsReady={isIpfsReady} />
          <Footer/>
        </Route>
        <Route path="/personal/post/edit/:seed/:post">
        {headerObj}
          <EditPost 
            NFTWWithSigner= {NFTWWithSigner}
            fishes ={fishes}
            walletAddress={walletAddress}
            fishOwners={fishOwners}
            ipfs={ipfs} isIpfsReady={isIpfsReady}
          />
          <Footer/>
          <div className="bg-blog-top"></div>
        </Route>
        <Route path="/personal/post/:seed/:post">
        {headerObj}
          <SinglePost fishes ={fishes} walletAddress={walletAddress} fishOwners = {fishOwners}  />
          <Footer/>
        </Route>
        <Route path="/personal/new/:seed">
        {headerObj}
          <NewPost 
            NFTWWithSigner= {NFTWWithSigner}
            fishes ={fishes}
            walletAddress={walletAddress}
            fishOwners={fishOwners}
            ipfs={ipfs} isIpfsReady={isIpfsReady}
          />
          <Footer/>
          <div className="bg-blog-top"> </div>
        </Route>
        <Route path="/personal/:seed">
        {headerObj}
          <FishPersonal fishes ={fishes} ownFish={ownFish} walletAddress={walletAddress} fishOwners = {fishOwners}/>
          <Footer/>
          <div className="bg-blog-top"> </div>
        </Route>
        <Route path="/404">
        {headerObj}
          <Error404/>
          <Footer/>
          <div className="bg-blog-top"> </div>
        </Route>
        <Route path="/about">
        {headerObj}
          <About/>
          <Footer/>
          <div className="bg-main-top"></div>
        </Route>
        
        /********************************************* 
         * Screens which are still under construction
         **********************************************/
        <Route path="/govern">
        {headerObj}
          <UnderConstruction 
            title="governing section"
            reason="Governing will come once the decentralized accounts and blogging is more stable. Recall, the idea is that one full member = one vote, but it should take a while to gain enough reputation to become a full member."/>
          <Footer/>
          <div className="bg-main-top"></div>
        </Route>
        <Route path="/world">
        {headerObj}
          <UnderConstruction 
            title="Virtual Fish world"
            reason="A virtual fish world is just something that sounds cool in our head, but we actually have no idea what do we mean by this. Suggestions are welcomed!"/>
          <Footer/>
          <div className="bg-main-top"></div>
        </Route>
        <Route path="/plot">
        {headerObj}
          <UnderConstruction 
            title="Plot in the Virtual Fish world"
            reason="A virtual fish world is just something that sounds cool in our head, and even cooler then this, it sounds nice to have a plot in this world. However, we really don't know what it means yet."/>
          <Footer/>
          <div className="bg-main-top"></div>
        </Route>
        <Route path="/democraticweb">
        {headerObj}
          <UnderConstruction 
            title="Democratic Web"
            reason="Here should be a link to an article of our vision to what the democratic web should be like. Alas, we did not write it yet! So, be patient, and don't wait in the sun."/>
          <Footer/>
          <div className="bg-main-top"></div>
        </Route>
        <Route path="/mailinglist">
        {headerObj}
          <UnderConstruction 
            title="Mailing List"
            reason="We don't have a mailing list yet. Not sure we will ever have. But we needed another link to put in the footer, and mailing list sounds 'professional', right?"/>
          <Footer/>
          <div className="bg-main-top"></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
