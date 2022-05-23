import { render } from 'react-dom'
import { App } from './App'
import { ShareStateContext } from './contexts/shareState'
render(
    <ShareStateContext>
        <App />
    </ShareStateContext>
, document.getElementById('root'))