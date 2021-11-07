import {reducedAvg} from './reduceAvg-hook.js'

describe('reduceAvg', () => {
it('takes in an array and returns the average of all the mass and height attributes in the array', () => {
    const array = [
      { mass: 100, height: 95 },
      { mass: 300, height: 210 },
      { mass: 75, height: 75 },
    ];

     const average = reducedAvg(array)

     expect(average).toEqual({mass:158.33, height:126.67, })
})
})
