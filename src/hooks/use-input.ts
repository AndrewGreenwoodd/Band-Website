import { useReducer, Reducer } from 'react';

interface InputState {
  value: string;
  isTouched: boolean;
}

type InputAction =
  | { type: 'INPUT'; value: string }
  | { type: 'BLUR' }
  | { type: 'RESET' };

const initialInputState: InputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer: Reducer<InputState, InputAction> = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { value: action.value, isTouched: state.isTouched };
    case 'BLUR':
      return { isTouched: true, value: state.value };
    case 'RESET':
      return { isTouched: false, value: '' };
    default:
      return initialInputState;
  }
};

const useInput = (validateValue: (value: string) => boolean) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;