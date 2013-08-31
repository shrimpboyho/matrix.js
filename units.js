/* GETTERS AND SETTERS */

var thing = new matrix(3,3);

thing.setMat([[1,2,3],
			  [4,5,6],
			  [7,8,9]]);

console.log(thing.getMat());
thing.setElement(0,1,999);
console.log(thing.getElement(0,1));
console.log(thing.getRow(2));
console.log(thing.getColumn(2));

/* SCALAR MULTIPLICATION */

console.log(thing.multiplyByScalar(2));

/* DETERMINANT */

var thing2 = new matrix(2,2);

thing2.setMat([[23,12],
			   [32,32]]);

console.log(thing2.determinant());

/* MATRIX ADDITION */

var a = new matrix(2,2);

a.setMat([[23,12],
		  [32,32]]);

var b = new matrix(2,2);

b.setMat([[1,1],
		  [1,99]]);

var c = addMatrices(a,b);

console.log(c.getMat());

var acid = new matrix(2,3);

acid.setMat([[1,2,3],
		     [4,5,6]]);

var base = new matrix(3,2);

base.setMat([[7 ,8 ],
		     [9 ,10],
		     [11,12]]);

var reaction = multiplyMatrices(acid,base);

console.log(reaction.getMat());
