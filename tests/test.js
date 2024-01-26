const assert = require('assert');
const encrypt = require('../encrypt');

test("Same encryption for the same input", () => {
  var input = "test";
  var encrypted1 = encrypt.sha1(input);
  var encrypted2 = encrypt.sha1(input);
  assert.equal(encrypted1, encrypted2);
  assert.equal(true, encrypt.compareSha1(input, encrypted1));
});

test("Different encryption for different input", () => {
    var input1 = "test";
    var input2 = "test2";
    var encrypted1 = encrypt.sha1(input1);
    var encrypted2 = encrypt.sha1(input2);
    assert.notEqual(encrypted1, encrypted2);
    assert.equal(true, encrypt.compareSha1(input1, encrypted1));
    assert.equal(false, encrypt.compareSha1(input2, encrypted1));
    assert.equal(true, encrypt.compareSha1(input2, encrypted2));
    assert.equal(false, encrypt.compareSha1(input1, encrypted2));
});