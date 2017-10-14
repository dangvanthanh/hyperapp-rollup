import { h } from 'hyperapp'
import Slider from './slider'

export default (state, actions) => (
  <div>
    <p>Use the sliders to change background color.</p>
    { 
      Object.keys(state).map(color => (
        <Slider color={color} value={state[color]} update={actions.changeBgColor} />
      ))
    }
  </div>
)
