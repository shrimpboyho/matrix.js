/**

The MIT License (MIT)

Copyright (c) 2013 shrimpydubsy

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
(function() {

  "use strict";

  /* Contructor */

  window.matrix = function matrix(rows, columns) {
    this.rows = rows; // height
    this.columns = columns; //width
    this.mat = this.genMat(this.rows, this.columns); //default mat
  };

  /* Getters and setters */

  matrix.prototype.setMat = function(mat) {
    this.mat = mat;
  };

  matrix.prototype.getMat = function() {
    return this.mat;
  };

  matrix.prototype.getElement = function(i, k) {
    return this.mat[i][k];
  };

  matrix.prototype.setElement = function(i, k, val) {
    this.mat[i][k] = val;
  };

  /* PRIVATE: MAT GENERATOR */

  matrix.prototype.genMat = function(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.myarray = new Array(this.rows);
    for (var i = 0; i < this.columns; i += 1) {
      this.myarray[i] = new Array(this.rows);
    }
    return this.myarray;
  };

  /* Inverse operation */

  matrix.prototype.inverse = function() {

  };

  /* Determinant operation */

  matrix.prototype.determinant = function(n, mat) {
    if (this.rows === this.columns) {
      if (!mat) {
        mat = this.getMat();
      }
      if (!n) {
        n = this.rows;
      }
      var i, c, j, subi, subj;
      var d = 0;
      var n = this.rows;
      var submat = this.genMat(this.rows, this.columns);
      if (n == 2) return ((mat[0][0] * mat[1][1]) - (mat[1][0] * mat[0][1]));
      else {
        for (c = 0; c < n; c++) {
          subi = 0; //submatrix's i value
          for (i = 1; i < n; i++) {
            subj = 0;
            for (j = 0; j < n; j++) {
              if (j == c)
                continue;
              submat[subi][subj] = mat[i][j];
              subj++;
            }
            subi++;

          }
          d = d + (Math.pow(-1, c) * mat[0][c] * this.determinant(n - 1, submat));
        }
      }
      return d;
    }
  };

  /* Scalar multiplication operation */

  matrix.prototype.multiplyByScalar = function(k) {
    var newone = new matrix(this.rows, this.columns);
    var mat = this.getMat();
    newone.setMat(mat);
    var i, j;
    for (i = 0; i < this.rows; i++) {
      for (j = 0; j < this.columns; j++) {
        var num = this.getElement(i, j);
        newone.setElement(i, j, num * k);
      }
    }
    return newone;
  };

  /* MATH OPERATION FUNCTIONS THAT REQUIRE MORE THAN ONE MATRIX */

  window.addMatrices = function(a, b) {
    if (a.rows === b.rows && a.columns === b.columns) {
      var answer = new matrix(a.rows,a.columns);
      var i, j;
      for (i = 0; i < a.rows; i++) {
        for (j = 0; j < a.columns; j++) {
          answer.setElement(i, j, a.getElement(i, j) + b.getElement(i, j));
        }
      }
      return answer;
    }
  };

})();