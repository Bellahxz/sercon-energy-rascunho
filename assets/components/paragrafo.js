import { LitElement, html, css } from "lit";

export class Paragrafo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: var(--cor-secundaria);
        font-family: var(--fonte-corpo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 20px */
      }

      P{
        margin: 0;
      }
    `
  ];

  render() {
    return html`<slot><p>Parágrafo</p></slot>`;
  }
}
customElements.define("app-paragrafo", Paragrafo);
