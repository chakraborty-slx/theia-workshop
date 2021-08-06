# Workshop: Building Cloud and Desktop IDEs with Theia

[Theia](http://theia-ide.org/) is the new star on the dev tools sky: with Theia, you can write your own IDE-like applications that run as desktop tools as well as in the browser.
Theia is web-native, entirely written in Typescript, and offers a degree of customizability similar to Eclipse RCP.
It is an open-source Eclipse project, backed by companies like TypeFox, Ericsson, ARM, RedHat, Google, IBM and SAP.

In this workshop, you’ll get acquainted with the base architecture of Theia, you will learn how to compose existing building blocks to author your own specialized IDE, and you will see how to implement your own extensions.

## Exercises

The workshop consists of several exercises, starting from learning how to build and run Theia applications and ending with developing [react-jsonschema-form](https://mozilla-services.github.io/react-jsonschema-form/) Theia extension.
For each exercise, there are 2 branches in the repository: one with an exercise and another with a solution. The solution for exercise 3 is the final solution.

### Getting started

During the workshop, you will use Theia-based Online IDE for GitHub - [Gitpod](https://gitpod.io/).
To start with the exercises you only need a modern browser. For the best experience, please use [Chrome](https://www.google.com/chrome/).
You can open any branch on GitHub by prefixing its URL with `gitpod.io#`.
For example, to open Gitpod for the exercise 0:
- go to the exercise's branch - https://github.com/TypeFox/theia-workshop/tree/exercise-0
- prefix it with `gitpod.io#` - [https://gitpod.io#https://github.com/TypeFox/theia-workshop/tree/exercise-0](https://gitpod.io/#https://github.com/TypeFox/theia-workshop/tree/exercise-0)

### [Exercise 0: Build Theia Application](https://github.com/TypeFox/theia-workshop/tree/exercise-0#exercise-0-build-theia-application)

In this exercise, you learn:
- the structure of a Theia extension project;
- how to create a Theia application, build and run it;
- how to configure a Theia extension with dependency injection.

### [Exercise 1: Implement JSON-Form Widget Open Handler](https://github.com/TypeFox/theia-workshop/tree/exercise-1#exercise-1-implement-json-form-widget-open-handler)

In this exercise, you learn how to add a new widget to the shell and get familiar with widget's lifecycle.

### [Exercise 2: Improve Greeting React Component](https://github.com/TypeFox/theia-workshop/tree/exercise-2#exercise-2-improve-greeting-react-component)

In this exercise, you learn basics of React and how to integrate it.

### [Exercise 3: Implement UI Schema Support for JSON-Form Widget](https://github.com/TypeFox/theia-workshop/tree/exercise-3#exercise-3-implement-ui-schema-support-for-json-form-widget)

In this exercise, you learn how to access file models and connect them with widgets.
