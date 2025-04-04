import { main, button, text } from '@hyperapp/html'
import { ReverseMsg } from '../actions'

export default (state) =>
	main([button({ onclick: ReverseMsg }, text(state.msg))])
