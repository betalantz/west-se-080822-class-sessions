# Singly Linked List Methods Lab

## Learning Goals

- Build out common methods for a Singly Linked List

## Introduction

In the previous lesson, you learned what a Singly Linked List is and we built
out the initial `LinkedList` and `Node` classes, as well as learned how to
`append` on to a linked list. We also learned how to add to our Singly Linked
List. In this lab, let's build out some more of the common methods we might need
when using a Singly Linked List.

Fork and clone this lab; you'll be coding in the `lib` folder. You can run the
tests at any point using `learn test` to check your work.

## Instructions

Start by building out the `LinkedList` class.

Once you have the first test passing, build out the following methods:

- `LinkedList#prepend(node)`: adds a node to the beginning of the list (the `head`)
- `LinkedList#append(node)`: adds a node to the end of the list (feel free to
  reuse/modify the code from the previous lesson)
- `LinkedList#delete_head`: delete the `head` node
- `LinkedList#delete_tail`: removes the node at the end of the list
- `LinkedList#add_after(index, node)`: adds a node after the given index of the linked
  list
- `LinkedList#search(value)`: finds a node with the given value within the list
