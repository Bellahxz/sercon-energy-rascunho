import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Menu extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      dialog {
        display: flex;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        padding: 32px;
        border: 0;
        margin: 0;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex-shrink: 0;

        opacity: 0;
        pointer-events: none;
        transition: opacity 300ms;

        background-color: rgba(0, 0, 0, 40%);
        position: fixed;
        z-index: 110;
      }

      dialog[open] {
        opacity: 1;
        pointer-events: auto;
      }

      nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        align-self: flex-end;
        gap: 24px;
      }

      app-logo {
        width: 96px;
        height: 96px;
        background-color: white;
      }

      a, button {
        /* Layout */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;

        color: #ffff;
        font-family: var(--fonte-titulo);
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;

        cursor: pointer;
        transition: color 300ms;
      }

      a,
      button {
        padding: 0;
        border: 0;
        background: transparent;
      }

      a:hover, button:hover {
        color: var(--tom-1);
      }

      a:active, button:active {
        color: var(--tom-1);
      }

      svg,
      feather-icon {
        display: flex;
        width: 24px;
        fill: currentcolor;
      }
    `,
  ];

  rolarContato() {
    return nav.rolarPara('#contatos')
  }

  rolarServicos() {
    return nav.rolarPara('#servicos')
  }

  render() {
    return html` <dialog>
      <app-logo></app-logo>

      <nav>
        <button @click=${this.rolarContato}>Contato <feather-icon icon="phone"></feather-icon></button>
        <button @click=${this.rolarServicos}>Serviços <feather-icon icon="truck"></feather-icon></button>
        <a @click=${nav.fechar} href="sobrenos"> Sobre nós <feather-icon icon="users"></feather-icon> </a>
        <a @click=${nav.fechar} href="/">Home <feather-icon icon="home"></feather-icon></a>

        <button title="fechar menu" @click=${nav.fechar}>
          <feather-icon icon="x"> </feather-icon>
        </button>
      </nav>
    </dialog>`;
  }
}
customElements.define("menu-section", Menu);