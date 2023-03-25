const emailValidation = (mail:string) => {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const valid:boolean = expression.test(mail);

    return valid;
};

export default emailValidation;