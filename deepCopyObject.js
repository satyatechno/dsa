// deep copy of an object

const original = {
  name: 'Bob',
  details: {
    age: 25,
    location: {
      city: 'Nowhere',
    },
  },
  skills: ['JS', 'React'],
};

const deepCopy = (obj) => {
  //   return JSON.parse(JSON.stringify(obj)); // Simple way

  // use recursion

  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
};

const cloned = deepCopy(original);
cloned.details.location.city = 'Somewhere';
cloned.skills.push('Node.js');

console.log('Original:', original);
console.log('Cloned:', cloned);

// node deepCopyObject.js
