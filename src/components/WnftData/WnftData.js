import { ethers } from "ethers";
import { useEffect } from "react";
import "../WNFTABI.js"
import { fetchCID as ipfsFetchCID } from  '../ipfs.js';

const RPC_URL = 'https://goerli.infura.io/v3/6158037dd7f84107aa16d631689c6674';



const handleNToken = async (i, NFTW_contract, ipfs) => {
    let fishSeed = await NFTW_contract.NthToken(i);
    //fishSeed = parseInt(fishSeed._hex, 16);
    const fishSeedInt = ethers.BigNumber.from(parseInt(fishSeed._hex, 16).toString());
    let fishCID = await NFTW_contract.tokenURI(fishSeedInt);
    const fishJSON = await ipfsFetchCID(ipfs, fishCID);
    const fishJSONData = JSON.parse(fishJSON);
    

    const owner = await NFTW_contract.ownerOf(fishSeedInt);
    return {fishJSONData, fishSeed, owner};
    
  };

const addToOwners = (owners, owner, fishSeed) =>{
    if (owners[owner])
       owners[owner][fishSeed] = true;
     else {
       owners[owner] = {};
       owners[owner][fishSeed] = true;
     }
     return owners;
}


const getAllFishes = async (totalMinted, NFTW_contract, ipfs) => {
    let items  = [];
    for (let i=0;i<totalMinted;i++){
        items.push( handleNToken(i, NFTW_contract, ipfs) )
    }

    let fishesCollection = {};
    let owners = {};
    const results = await Promise.allSettled(
        items
    );
    let totalFetched = 0;

    results.forEach((result) => {
        if(result.status==='fulfilled'){
            const {fishJSONData, fishSeed, owner} = result.value;
            fishesCollection[fishSeed] = fishJSONData;
            owners = addToOwners(owners, owner, fishSeed);
            totalFetched++;
        }
    })

    return {fishesCollection, owners, totalFetched}
};

const fetchFishes = async (props) => {
    try {
        var chainId = false;

        try{
            if (window.ethereum)
                chainId = await window.ethereum.request({ method: 'eth_chainId' });
        }catch{}

        const provider = (window.ethereum && chainId === "0x5" && new ethers.providers.Web3Provider(window.ethereum )) || new ethers.providers.JsonRpcProvider(RPC_URL);

        const signer = provider.getSigner(0);
        if (signer !== null) {

            const NFTWContractAddress = global.wnft.address;
            let WNFTabi = global.wnft.abi;
            let NFTW_contract = new ethers.Contract(NFTWContractAddress, WNFTabi, provider);

            const contractMinted = await NFTW_contract.amount();
            const contractMintedInt = parseInt(contractMinted._hex, 16)
            
            getAllFishes(contractMintedInt, NFTW_contract, props.ipfs).then((result) => {
                const {owners, fishesCollection, totalFetched} = result;
                props.setFishowners(owners);
                props.setFishes(fishesCollection);
                props.setMinted(totalFetched);
            });

        }
    } catch (error) {
        console.error(error);
    }
}


const WnftData = (props) => {
    
    useEffect(() => {
        if(props.isIpfsReady){
            fetchFishes(props)
        }
    }, [props.isIpfsReady]);
    return (<></>)
}


export default WnftData;