import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {
  render() {
    return html`
      <hero-section></hero-section>
      <sobre-nos-section></sobre-nos-section>
      <servicos-section></servicos-section>
      <contatos-section id="contatos"></contatos-section>
    `;
  }
}
customElements.define("home-page", HomePage);
