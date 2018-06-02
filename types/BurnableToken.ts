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

export class BurnableToken extends TypeChainContract {
  public readonly rawWeb3Contract: any;

  public constructor(web3: any, address: string | BigNumber) {
    const abi = [
      {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: '_owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }],
        name: 'transfer',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'burner', type: 'address' },
          { indexed: false, name: 'value', type: 'uint256' }
        ],
        name: 'Burn',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'from', type: 'address' },
          { indexed: true, name: 'to', type: 'address' },
          { indexed: false, name: 'value', type: 'uint256' }
        ],
        name: 'Transfer',
        type: 'event'
      },
      {
        constant: false,
        inputs: [{ name: '_value', type: 'uint256' }],
        name: 'burn',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ];
    super(web3, address, abi);
  }

  static async createAndValidate(web3: any, address: string | BigNumber): Promise<BurnableToken> {
    const contract = new BurnableToken(web3, address);
    const code = await promisify(web3.eth.getCode, [address]);
    if (code === '0x0') {
      throw new Error(`Contract at ${address} doesn't exist!`);
    }
    return contract;
  }

  public get totalSupply(): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.totalSupply, []);
  }
  public balanceOf(_owner: BigNumber | string): Promise<BigNumber> {
    return promisify(this.rawWeb3Contract.balanceOf, [_owner.toString()]);
  }

  public transferTx(
    _to: BigNumber | string,
    _value: BigNumber | number
  ): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'transfer', [
      _to.toString(),
      _value.toString()
    ]);
  }
  public burnTx(_value: BigNumber | number): DeferredTransactionWrapper<ITxParams> {
    return new DeferredTransactionWrapper<ITxParams>(this, 'burn', [_value.toString()]);
  }
}
