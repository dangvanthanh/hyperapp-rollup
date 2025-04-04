import { app } from 'hyperapp'
import { main, h1, button, text } from '@hyperapp/html'
import state from './state'
import view from './views'

app({
	init: state,
	view,
	node: document.getElementById('app'),
})
