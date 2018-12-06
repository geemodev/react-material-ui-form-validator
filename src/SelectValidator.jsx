/* eslint-disable */
import React from 'react';
import Select from '@material-ui/core/Select';
/* eslint-enable */
import { ValidatorComponent } from 'react-form-validator-core';

export default class SelectValidator extends ValidatorComponent {

    render() {
        /* eslint-disable no-unused-vars */
        const {
            error,
            errorMessages,
            validators,
            requiredError,
            helperText,
            validatorListener,
            withRequiredValidator,
            ...rest
        } = this.props;
        const { isValid } = this.state;
        return (
            <Select
                {...rest}
                error={!isValid || error}
                helperText={(!isValid && this.getErrorMessage()) || helperText}
            />
        );
    }
}
