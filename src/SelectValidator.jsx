/* eslint-disable */
import React from 'react';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
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
          <div>
            <Select
                {...rest}
                error={!isValid || error}
            />
            <FormHelperText>{(!isValid && this.getErrorMessage()) || helperText}</FormHelperText>
          </div>
        );
    }
}
