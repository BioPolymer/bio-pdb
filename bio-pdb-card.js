import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

/**
 * `bio-pdb-card`
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class BioPdbCard extends PolymerElement {
  static get properties() {
    return {
      /** A string containing the PDB ID */
      model: {
        type: Object,
        value: null
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        div {
          color: var(--pdb-card-font-color, black);
          font-size: var(--pdb-card-font-size, 12px);
          font-family: var(--pdb-card-font-family, "Roboto");
        }
      </style>

      <div id="[[model]]" on-click="_cardSelected">{{model}}</div>
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * This method is fired whenever the card is tapped.
   * @param e the tap event
   */
  _cardSelected(e) {
    this.dispatchEvent(
      new CustomEvent("pdbIdChanged", {
        bubbles: true,
        composed: true,
        detail: {
          pdbId: this.model
        }
      })
    );
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
  }
}

customElements.define("bio-pdb-card", BioPdbCard);
