function greetMod({firstName = 'Anonim', lastName = 'Anonimous', lastLogin = 'last week'}){
    console.log(`Hello, ${firstName} ${lastName}
Havent see you from ${lastLogin}`);
}

greetMod({firstName: 'Vova', lastLogin: 'yesterday'});