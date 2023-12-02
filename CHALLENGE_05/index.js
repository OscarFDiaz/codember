const fetchData = async () => {
  const data = await fetch('https://codember.dev/data/database_attacked.txt');
  const text = await data.text();
  const files = text.split('\n');

  resolve(files);
};

const resolve = (files) => {
  let invalids = [];
  const alphanumeric = /^[a-zA-Z0-9]*$/;
  const emailRegex = /^[^@]+@[^@]+.[a-zA-Z]*$/;

  files.forEach((element) => {
    let idValid = true,
      usernameValid = true,
      emailValid = true;

    const [id, username, email, age, location] = element.split(',');

    // id existe y es alfanumérico
    id ? (idValid = alphanumeric.test(id)) : (idValid = false);

    // username existe y es alfanumérico
    username ? (usernameValid = alphanumeric.test(username)) : (usernameValid = false);

    // email existe y es valido user@dominio.com
    email ? (emailValid = emailRegex.test(email)) : (emailValid = false);

    // Encuentra el primer carácter (número o letra) del username de cada usuario inválido.
    if (!(idValid && usernameValid && emailValid && age && location)) {
      invalids.push(username[0]);
    }
  });

  // youh4v3beenpwnd
  return invalids.join('');
};

fetchData();
