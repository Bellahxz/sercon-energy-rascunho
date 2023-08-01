import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/section-style";

export class HeroSection extends LitElement {
  static styles = [
    animate,
    section,
    css`
      :host {
        --animate-delay: 0.3s;
      }

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }

      span {
        display: inline-block;
      }

      .energy {
        color: var(--tom-3);
        font-weight: 900;
      }

      app-titulo {
        display: flex;
        align-items: center;
        align-self: stretch;

        position: relative;
      }

      app-quadro {
        background-color: transparent;
      }

      img {
        height: 100%;
      }

      app-paragrafo {
        font-size: 1rem;
      }

      swiper-container {
        width: 100%;
        height: 100%;
      }

      @keyframes slideInUp {
        0% {
          transform: translate3d(0px, 200%, 0px);
          visibility: visible;
        }
        100% {
          transform: translateZ(0px);
        }
      }

      @media (min-width: 1024px) {
        app-paragrafo {
          display: none;
        }
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-titulo>
          <h1>
            <span
              class="animate__animated animate__fast-1s"
              data-toggle-class="animate__slideInUp"
              >Sercon</span
            >
            <span
              class="energy animate__animated animate__fast animate__fast-1s"
              data-toggle-class="animate__slideInUp"
              >Energy</span
            >
          </h1>
        </app-titulo>
        <app-quadro>
          <img src="slider-1.jpg" alt="Imagem slider 1" />
        </app-quadro>
      </section>
      <app-paragrafo
        class="animate__animated animate__delay-5s"
        data-toggle-class="animate__fadeIn"
      >
        Na corrente do sucesso, nós iluminamos o seu caminho!
      </app-paragrafo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
