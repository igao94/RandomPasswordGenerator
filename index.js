const generatePassword = (
  length,
  includesLowercase,
  includesUppercase,
  includesNumbers,
  includesSymbols
) => {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%&/()=?.;-_*-";

  let allowedChars = "";
  let password = "";

  allowedChars += includesLowercase ? lowercaseChars : "";
  allowedChars += includesUppercase ? uppercaseChars : "";
  allowedChars += includesNumbers ? numberChars : "";
  allowedChars += includesSymbols ? symbolChars : "";

  if (length <= 0) {
    return `(password length must be at least 1!)`;
  }
  if (allowedChars.length === 0) {
    return `(At least one set of characted must be selected!)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
};

const passwordLength = 12;
const includesLowercase = true;
const includesUppercase = true;
const includesNumbers = true;
const includesSymbols = true;

const password = generatePassword(
  passwordLength,
  includesLowercase,
  includesUppercase,
  includesNumbers,
  includesSymbols
);

console.log(`Generated password: ${password}`);
