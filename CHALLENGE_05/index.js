const fetchData = async () => {
  const data = await fetch('https://codember.dev/data/files_quarantine.txt');
  const text = await data.text();
  const files = text.split('\n');

  resolve(files);
};

const resolve = (files) => {
  let real_files = [];

  files.forEach((element) => {
    [cadena, uncheck] = element.split('-');

    let nueva_cadena = [];
    let to_delete = [];

    for (const letter of cadena) {
      if (!nueva_cadena.includes(letter)) {
        nueva_cadena.push(letter);
      } else {
        to_delete.push(letter);
      }
    }

    let cadena_final = cadena.replace(new RegExp(to_delete.join('|'), 'g'), '');

    if (cadena_final === uncheck) {
      real_files.push(uncheck);
    }
  });

  console.log(real_files[32]);
  return real_files[32];
};

fetchData();
