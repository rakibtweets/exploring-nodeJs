const { teacherSubject, teacherName } = require('./teacher');

//woriking on teacher file

console.log(teacherName());
console.log(teacherSubject());

const getName = () => {
  return 'Rakib Hasan';
};

const getAge = () => {
  return '25';
};
const getProfession = () => {
  return 'Web Development';
};

// syntax: exports.anyName = functionName
//better to use function name and export name same

// exports.getName = getName;
// exporting getName function
// exports.getAge = getAge;
// exporting getName function

// shorted syntax to export

module.exports = {
  getName,
  getAge,
};
