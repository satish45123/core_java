// function overloading

function greet(firstname, lastname) {
  console.log('Welcome ' + firstname + ' ' + lastname);
}

function greet(firstname, lastname, language) {
  if (language === 'en') {
    console.log('Welcome ' + firstname + ' ' + lastname);
    return;
  } else if (language === 'es') {
    console.log('Hola ' + firstname + ' ' + lastname);
    return;
  }
  console.log('Welcome....');
}

// greet('john', 'wilson');
// greet('john', 'wilson', 'en');
// greet('john', 'wilson', 'es');

function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, 'es');
}

greetEnglish('john', 'wilson');
greetSpanish('dexter', 'wilson');

// automatic semi colon insertion
function getPerson() {
  return {
    name: 'Tony',
  };
}

console.log(getPerson());
