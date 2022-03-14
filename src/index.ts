import { ethers } from "ethers";

function getEth(){
    // @ts-ignore
    const eth = window.ethereum;
    if (!eth) {
        throw new Error("get metamask and a positive attitude")
    }
    return eth;
}

async function hasAccounts() {
    const eth = getEth();
    const accounts = await eth.request({method: "eth_accounts"}) as string[];

    return accounts && accounts.length;
}

async function requestAccounts() {
    const eth = getEth();
    const accounts = await eth.request({method: "eth_requestAccounts"}) as string[];

    return accounts && accounts.length;
}

async function run() {
    if(!await hasAccounts() && !await requestAccounts()) {
        throw new Error("Please let me take your money");
    }

    const hello = new ethers.Contract(
        "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9",
        [
            "function hello() public pure returns (string memory)",
        ],
        new ethers.providers.Web3Provider(getEth()),
    )

    document.body.innerHTML = await hello.hello();
}

run()