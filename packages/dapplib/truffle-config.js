require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note oval unit gesture forum equal ghost'; 
let testAccounts = [
"0x6fd5f962a5089a5d39f63ef07bad251eee3c2a05e5f65a7fd2b2ca44ddbc20b2",
"0x318145ad1ed033a5bbb46e61d8860728705a9954a11d0e422f9476b9561f4538",
"0x30000d71b465c2229e2f13aeadc6949878ceaecd8358f0dfa1dbafd688d49488",
"0x7c504af2448608a76ffbe8acfe9631351c6d33a6725a0054abd192c215b8a754",
"0x43b68eda3b9d12314d2e28e5ee04791483a13c331ebdbba98cc4ddfb40ad17c4",
"0x6290daaea3e631992f5dfac72df110a834dac2ec6b99863309ed264e8eab8ed3",
"0x2baa0214bc5d80c0d67d61a2bae82e59cb715c61b7cc45f94c5044c735fbe427",
"0x23fb824756f292468269c20d8a5d41590cad076258d652490ccbfa3b4a3a576c",
"0x0584219b2a1901173362be78fd0254a0a4c9e566d352dc8611d78c246045703d",
"0x1549e501e28e6e29e2fe01acf0560944fcb21dddd1a7aea30aaa5b47902b69c5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
