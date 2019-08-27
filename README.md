# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @siningtong/lotide`

**Require it:**

`const _ = require('@siningtong/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrayActual, arrayExpected)`: assert if Arrays are Equal
* `assertEqual(actual,expected)`: assert if items are Equal
* `assertObjectsEqual(actual, expected)`: assert Objects are Equal
* `countLetters(sentence)`: count letters' frequency
* `countOnly(allItems, itemsToCount)`: only count certain items
* `eqArrays(array1, array2)`: compare whether arrays are equal
* `eqObjects(object1, object2)`: compare whether objects are equal
* `findKey(object,callback)`: find key in an object
* `findKeyByValue(object,value)`: find certain Key By Value
* `flatten(arr)`: Given an array with other arrays inside, it can flatten it into a single-level array
* `letterPositions(sentence)`: return all the indices (zero-based positions) in the string where each character is found
* `head(array)`: retrieve the first element from the array
* `map(array, callback)`: The map function will return a new array based on the results of the callback function.
* `middle(arr)`: This function will take in an array and return the middle-most element(s) of the given array.
* `tail(num)`: This function returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil(array, callback)`: The function will return a "slice of the array with elements taken from the beginning." 
* `without(source, itemsToRemove)`: This function will return a subset of a given array, removing unwanted elements.