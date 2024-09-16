



 export const checkValidData = (email, password,name) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
      email
    );
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    const isValidName= /^[a-zA-Z ]{2,30}$/.test(name)
    if (!isEmailValid) return "☒ Please enter a valid email address or phone number.";
    if (!isPasswordValid) return "☒ Password is not valid";
    if(!isValidName) return "☒ Enter a valid UserName"
    return null;
  };