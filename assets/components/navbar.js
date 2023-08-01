import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Navbar extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        box-sizing: border-box;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.8rem;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        mix-blend-mode: difference;
        color: white;

        transition: top 1s;
        pointer-events: none;
      }

      feather-icon{
        cursor: pointer;
        pointer-events: auto;
      }

      img {
        width: 60px;
        height:60px;
      }

      @media (min-width: 768px) {
        img {
          width: 96px;
          height: 96px;
        }
      }
    `,
  ];

  render() {
    return html`
      <img src="logo-sem-fundo.png" alt="Imagem logo">

      <feather-icon icon="menu" @click=${nav.abrir}></feather-icon>
    `;
  }
}
customElements.define("app-navbar", Navbar);


