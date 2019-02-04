/** module containing auth reducer */
import ACTION_TYPE from '../../actions/types';

const initialState = {
		signUpSuccess: null,
		signUpFailure: null,
};

const authReducer = (state = initialState, action) => {

		switch (action.types) {
				case ACTION_TYPE.SIGN_UP_SUCCESS:
						return {
								...state,
								signUpSuccess: action.signUpData.user,
						};
				case ACTION_TYPE.SIGN_UP_FAILURE:
						return {
								...state,
								signUpFailure: action.errors,
						};
				default:
						return state;
		}
};

export default authReducer;
