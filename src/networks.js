module.exports = {
    qtum: {
        messagePrefix: '\x15Butk Signed Message:\n',
        bech32: 'bc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x4c,
        scriptHash: 0x10,
        wif: 0xc
    },
    qtum_testnet: {
        messagePrefix: '\x15Qtum Signed Message:\n',
        bech32: 'tb',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x8c,
        scriptHash: 0x13,
        wif: 0xef
    }
}
