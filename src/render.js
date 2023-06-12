import { render } from 'solid-js/web'

/** @param {{ method: 'end' | 'after-element'; selector: string; renderApp: JSXElement; id: string }} props */
export default (props) => {
  const container = document.querySelector( props.selector )
  const app = document.createElement( 'div' )
  app.id = props.id;
  const App = props.App;

  if ( container ) {
    if ( props.method === 'end' ) {
      container.appendChild( app )
    }
    else {
      container.parentNode.insertBefore( app, container )
    }
  
    render(() => <App />, app)
  }
}