const users = [
    {username: "ppc90", age: 30, premium: false},
    {username: "lu65", age: 24, premium: true},
    {username: "maria3", age: 36, premium: false},
    {username: "abc123", age: 30, premium: false},
    {username: "sergio58", age: 30, premium: true},
    ];
 
const users_premium = users.filter(user => user.premium===true);

for (let i = 0; i < users_premium.length; i++) {
   console.log (users_premium[i].username + ", de " + users_premium[i].age + " años de edad, es un usuario premium") 
};

const users_nopremium = users.filter(user =>user.premium===false);

console.log (users_nopremium);
