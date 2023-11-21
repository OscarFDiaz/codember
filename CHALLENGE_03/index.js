const fetchData = async () => {
  const data = await fetch('https://codember.dev/data/encryption_policies.txt');
  const text = await data.text();
  const passwords = text.split('\n');

  resolve(passwords);
};

const resolve = (passwords) => {
  let invalidPasswords = [];

  passwords.forEach((password) => {
    const passSpliced = password.split(' ');

    const [min, max] = passSpliced[0].split('-');
    const letter = passSpliced[1].replace(':', '');
    const passwordToCheck = passSpliced[2];

    let minLetter = passwordToCheck.split('').filter((l) => letter === l).length;
    let isValid = minLetter >= min && minLetter <= max;

    !isValid && invalidPasswords.push(passwordToCheck);
  });

  return invalidPasswords[41];
};

fetchData();
