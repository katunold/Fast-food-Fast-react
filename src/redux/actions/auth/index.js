import ACTION_TYPE from '../types';

export const signUpActionCreatorSuccess = signUpData => ({
		/** function to generate a sign-up action */
		type: ACTION_TYPE.SIGN_UP_SUCCESS,
		signUpData
});
