[matrix.js](https://github.com/shrimpboyho/matrix.js/) - A Simple JavaScript Matrix Library. 
===============================================
##What is it?

At it's core ```matrix.js``` provides a ```matrix()``` JavaScript object that is a wrapper around a multidimensional array.

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
 *	[Array[3], Array[3], Array[3]]
 *	0: Array[3]
 *	1: Array[3]
 *	2: Array[3]
 *	length: 3
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

You can add two matrices by calling the ```addMatrices()```  function. It returns a new matrix with the result of the operation.:

```js

var a = new matrix(2,2);
a.setMat([[23,12],
		  [32,32]]);

var b = new matrix(2,2);

b.setMat([[1,1],
		  [1,99]]);

var c = addMatrices(a,b);

console.log(c.getMat());

/*  OUTPUT:
 *	Array[2]
 *		0: Array[2]
 *			0: 24
 *			1: 13
 *			length: 2
 *			__proto__: Array[0]
 *		1: Array[2]
 *			0: 33
 *			1: 131
 *			length: 2
 *			__proto__: Array[0]
 *		length: 2
 *	__proto__: Array[0]
 */
```

You can multiply by a scalar by calling the```.multiplyByScalar()```  method. It returns a new matrix with the result of the operation:

```js

var thing = new matrix(3,3);

thing.setMat([[1,2,3],
			  [4,5,6],
			  [7,8,9]]);
var answerMatrix = thing.multiplyByScalar(2);
console.log(answerMatrix.getMat());

/*  OUTPUT:
 *	Array[3]
 *		0: Array[3]
 *			0: 2
 *			1: 4
 *			2: 6
 *			length: 3
 *			__proto__: Array[0]
 *		1: Array[2]
 *			0: 8
 *			1: 10
 *			2: 12
 *			length: 3
 *			__proto__: Array[0]
 *		2: Array[2]
 *			0: 14
 *			1: 16
 *			2: 18
 *			length: 3
 *			__proto__: Array[0]
 *		length: 3
 *	__proto__: Array[0]	
 */
```

You can multiply by two matrices by calling the ```multiplyMatrices()```  function. It requires two matrices as the arguments. It returns a new matrix with the result of the operation:

```js

var acid = new matrix(2,3);
acid.setMat([[1,2,3],
		     [4,5,6]]);

var base = new matrix(3,2);
base.setMat([[7 ,8 ],
		     [9 ,10],
		     [11,12]]);

var reaction = multiplyMatrices(acid,base);
console.log(reaction.getMat());


/*  OUTPUT:
 *	Array[2]
 *		0: Array[2]
 *			0: 58
 *			1: 64
 *			length: 2
 *			__proto__: Array[0]
 *		1: Array[4]
 *			0: 139
 *			1: 154
 *			length: 4
 *			__proto__: Array[0]
 *	length: 2
 *	__proto__: Array[0]
 */
```

