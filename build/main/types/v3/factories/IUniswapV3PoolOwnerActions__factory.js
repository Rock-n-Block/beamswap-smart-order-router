"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IUniswapV3PoolOwnerActions__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address",
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
        name: "collectProtocol",
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
                internalType: "uint8",
                name: "feeProtocol0",
                type: "uint8",
            },
            {
                internalType: "uint8",
                name: "feeProtocol1",
                type: "uint8",
            },
        ],
        name: "setFeeProtocol",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IUniswapV3PoolOwnerActions__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IUniswapV3PoolOwnerActions__factory = IUniswapV3PoolOwnerActions__factory;
IUniswapV3PoolOwnerActions__factory.abi = _abi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVVuaXN3YXBWM1Bvb2xPd25lckFjdGlvbnNfX2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdHlwZXMvdjMvZmFjdG9yaWVzL0lVbmlzd2FwVjNQb29sT3duZXJBY3Rpb25zX19mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBK0M7QUFDL0Msb0JBQW9CO0FBQ3BCLG9CQUFvQjs7O0FBR3BCLG1DQUFpRDtBQU1qRCxNQUFNLElBQUksR0FBRztJQUNYO1FBQ0UsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLFlBQVksRUFBRSxTQUFTO2dCQUN2QixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO1FBQ0QsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixPQUFPLEVBQUU7WUFDUDtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLFNBQVM7YUFDaEI7WUFDRDtnQkFDRSxZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELGVBQWUsRUFBRSxZQUFZO1FBQzdCLElBQUksRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDRSxNQUFNLEVBQUU7WUFDTjtnQkFDRSxZQUFZLEVBQUUsT0FBTztnQkFDckIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSxPQUFPO2FBQ2Q7WUFDRDtnQkFDRSxZQUFZLEVBQUUsT0FBTztnQkFDckIsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLElBQUksRUFBRSxPQUFPO2FBQ2Q7U0FDRjtRQUNELElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsT0FBTyxFQUFFLEVBQUU7UUFDWCxlQUFlLEVBQUUsWUFBWTtRQUM3QixJQUFJLEVBQUUsVUFBVTtLQUNqQjtDQUNGLENBQUM7QUFFRixNQUFhLG1DQUFtQztJQUU5QyxNQUFNLENBQUMsZUFBZTtRQUNwQixPQUFPLElBQUksY0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQXdDLENBQUM7SUFDMUUsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBZSxFQUNmLGdCQUFtQztRQUVuQyxPQUFPLElBQUksaUJBQVEsQ0FDakIsT0FBTyxFQUNQLElBQUksRUFDSixnQkFBZ0IsQ0FDYSxDQUFDO0lBQ2xDLENBQUM7O0FBZEgsa0ZBZUM7QUFkaUIsdUNBQUcsR0FBRyxJQUFJLENBQUMifQ==