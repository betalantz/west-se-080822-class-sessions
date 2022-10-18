# Implement a Stack Lab

## Learning Goals

- Implement a `Stack` using an array as the underlying data structure

## Introduction

In the previous lesson, you learned what a `Stack` is and what methods they
commonly include. In this lab, you will be building out an implementation of a
`Stack`. You will be using an array as the underlying data structure, and
calling on some built-in Ruby array methods to build your `Stack` class's
functionality.

Start by forking and cloning this lab. You'll be writing your code in the
`lib/stack.rb` file. You can run the tests at any point using `learn test` to
check your work.

## Instructions

First, create the `Stack` class and set it up to initialize an instance variable
`@stack` that points to an empty array.

Once you have the first test passing, build out the following methods:

- `Stack#push(value)`: add an element to the top of the stack
- `Stack#pop`: remove the element at the top of the stack
- `Stack#peek`: return the value of the element at the top of the stack without
  removing it

### Bonus

If you'd like an extra challenge, try implementing the additional functionality
below. There are tests for these in the `spec/stack_spec.rb` file; uncomment the
**bonus methods** section in the test file to try these out.

1. Modify your `Stack#initialize` method to take an optional `limit` value and
   set that as an attribute.

2. Update the `Stack#push` value to only push the passed-in value if there's
   still room in the `Stack`. If the `Stack` is full, the method should throw an
   error.

3. Implement the following additional methods:

- `Stack#size`: returns the number of elements contained in the `Stack`
- `Stack#empty?`: returns true if the `Stack` is empty; false otherwise
- `Stack#full?`: returns true if the `Stack` is full; false otherwise
- `Stack#search(value)`: returns the distance between the top of the stack and the
  target element if it's present; -1 otherwise

After you've made these changes, you might want to take another look through
your code and see if there's any refactoring you can do.

## Conclusion

In this lesson, we got some practice building a data structure from scratch by
implementing a `Stack` class. Recall that the runtime of our data structure will
depend on what data structure it uses under the hood. For this lab, we used an
array as the underlying data structure, which means the runtime for the
`#search` method is O(n), and the runtime for all of the other methods is O(1).

While our implementation is efficient in terms of time complexity, we have to
consider space complexity as well. One of the characteristics of an `Array` is
that each of the elements can be accessed directly using the `[]` operator. In
order for this to work, all the elements need to be stored in a continuous block
of memory. If we're trying to add an element and we're out of memory where the
array is located, the entire array will need to be relocated. This is expensive
in terms of memory, which means using an array as our underlying data structure
is not optimal from the perspective of space complexity. Refer to [this
lesson][arrays-underneath] for a more comprehensive explanation of space and
time efficiency issues with arrays.

Given that a `Stack` only uses `push` and `pop` methods, we don't need to use an
underlying data structure that allows direct access to all of the elements. A
better choice is a `LinkedList`, because it uses a hash as _its_ underlying data
structure and hashes do not need to be stored in a continuous block of memory.
The `LinkedList` is the next data structure we'll learn about. Before we get to
that, however, let's get a little practice using `Stack`s.

[arrays-underneath]: https://github.com/learn-co-curriculum/arrays-underneath
