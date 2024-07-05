import { EmailRegex, PublicEmailProviders } from "./Constants";

 /* Checks the provided email is of public provider */
 const checkEmailDomain = (value) => {
    const domain = value.split('@')[1];
    return PublicEmailProviders.includes(domain)
}

/* Checks the provided email is valid && its domain is not by public provider   */
export const validateEmail = (email) => {
    if (!email.length) {
        return 'validationMessage.required';
    }
    if (!EmailRegex.test(email)) {
        return 'validationMessage.invalidEmail';
    }
    if (checkEmailDomain(email)) {
        return 'validationMessage.noPublicProvider'
    }
    return ''
}
