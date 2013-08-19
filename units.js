var thing = new matrix(3,3);

thing.setMat([[1,2,3],
			  [4,5,6],
			  [7,8,9]]);

console.log(thing.getMat());
thing.setElement(0,1,999);
console.log(thing.getElement(0,1));
console.log(thing.multiplyByScalar(2));

var thing2 = new matrix(2,2);

thing2.setMat([[23,12],
			   [32,32]]);
console.log(thing2.determinant());