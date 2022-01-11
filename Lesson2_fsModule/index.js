const fs = require('fs');

fs.writeFile(
  'demo1.txt',
  'Write file override all every its been called',
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Write successfull');
    }
  }
);

fs.appendFile(
  'appendFile.txt',
  'This is append file.Append file does not over write. It just added all the new things',
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Append successfull');
    }
  }
);

fs.readFile('demo1.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Read successfull', data);
  }
});

fs.rename('demo1.txt', 'writeFile.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Re-name successfull');
  }
});

fs.unlink('rakib.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Deleted successfully');
  }
});

fs.exists('writeFile.txt', (result) => {
  if (result) {
    console.log('found');
  } else {
    console.log('Not found');
  }
});
