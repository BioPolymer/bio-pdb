import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-flex-layout/iron-flex-layout";
import "./bio-pdb-list";
import "./bio-pdb-viewer";

/**
 * `bio-pdb-panel`
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class BioPdbPanel extends PolymerElement {
  static get properties() {
    return {
      /** An array of PDB IDs. */
      model: {
        type: Array,
        value: []
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .content-panel {
          @apply --layout-horizontal;
        }
        fieldset {
          border-radius: 5px;
          border-color: var(--app-header-color);
          color: var(--app-header-color);
        }
        bio-pdb-viewer {
          margin: auto;
          margin: auto;
          --height: 250px;
          --width: 250px;
        }
      </style>

      <fieldset>
        <legend>Protein Structure</legend>

        <div class="content-panel">
          <bio-pdb-list
            model="[[model]]"
            selected="{{selected}}"
          ></bio-pdb-list>
          <bio-pdb-viewer pdb-id="[[selected]]"></bio-pdb-viewer>
        </div>
      </fieldset>
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
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
  }
}

customElements.define("bio-pdb-panel", BioPdbPanel);
