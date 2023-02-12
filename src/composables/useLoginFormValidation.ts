export const useFormLoginValidation = () => {
    interface Props {
        email: string,
        password: string,
        emailError: string,
        passwordError: string,
        emailEmptyError: string,
        passwordEmptyError: string
    };
    const formData = reactive<Props>({
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
        emailEmptyError: "",
        passwordEmptyError: "",
    });
    function validateEmail(email: string) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    function validatePasswordLength(password: string) {
        const minLength = 8;
        if (password.length >= minLength) {
            return true;
        } else {
            return false;
        }
    };

    const response = () => {
        try {
            if (!formData.email) {
                formData.emailEmptyError = "Email address is required";
            } else if (!validateEmail(formData.email)) {
                formData.emailError = "Please enter a valid email address";
            };

            if (!formData.password) {
                formData.passwordEmptyError = "Password is required";
            } else if (!validatePasswordLength(formData.password)) {
                formData.passwordError = "Password should be a minimum of 8 characters";
            };
            setTimeout(() => {
                formData.emailEmptyError = formData.emailError = formData.passwordEmptyError = formData.passwordError = "";
            }, 2000);
        } catch (err: any) {
            console.log(err)
        };
        
        if (validateEmail(formData.email) && validatePasswordLength(formData.password)) {
            return true
        } else {
            return false
        }
    }

    return {
        validateEmail,
        validatePasswordLength,
        formData,
        response
    }
}