export const useRegisterFormValidation = () => {
    interface Props {
        email: string,
        password: string,
        confirmPassword: string,
        emailError: string,
        passwordError: string,
        confirmPasswordError: string,
        emailEmptyError: string,
        passwordEmptyError: string,
        confirmPasswordEmptyError: string
    }
    const formData = reactive<Props>({
        email: "",
        password: "",
        confirmPassword: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
        emailEmptyError: "",
        passwordEmptyError: "",
        confirmPasswordEmptyError: ""
    });
    function validateEmail(email: string) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePasswordLength(password: string) {
        const minLength = 8;
        if (password.length >= minLength) {
            return true;
        } else {
            return false;
        }
    }

    function validateConfirmPassword(passwordA: string, passwordB: string) {
        if (passwordA === passwordB) {
            return true;
        } else {
            return false;
        }
    }

    const response = () => {
        try {
            if (!formData.email) {
                formData.emailEmptyError = "Email address is required";
            } else if (!validateEmail(formData.email)) {
                formData.emailError = "Please enter a valid email address";
            }

            if (!formData.password) {
                formData.passwordEmptyError = "Password is required";
            } else if (!validatePasswordLength(formData.password)) {
                formData.passwordError = "Password should be a minimum of 8 characters";
            }
            if (!formData.confirmPassword) {
                formData.confirmPasswordEmptyError = "Re-type your password";
            } else if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
                formData.confirmPasswordError = "Passwords do not match";
            }
            setTimeout(() => {
                formData.emailEmptyError = formData.emailError = formData.passwordEmptyError = formData.confirmPasswordEmptyError = formData.confirmPasswordError = formData.passwordError = "";
            }, 2000);
        } catch (err: any) {
            console.log(err)
        }

        if (validateEmail(formData.email) && validatePasswordLength(formData.password) && validateConfirmPassword(formData.password,formData.confirmPassword)) {
            return true
        } else {
            return false
        }
    }

    return {
        formData,
        response
    }
}