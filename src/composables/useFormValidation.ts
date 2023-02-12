export const useFormValidation = () => {
    const formData = reactive({
        loading: false,
        emailError: "",
        passwordError: "",
        emailEmptyError: "",
        passwordEmptyError: "",
    });
    function validateEmail(email:string) {
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

    return {
        validateEmail,
        validatePasswordLength
    }
}