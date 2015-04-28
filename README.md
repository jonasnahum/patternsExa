# patternsExa
ejercicios de patterns
[![Build Status](https://travis-ci.org/rogithub/jimenez-http-communication.svg?branch=importclasses)](https://travis-ci.org/rogithub/jimenez-http-communication)

# Design Patterns
A guidance on ways in which to solve common problems.

##Creational 
Number of ways to crate objects in order to optimize for reuse.
###build
Encapsulate the knowledge of building the class away from consumers, creates complicated objects using different strategies.
###factory
builds a family of related classes.
###factoryMethod
Allows a class to request a new instance of an interfase without the class making decisions about which implementation of the interfase to use.
###prototype
for inheritance, copying existing objects, or cloning.
##Structural
For easing the design by describing simple ways in which objects can interact.
###adapter
adapta dos clases que se parecen, completa lo que les falta para que sean iguales, y para que una tercera clase pueda llamarlas a trevés de un adapter.
###bridge
usa dos o más adapters.

###composite
use  operations interchangeable  a component through all of the contained objects as they are tree structure.
###decorator
grap and augment an existing class.

###fazade
da coherencia a varias clases de un mismo campo semántico para realizar una tarea específica.
###flyweight
for defer all request for a class property to the prototype. When there are a lot of instances that have a few variety between them. 

###proxy
una clase que se manda llamar en lugar de otra. Es un intermediario.
##Behavioral
these patterns are about how data flows between objects.
###chain
a message trickles down from one class to another.
###command
packs up everything needed to call a method at a later date into a nice little package.
###interpreter
allows for the creation of your own language.
###iterator
provides a simple method to select secuentially the next item in a collection generator.
###generator 
is a function that yields many returns and you can apply next() to the result to iterate over the collection.
###mediator
ease the many to many  relations with a class, in which message routing changes can be made.
###memento
momento anterior, pattern that provides an approach to restore the state of objects to a previous state.
###observer
executes code in order to an event.
###state
tiene un managger que evita el uso de if, a su vez tiene distintos estados(clases con la misma interfaz). el manager genera resultados con base en el estado actual.
###strategy
The strategy pattern provides a method of swapping these strategies out in a transparent fashion.
