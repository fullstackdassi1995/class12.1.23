const assert = require('assert')
const expect = require('chai').expect
const calc = require('./calculator')

describe('Testing basic functionality of the calculator' ,() => {

    it('Two arrays whose terms are equal  ([54, nir , 12] ,[54, nir , 12])' , () => {
        const actual = calc.is_equal([54, 'nir' , 12] ,[54, 'nir' , 12])
        const expected = true
        assert.strictEqual(expected , actual)
    })

    it('Two arrays whose elements are different ([54, 38 , 54 ] , [Nir , 12 , Nir])' , () => {
        const actual = calc.is_equal([54, 38 , 54 ] , ['Nir' , 12 , 'Nir'])
        const expected = false
        assert.strictEqual(expected , actual)
    })

    it('Two arrays whose terms are equal ([0, 9 , 0 , 83] , [0 , 9 , 0 , 83])' , () => {
        const actual = calc.is_equal([0, 9 , 0 , 83] , [0 , 9 , 0 , 83])
        const expected = true
        assert.strictEqual(expected , actual)
    })

    it('The first parameter is an array and the second is a number ([5658 , 5658] , 5658)' , () => {
        assert.throws(() => {
            const actual = calc.is_equal([5658 , 5658] , 5658)
        }) 
    })

    it('The second parameter is an array and the first is a number (122 , [dan , ron])' , () => {
        assert.throws(() => {
            const actual = calc.is_equal(122 , [dan , dan])
        }) 
    })

    it('The second parameter is an array and the first is a number (-12.5 , [38 , 23])' , () => {
        assert.throws(() => {
            const actual = calc.is_equal(-12.5 , [38 , 23])
        }) 
    })





    it('The first number is greater than the second (18 , 3 )' , () =>{
        const actual = calc.is_bigger(18, 3)
        const expected = true
        assert.strictEqual(expected , actual)
    })

    it('The second number is greater  (18 , 33 )' , () =>{
        const actual = calc.is_bigger(18, 33)
        const expected = false
        assert.strictEqual(expected , actual)
    })

    it('First parameter is not a number  (bill , 33 )' , () =>{
        assert.throws(() => {
            const actual = calc.is_bigger(bill , 33 )
        }) 
    })

    it('Second parameter is not a number  (-45 , david )' , () =>{
        assert.throws(() => {
            const actual = calc.is_bigger(-45 , david )
        }) 
    })

    it('The first number is greater than the second (0 , -13 )' , () =>{
        const actual = calc.is_bigger(0 , -13 )
        const expected = true
        assert.strictEqual(expected , actual)
    })

    it('The second number is greater  (18*2 , 33+15 )' , () =>{
        const actual = calc.is_bigger(18*2 , 33+15 )
        const expected = false
        assert.strictEqual(expected , actual)
    })
})