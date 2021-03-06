// 1) forEach Method

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};


// 2) Map Method

Array.prototype.customMap = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};


// 3) Filter Method

Array.prototype.customFilter = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};


// 4) Every Method

Array.prototype.customEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};


// 5) Some Method

Array.prototype.customSome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};


// 6) Find Method

Array.prototype.customFind = function (callback) {
  let myArray = this;
  let length = myArray.length;
  for (let i = 0; i < length; i++) {
    let item = myArray[i];
    if (callback(item, i, myArray)) {
      return item;
    }
  }
  return undefined;
};


// 7) Flat Method

Array.prototype.customFlat = function (depth) {
  if (depth === undefined) {
    depth = 1;
  }
  let flatten = function (arr, depth) {
    if (depth < 1) {
      arr.slice;
    }
    return arr.reduce((acc, val) => {
      return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
    }, []);
  };
  return flatten(this, depth);
};


// 8) IndexOf Method

Array.prototype.customIndexOf = function (searchElement, fromIndex) {
  let myArray = this;
  let length = myArray.length;
  if (length === 0) {
    return -1;
  }
  let n = +fromIndex || 0;
  if (Math.abs(n) === Infinity) {
    n = 0;
  }
  if (n >= length) {
    return -1;
  }
  let k = Math.max(n >= 0 ? n : length - Math.abs(n), 0);
  while (k < length) {
    if (k in myArray && myArray[k] === searchElement) {
      return k;
    }
    k++;
  }
  return -1;
};


// 9) Pop Method

Array.prototype.customPop = function () {
  let myArray = this;
  let length = myArray.length;
  let elem = myArray[length - 1];
  myArray.splice(length - 1, 1);
  return elem;
};


// 10) Reduce Method

Array.prototype.customReduce = function (callback, initialValue) {
  let acc = initialValue === undefined ? undefined : initialValue;
  for (let i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = callback(acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};


// 11) Join Method

Array.prototype.customJoin = function (separator = ",") {
  let result = '';
    const { length } = this;
    for(let i = 0; i < length - 1; i++){
        result += (this[i] ?? '') + separator;
    }
    result += this[length - 1] ?? '';
    return result;
}


// 12) Slice Method

Array.prototype.customSlice = function(start = 0, end = this.length){
  let newArr = []
  start = start < 0 ? this.length + start : start
  end = end < 0 ? this.length + end : end
  if(this.length > 0){
    for(let i = start; i < end;i++){
      if(i < this.length){
        newArr.push(this[i])
      }
    }
    return newArr
  }
  return newArr
}


// 13) Fill Method

Array.prototype.customFill = function (value, start, end) {
  let o = this;
  let len = o.length;
  const relativeStart = start || 0;
  const relativeEnd = end === undefined ? len : end;
  let x =
    relativeStart < 0
      ? Math.max(len + relativeStart, 0)
      : Math.min(relativeStart, len);
  const finalValue =
    relativeEnd < 0
      ? Math.max(len + relativeEnd, 0)
      : Math.min(relativeEnd, len);
  while (x < finalValue) {
    o[x] = value;
    x++;
  }
  return o;
};