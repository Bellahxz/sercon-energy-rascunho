import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/section-style";

export class ContatosSection extends LitElement {
  static styles = [
    animate,
    section,
    css`
      :host {
        justify-content: space-between;
        gap: 0;
      }

      img {
        height: 100%;
        width: 100%;
      }

      app-botao,
      div {
        width: 100%;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .whatsapp {
        --color: color-mix(in srgb, white 40%, var(--tom-5));
        --button-background: color-mix(in srgb, white 20%, #128c7e);
      }

      feather-icon,
      svg {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 5px 8px 5px 0;
      }

      @media (min-width: 768px) {
        div {
          flex-direction: row;
        }
      }

      @media (min-width: 1024px) {
        div {
          max-width: 80%;
        }

        app-quadro {
          width: 70vw;
        }
      }
    `,
  ];

  mensagemWhatsapp() {
    const mensagem =
      "Olá! Queria saber mais sobre os serviços da Sercon Energy, vocês poderiam me ajudar?";
    return encodeURIComponent(mensagem);
  }

  render() {
    const numeroWhatsapp = "5511993990276";

    return html`
      <app-titulo
        class="animate__animated animate__slower"
        data-toggle-class="animate__fadeInUp"
        >Agende seu atendimento</app-titulo
      >

      <app-quadro>
        <img src="contato.jpg" alt="Imagem contato" />
      </app-quadro>

      <div class="animate__animated" data-toggle-class="animate__fadeIn">
        <app-botao>
          <a href="mailto:contato@serconenergy.com.br">
            <feather-icon icon="mail"></feather-icon> Envie um email
          </a>
        </app-botao>

        <app-botao class="whatsapp">
          <a
            href=${`https://wa.me/${numeroWhatsapp}?text=${this.mensagemWhatsapp()}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M1.64337 25.1229C1.41087 25.1235 1.18974 25.031 1.02661 24.8687C0.805226 24.6483 0.711533 24.3231 0.792213 24.0208L2.24439 18.5432C1.2637 16.7323 0.747444 14.6879 0.742679 12.6191C0.726805 5.72705 6.31724 0.112103 13.2109 0.0962252C20.1047 0.0803474 25.7209 5.66948 25.7368 12.5616C25.7527 19.4537 20.1622 25.0687 13.2685 25.0845C11.1643 25.0894 9.10554 24.5711 7.26646 23.5758L1.87581 25.0875C1.79448 25.111 1.72475 25.1227 1.64337 25.1229ZM7.37853 21.7741C7.52966 21.7737 7.6809 21.82 7.82057 21.8894C9.46194 22.8503 11.3463 23.3572 13.2645 23.3528C19.1933 23.3391 24.0067 18.5047 23.993 12.5772C23.9794 6.6498 19.1438 1.83758 13.215 1.85123C7.28617 1.86489 2.47283 6.69933 2.48648 12.6268C2.49085 14.5212 2.99497 16.368 3.94036 17.993C4.05707 18.1903 4.09253 18.4343 4.03491 18.6553L2.88241 23.0048L7.15773 21.8094C7.22743 21.786 7.30878 21.7742 7.37853 21.7741Z"
                fill="currentColor"
              />
              <path
                d="M16.4406 19.2887C15.7198 19.2904 14.9754 19.1294 14.1958 18.7941C13.4626 18.482 12.7293 18.0653 12.019 17.5439C11.3203 17.0341 10.6331 16.4546 10.0039 15.8284C9.37468 15.1906 8.79182 14.5179 8.2787 13.8217C7.75388 13.0907 7.33372 12.371 7.02983 11.6628C6.70256 10.8964 6.53807 10.1414 6.53642 9.42076C6.53524 8.90937 6.62709 8.42101 6.80042 7.96733C6.98533 7.49038 7.28661 7.05964 7.68101 6.68681C8.42333 5.95288 9.49228 5.68312 10.3419 6.08796C10.6328 6.21514 10.8774 6.42378 11.0641 6.70229L12.4169 8.59363C12.5568 8.77926 12.662 8.9766 12.7438 9.174C12.8373 9.40624 12.896 9.63857 12.8965 9.8594C12.8972 10.1616 12.8164 10.4639 12.6543 10.7316C12.5501 10.9062 12.3994 11.1158 12.2022 11.3138L12.0515 11.4769C12.1214 11.5697 12.2031 11.6857 12.3313 11.8249C12.5761 12.1033 12.8441 12.4048 13.1354 12.6947C13.4267 12.973 13.718 13.2513 14.0092 13.4947C14.1489 13.6106 14.2655 13.7033 14.3587 13.7612L14.5209 13.5981C14.7297 13.3884 14.9387 13.2252 15.1477 13.1201C15.5308 12.8752 16.1234 12.8157 16.647 13.0353C16.8332 13.1046 17.0195 13.2088 17.2174 13.3478L19.1621 14.7148C19.4299 14.9002 19.6396 15.1554 19.7798 15.4456C19.8967 15.7359 19.9439 15.9915 19.9445 16.2588C19.9453 16.6075 19.8646 16.9447 19.7142 17.2705C19.5638 17.573 19.39 17.8407 19.1814 18.0853C18.8103 18.4929 18.381 18.7961 17.9164 18.9948C17.4519 19.1934 16.9521 19.2876 16.4406 19.2887ZM9.49678 7.65892C9.42703 7.65909 9.19459 7.65962 8.90462 7.95085C8.68423 8.16057 8.53358 8.38176 8.42951 8.62608C8.32545 8.87039 8.27958 9.14944 8.28022 9.42838C8.28134 9.91652 8.39879 10.4393 8.63258 10.9966C8.87804 11.5772 9.23988 12.1923 9.68305 12.8073C10.1379 13.4222 10.6508 14.0371 11.2218 14.6052C11.7927 15.1618 12.3983 15.6834 13.0271 16.1469C13.6327 16.5871 14.2497 16.9344 14.8665 17.2003C15.7509 17.5818 16.5647 17.6729 17.2267 17.3925C17.459 17.2989 17.6679 17.1357 17.8767 16.9261C17.981 16.8096 18.0622 16.6932 18.1316 16.5419C18.1663 16.4605 18.1892 16.3674 18.1891 16.2861C18.189 16.2628 18.1889 16.228 18.1539 16.1583L16.2094 14.8146C16.1279 14.7567 16.0464 14.7104 15.9766 14.6873C15.9301 14.7106 15.8606 14.7457 15.733 14.8738L15.2923 15.3165C14.9559 15.6543 14.4214 15.7485 13.9909 15.5984L13.7814 15.5059C13.5137 15.3671 13.2109 15.1585 12.8731 14.8688C12.5469 14.5906 12.2325 14.3007 11.8946 13.9761C11.5683 13.6398 11.277 13.3266 10.9972 13.0019C10.6941 12.6423 10.4841 12.3522 10.3441 12.1084L10.2155 11.8065C10.1804 11.6904 10.1684 11.5626 10.1682 11.4463C10.1674 11.1209 10.283 10.8301 10.5034 10.5971L10.9441 10.1428C11.0717 10.0147 11.1181 9.94486 11.1412 9.89831C11.1061 9.81703 11.0595 9.7474 11.0012 9.66617L9.6365 7.75161L9.49678 7.65892Z"
                fill="currentColor"
              />
            </svg>
            Fale conosco
          </a>
        </app-botao>
      </div>
    `;
  }
}
customElements.define("contatos-section", ContatosSection);
