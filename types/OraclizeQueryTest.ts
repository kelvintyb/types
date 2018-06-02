/* GENERATED BY TYPECHAIN VER. 0.1.5 */
/* tslint:disable */

import { BigNumber } from 'bignumber.js';
import {
  TypeChainContract,
  promisify,
  ITxParams,
  IPayableTxParams,
  DeferredTransactionWrapper
} from './typechain-runtime';

export class OraclizeQueryTest extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: 'QUERY_CALLBACK_GAS',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: 'queryIDCompleted', type: 'bytes32' }],
        name: 'QueryCompleted',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: true, name: 'queryIDScheduled', type: 'bytes32' }],
        name: 'QueryScheduled',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [{ indexed: false, name: 'value', type: 'uint256' }],
        name: 'QueryPrice',
        type: 'event'
      },
      {
        constant: false,
        inputs: [
          { name: 'oracleDataSource', type: 'string' },
          { name: 'oracleQuery', type: 'string' }
        ],
        name: 'testOracleQuery',
        outputs: [{ name: '', type: 'bytes32' }],
        payable: true,
        stateMutability: 'payable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'queryID', type: 'bytes32' }],
        name: 'getQueryResults',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'oracleDataSource', type: 'string' }],
        name: 'getQueryCost',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'myid', type: 'bytes32' }, { name: 'result', type: 'string' }],
        name: '__callback',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'queryID', type: 'bytes32' },
          { name: 'result', type: 'string' },
          { name: 'proof', type: 'bytes' }
        ],
        name: '__callback',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(
    web3: any,
    address: string | BigNumber
  ): Promise<OraclizeQueryTest> {
    const contract = new OraclizeQueryTest(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);
    if (code === '0x0') {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get QUERY_CALLBACK_GAS(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.QUERY_CALLBACK_GAS, []);
  }
  public getQueryResults(queryID: BigNumber): Promise<string> {
    return promisify(this.rawWeb3Contract.getQueryResults, [queryID.toString()]);
  }

  public testOracleQueryTx(
    oracleDataSource: string,
    oracleQuery: string
  ): DeferredTransactionWrapper<IPayableTxParams> {
    return new DeferredTransactionWrapper<IPayableTxParams>(this, 'testOracleQuery', [
      oracleDataSource.toString(),
      oracleQuery.toString()
    ]);
  }
  public getQueryCostTx(oracleDataSource: string): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'getQueryCost', [
      oracleDataSource.toString()
    ]);
  }
  public __callbackTx(myid: BigNumber, result: string): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, '__callback', [
      myid.toString(),
      result.toString()
    ]);
  }
}
