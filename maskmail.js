let email="rihustar1@gmail.com";
function maskEmail(email){
  let atIndex= email.indexOf('@');
  let firstletter = email[0];
  let lastletterbeforeat = email[atIndex-1];
  let maskcount = atIndex -2;
  let stars = '*'.repeat(maskcount);
  let domain = email.slice(atIndex);
  return firstletter + stars + lastletterbeforeat + domain;
}
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("user@domain.org"));

