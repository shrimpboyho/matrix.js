[matrix.js](https://github.com/shrimpboyho/matrix.js/) - A Simple JavaScript Matrix Library. 
===============================================
##What is it?

At it's core ```matrix.js``` provides a ```matrix()``` javascript object that is a wrapper around a multidimensional array.

This library includes several functions for operations regarding matrices, including finding determinants, inverses, adding, and multiplying matrices.

##How to Install

Include the library in your HTML as follows:

```html

<script src="matrix.js"></script>
<script src="your_code.js"></script>
```

##How to Use

Creating a matrix is as simple as creating a matrix obejct and specifying the number of rows and columns:

```js

var thing = new matrix(3, 3); // matrix(amountOfRows, amountOfColumns)
```

###Getters and Setters

You can set an entire matrix mat like this:

```js

thing.setMat([[1,2,3],
			  [4,5,6],
			  [7,8,9]]);
```

You can also set individual elements like this:

```js

thing.setElement(0,1,999); // .setElement(rowIndex, columnIndex, value)
```

You can get an entire matrix mat like this:

```js
var mat = thing.getMat();
console.log(mat);

/*  OUTPUT:
 * 
 *	[Array[3], Array[3], Array[3]]
 *	0: Array[3]
 *	1: Array[3]
 *	2: Array[3]
 *	length: 3
 *
 */

```

You can get individual elements from the matrix like this:

```js

var indie = thing.getElement(0, 1);
console.log(indie);

/*  OUTPUT:
 *	2
 */
```

###Operations

TODO
