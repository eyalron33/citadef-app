//import { create } from 'ipfs-core'

const CITADEF_IPFS_NODE = "https://ipfs2.dwebservices.xyz:8080/api/v0" 

const all = require('it-all')
const { concat: uint8ArrayConcat } = require('uint8arrays/concat')

async function fetchCID(ipfs, cid) {
    // if (node == null)
    //     await connect();

    let file_txt = new TextDecoder().decode(uint8ArrayConcat(await all(ipfs.cat(cid))));

    return file_txt;

}




export { fetchCID, CITADEF_IPFS_NODE };