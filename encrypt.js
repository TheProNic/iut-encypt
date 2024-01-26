"use strict";

const crypto = require('crypto');

class Encrypt {
    static sha1(plainText) {
        return crypto.createHash('sha1').update(plainText).digest('hex');
    }

    static compareSha1(plainText, encrypted) {
        return this.sha1(plainText) === encrypted;
    }
}

module.exports = Encrypt;