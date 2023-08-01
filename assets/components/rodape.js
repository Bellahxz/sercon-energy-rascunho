import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Rodape extends LitElement {
  static styles = [
    css`
      :host {
        display: block;

        color: white;
      }

      img {
        width: 80px;
        height: 80px;
      }

      span {
        font-family: var(--fonte-corpo);
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 2rem;
        font-size: 0.5rem;
        background-color: color-mix(in srgb, black 40%, var(--tom-3));
      }

      footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--tom-3);
        padding: 2rem;
      }

      nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
        opacity: 0.9;
      }

      button {
        background-color: transparent;
        border: transparent;
      }

      a,
      button {
        color: white;
        text-decoration: none;
        font-family: var(--fonte-titulo);
        font-size: 0.75rem;
        opacity: 0.9;

        cursor: pointer;
        transition: color 300ms;
      }

      a:hover,
      button:hover {
        color: var(--tom-1);
      }

      a:active,
      button:active {
        color: var(--tom-1);
      }

      @media (min-width: 1024px) {
        :host {
          border-radius: 2rem 2rem 0 0;
          overflow: hidden;
        }
      }
    `,
  ];

  rolarContatos() {
    return nav.rolarPara("#contatos");
  }

  rolarServicos() {
    return nav.rolarPara("#servicos");
  }

  rolarSobrenos() {
    return nav.rolarPara("#sobrenos");
  }

  rolarHero() {
    return nav.rolarPara("/");
  }

  render() {
    return html`
      <footer>
        <img src="logo1.jpg" alt="logo" />
        <nav>
          <button @click=${this.rolarContatos}>Contato</button>
          <button @click=${this.rolarServicos}>Serviços</button>
          <button @click=${this.rolarSobrenos}>Sobre nós</button>
          <button><a @click=${nav.fechar} href="/">Home</a></button>
        </nav>
      </footer>

      <span> ©Sercon Energy - Direitos reservados desde 2023 </span>
    `;
  }
}
customElements.define("app-rodape", Rodape);
