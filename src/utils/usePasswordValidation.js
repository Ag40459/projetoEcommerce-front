import { useState } from 'react';

export const usePasswordValidation = () => {
    const [checkPassword, setCheckPassword] = useState({
        uppercase: false,
        lowercase: false,
        minimum8: false,
    });

    const updatePasswordValidation = (password) => {
        setCheckPassword({
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            minimum8: password.length >= 8,
        });
    };

    return [checkPassword, updatePasswordValidation];
};
