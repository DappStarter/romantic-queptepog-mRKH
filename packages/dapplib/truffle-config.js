require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind concert grace lonely bone theme'; 
let testAccounts = [
"0x1c72f408f26189f6cf6c5b8c76bde84418534edbe95a5842f8310214439455f4",
"0x1e4131f6de43c2a600a61727ce592159ec64134dce25c1bb41b75660b774ccc1",
"0x243439ac1b40edf6648d5c75d2cb6965bc1b2d7db45e812267634be66a10c73c",
"0xd8a7d777de8cba4617d268da330a49316f04ea96e8ab23abdc2ccaf1ba24ede3",
"0x18438d7c16f205cc3d1b2ff0014930e792558e04b8f681a76ddea9a7483cbbe1",
"0xd2daa19d0b16a221ff1705c9ae77c84721a743d99c228f7464f867727b03033f",
"0x5baa61b92c23ff81f7f19e804deb61b9984abf6ad7f4d8a8e5142e805cc6fc40",
"0xb88626bcabe240ab13fee3ef890466f7f8f585f19ac398c7cc5e110c875bf6df",
"0xe195444c0d82a28217c44b0c7e90f07a58e01810b2d08ede4dc53ba772464998",
"0xb7421abda6a6146ddd75057a71b7768ef3a323e380f49f27c37b03ff7a501782"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

