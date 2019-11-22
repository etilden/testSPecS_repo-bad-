const { expect } = require('chai')
const { assert } = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
    it('Returns empty string if empty string was provided', () => {
      expect(wrap("", 10)).to.equal("");
    });
    it('The length of any line does not exceed max length', () => {
        let text = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."
        return assert(wrap(text, 20).split("\n")
        .filter(line =>line.length > 20).length === 0, "bad news")
    })
    it('does not divide in the middle of words and returns all of the text', () => {
        let text = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."
        let textArr = text.split(' ')
        let divided = wrap(text,10).split('\n').join(' ').split(/[\s]+/g)
        return assert(textArr.filter((elem, i) => elem !== divided[i]).length === 0, "not good")
    })
    it('returns an error if the length of any single word is greater than the length specified by maxLen', () => {
        let text = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."
        console.log(wrap(text, 3))
        return assert(wrap(text, 3)==='you lose', "bad")
    })
  });

