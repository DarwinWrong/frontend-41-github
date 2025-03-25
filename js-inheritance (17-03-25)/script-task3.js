function ExtendedArray() {
  var arr = Array.apply(null, arguments);
  Object.setPrototypeOf(arr, ExtendedArray.prototype);
  return arr;
}

ExtendedArray.prototype = Object.create(Array.prototype);
ExtendedArray.prototype.constructor = ExtendedArray;

ExtendedArray.prototype.getString = function (separator) {
  return this.join(separator);
};

ExtendedArray.prototype.getHtml = function (tagName) {
  if (tagName.toLowerCase() === 'li') {
    var html = '<ul>';
    for (var i = 0; i < this.length; i++) {
      html += '<li>' + this[i] + '</li>';
    }
    html += '</ul>';
    return html;
  } else {
    var html = '';
    for (var i = 0; i < this.length; i++) {
      html += '<' + tagName + '>' + this[i] + '</' + tagName + '>';
    }
    return html;
  }
};

var myArray = ExtendedArray(1, 2, 3, 'four', 'five');

console.log('Array as string:', myArray.getString(', '));
console.log('HTML with div tags:', myArray.getHtml('div'));
console.log('HTML with li tags:', myArray.getHtml('li'));

console.log('Prototype of myArray:', Object.getPrototypeOf(myArray));
console.log(
  'Is myArray an instance of ExtendedArray?',
  myArray instanceof ExtendedArray,
);
