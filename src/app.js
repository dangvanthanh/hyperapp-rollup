import { app } from 'hyperapp'
import state from './state'
import view from './views'

app({
	init: state,
	view,
	node: document.getElementById('app'),
})
