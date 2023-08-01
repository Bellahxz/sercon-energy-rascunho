import { LitElement, html, css } from 'lit';

export class ABarbeariaPage extends LitElement {
    static styles = [
        css`
            sobre-nos-section {
                --display-botao: none;
            }
        `
    ];

    render() {
        return html`
        <sobre-nos-section></sobre-nos-section>
        `;
    }
}
customElements.define('sobre-nos-page', SobreNosPage);
