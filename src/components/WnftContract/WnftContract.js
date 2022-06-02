import { ethers } from "ethers";

const handleContractTXWait = async (contractCallPromise) => {
    const contractCallTx = await contractCallPromise
    await contractCallTx.wait()
}


export const setTokenURI = async (contract, tokenId, tokenUri) => {
    try{
        await handleContractTXWait(contract.setTokenURI(tokenId, tokenUri))
    }catch(e) {
        throw e.message;
    } 
}         


export const mintWithTokenURI = async (contract, mintTo, tokenId, tokenUri) =>{
    try{
        await handleContractTXWait(contract.mintWithTokenURI(ethers.utils.getAddress(mintTo), tokenId, tokenUri, { value: ethers.utils.parseEther("0.0001") } ))
    }catch(e) {
        throw e.message;
    } 
} 