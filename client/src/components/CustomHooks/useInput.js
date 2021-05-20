import {useEffect, useState} from "react";

const useValidation = (value, validations) => {

    const [isEmpty, setIsEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break
                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setIsEmail(false) : setIsEmail(true)
                    break
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break
                default:
                    break
            }
        }
    }, [value,validations])

    useEffect(() => {
        if (isEmail || maxLengthError || minLengthError || isEmpty) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmail, maxLengthError, minLengthError, isEmpty])

    return {
        isEmpty,
        minLengthError,
        isEmail,
        maxLengthError,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {
        value,
        onBlur,
        onChange,
        isDirty,
        ...valid
    }
}

export default useInput