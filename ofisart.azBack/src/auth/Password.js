import passwordHash from "password-hash";


export const HashPassword = ({pswd}) => {
    var hashedPassword = passwordHash.generate(pswd);
  return (
    hashedPassword
  )
}
export const CompPassword = ({pswd,hashpswd}) => {
    const Compare = (passwordHash.verify(pswd, hashpswd));
  return (
    Compare
  )
}

