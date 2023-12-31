import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      ::slotted(button),
      ::slotted(a),
      button {
        width: inherit;

        display: flex;
        padding: 5px 24px;
        border: 0;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;

        border-radius: 0.5rem;
        background: var(
          --button-background,
          color-mix(in srgb, white 20%, var(--tom-2))
        );
        box-shadow: 0px 2px 4px 0px #040E32;

        /*Tipografia*/
        color: var(
          --color,
          color-mix(in srgb, black 20%, var(--tom-3))
        );
        font-family: var(--fonte-titulo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space: nowrap;
        text-decoration: none;

        transition: all 200ms;
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html` <slot><button>Pressione</button></slot> `;
  }
}
customElements.define("app-botao", Botao);


