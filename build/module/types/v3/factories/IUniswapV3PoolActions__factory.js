/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
        ],
        name: "burn",
        outputs: [
            {
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount0Requested",
                type: "uint128",
            },
            {
                internalType: "uint128",
                name: "amount1Requested",
                type: "uint128",
            },
        ],
        name: "collect",
        outputs: [
            {
                internalType: "uint128",
                name: "amount0",
                type: "uint128",
            },
            {
                internalType: "uint128",
                name: "amount1",
                type: "uint128",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "flash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint16",
                name: "observationCardinalityNext",
                type: "uint16",
            },
        ],
        name: "increaseObservationCardinalityNext",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint160",
                name: "sqrtPriceX96",
                type: "uint160",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "int24",
                name: "tickLower",
                type: "int24",
            },
            {
                internalType: "int24",
                name: "tickUpper",
                type: "int24",
            },
            {
                internalType: "uint128",
                name: "amount",
                type: "uint128",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "mint",
        outputs: [
            {
                internalType: "uint256",
                name: "amount0",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount1",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "bool",
                name: "zeroForOne",
                type: "bool",
            },
            {
                internalType: "int256",
                name: "amountSpecified",
                type: "int256",
            },
            {
                internalType: "uint160",
                name: "sqrtPriceLimitX96",
                type: "uint160",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "swap",
        outputs: [
            {
                internalType: "int256",
                name: "amount0",
                type: "int256",
            },
            {
                internalType: "int256",
                name: "amount1",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
export class IUniswapV3PoolActions__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
IUniswapV3PoolActions__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVVuaXN3YXBWM1Bvb2xBY3Rpb25zX19mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3R5cGVzL3YzL2ZhY3Rvcmllcy9JVW5pc3dhcFYzUG9vbEFjdGlvbnNfX2ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFHcEIsT0FBTyxFQUFFLFFBQVEsRUFBVSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFNakQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLFlBQVksRUFBRSxPQUFPO2dCQUNyQixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLFlBQVksRUFBRSxPQUFPO2dCQUNyQixJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUU7WUFDUDtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUU7WUFDTjtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxTQUFTO2FBQ2hCO1lBQ0Q7Z0JBQ0UsWUFBWSxFQUFFLE9BQU87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