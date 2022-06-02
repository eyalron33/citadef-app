import { ethers } from "ethers";
import { useEffect } from "react";
import "./InviteTokenABI.js"


const RPC_URL = 'https://goerli.infura.io/v3/6158037dd7f84107aa16d631689c6674';


const invitationTokensAmount = async (address) => {
    try {
        var chainId = false;

        try{
            if (window.ethereum)
                chainId = await window.ethereum.request({ method: 'eth_chainId' });
        }catch{}

        const provider = (window.ethereum && chainId === "0x5" && new ethers.providers.Web3Provider(window.ethereum )) || new ethers.providers.JsonRpcProvider(RPC_URL);

        const signer = provider.getSigner(0);
        if (signer !== null) {

            const InviteTokenContractAddress = global.inviteToken.address;
            let InviteTokenAbi = global.inviteToken.abi;
            let InviteTokenContract = new ethers.Contract(InviteTokenContractAddress, InviteTokenAbi, provider);

            const tokenAmount = await InviteTokenContract.balanceOf(address);
            const tokenAmountInt = parseInt(tokenAmount._hex, 16)
            
            return tokenAmountInt;

        }
    } catch (error) {
        console.error(error);
        return 0;
    }
}



export default invitationTokensAmount;