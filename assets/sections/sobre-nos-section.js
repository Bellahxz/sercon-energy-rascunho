import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/section-style";

export class SobreNosSection extends LitElement {
  static styles = [
    animate,
    section,
    css`
      :host {
        justify-content: space-between;
        align-items: flex-start;
        --animate-duration: 1.5s;
      }

      article {
        display: flex;
        padding: 8px 12px 0px 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        background-color: var(--tom-5);

        border-left: 0;
        border-bottom: 0;
      }

      app-paragrafo {
        width: 270px;
        text-align: justify;
        line-height: 140%; /* 22.4px */
        letter-spacing: -1.6px;
      }

      app-quadro {
        width: 335px;
        height: 335px;
        border-radius: 335px;

        position: absolute;
        right: -82px;
        top: 106px;
        z-index: -10;
      }

      img {
        width: 300%;
      }

      app-botao {
        display: var(--display-botao);
      }

      @media (min-width: 768px) {
        app-quadro {
          width: 600px;
          height: 600px;

          right: -182px;
          top: 200px;
        }

        app-bolinhas {
          width: 400px;
          height: 400px;

          left: -20px;
          top: 272px;
        }

        app-paragrafo {
          width: 100%;
        }

        article {
          width: 60%;
        }
      }

      @media (min-width: 1028px) {
        app-quadro {
          top: 100px;
        }

        app-bolinhas {
          top: 112px;
        }

        article {
          width: 70%;
          border-image-source: linear-gradient(
            20deg,
            rgba(102, 78, 56, 0) 50%,
            rgba(102, 78, 56, 1) 100%
          );
        }
      }
    `,
  ];

  render() {
    return html` <app-titulo
        class="animate__animated animate__slower animate__delay-1s"
        data-toggle-class="animate__fadeInUp"
        >Sobre nós</app-titulo
      >
      <app-quadro
        class="animate__animated animate__slow animate__delay-1s"
        data-toggle-class="animate__slideInRight"
      >
        <img loading="lazy" src="sobre-nos.jpg" alt="Imagem a Barbearia" />
      </app-quadro>
      <article
        class="animate__animated animate__slower animate__delay-0.5s"
        data-toggle-class="animate__slideInLeft"
      >
        <app-paragrafo>
          Desde 2016, a Sercon Energy tem sido uma empresa líder no setor de
          eletricidade, soluções inovadoras e apoio para nossos clientes. Nosso
          compromisso é fornecer energia elétrica de qualidade.
        </app-paragrafo>
        <app-botao><a href="a-barbearia">Saiba mais</a></app-botao>
      </article>`;
  }
}
customElements.define("sobre-nos-section", SobreNosSection);
