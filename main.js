import focusLock from 'dom-focus-lock'

class ReproElement extends HTMLElement {
  connectedCallback() {
    const html = `
      <div id="app">
        <input />
        <button>I am a button</button>
      </div>
    `
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.innerHTML = html
    const app = this.shadow.querySelector('#app')
    focusLock.on(app)
  }
}

if (!customElements.get('repro-element')) {
  customElements.define('repro-element', ReproElement)
}
