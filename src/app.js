import { app } from 'hyperapp'
import actions from './actions'
import state from './state'
import view from './views'

export const main = app(state, actions, view, document.getElementById('app'))
