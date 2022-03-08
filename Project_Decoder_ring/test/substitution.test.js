// Write your tests here!
const {substitution} = require('../src/substitution');
const expect = require('chai').expect;

describe('substitution', () => {
    it('Encode, no spaces', () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
        expect(actual).to.equal(expected);
    });

    it('Encode, with spaces', () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    });   

    it("decode with no spaces", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    });

    it("encode, special characters", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected);
    });

    it("decode special characters", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = 'message';
        expect(actual).to.equal(expected);
    });

    it("too short", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("dublicate characters", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabc");
        const expected = false;
        expect(actual).to.equal(expected);
    });
});