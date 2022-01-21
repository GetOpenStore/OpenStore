import BootstrapBlockElement from "components/abstract/BootstrapBlockElement";
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("openstore-card")
class Card extends BootstrapBlockElement {
  @property()
  title = "";
  @property()
  subtitle = "";
  @property()
  details = "";
  @property()
  href = "#";

  static styles = [
    BootstrapBlockElement.styles,
    css`
      :host,
      .card {
        width: 150px;
      }
      @media (min-width: 992px) {
        :host,
        .card {
          width: 300px;
        }
      }
      @media (min-width: 1400px) {
        :host,
        .card {
          width: 330px;
        }
      }

      .card .card-title {
        font-size: 1.25rem;
      }
    `,
  ];

  render() {
    return html`${BootstrapBlockElement.styleLink}

      <div class="card shadow-sm my-3">
        <div class="row g-0 ms-lg-2 align-items-center">
          <!-- <a
            href=${this.href}
            class="col-lg-4 openstore-card-link openstore-jsnav-link"
            @click=${this.clicked}
          >
            <img
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_82290822-e1492536097660.png?auto=format&q=60&fit=max&w=930"
              class="img-fluid"
              alt=""
            />
          </a> -->

          <div class="card-body col-lg-8">
            <h2 class="card-title">
              <a
                href=${this.href}
                class="openstore-card-link openstore-jsnav-link"
                @click=${this.clicked}
                >${this.title}</a
              >
            </h2>
            ${this.subtitle
              ? html`<h3 class="h5 card-subtitle mb-2 text-muted">
                  ${this.subtitle}
                </h3>`
              : ""}
            <p class="card-text">${this.details}</p>
          </div>
        </div>
      </div> `;
  }

  private clicked(event: Event) {
    event.preventDefault();

    if (this.href) {
      ((window as any).openStore as any).updateWindowLocationFragment(
        this.href
      );
    }
  }
}