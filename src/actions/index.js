export const ReverseMsg = (state) => ({
	...state,
	msg: state.msg.split('').reverse().join(''),
})
