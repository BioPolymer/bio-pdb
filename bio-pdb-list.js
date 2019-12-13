import { PolymerElement, html } from "@polymer/polymer";
import "@polymer/paper-listbox/paper-listbox";
import "@polymer/paper-item";

/**
 * `bio-pdb-list` The 'bio-pdb-list' element lists PDB IDs.  This element is used in conjunction with 
 * a data source that provides PDB IDs (like the bio-mygene-search component)

    <bio-pdb-list></bio-pdb-list>

 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {PolymerElement}
 */
class BioPdbList extends PolymerElement {
  static get template() {
    return html`
      <style>
        .pdb-card-tray {
          @apply --layout-vertical;
          height: var(--pdb-list-height, 100%);
          width: var(--pdb-list-width, 10vh);
          overflow-y: scroll;
        }
        paper-listbox {
          background-color: #b6b6b6;
          height: 100%;
          border-radius: 5px;
        }

        paper-item {
          background-color: transparent;
          color: white;
          font-size: 0.9em;

          --paper-item-selected: {
            background-color: rgba(255, 255, 255, 0.95px);
          }
        }
        label {
          font-size: 0.9em;
        }
      </style>

      <div class="pdb-card-tray">
        <label>PDB IDs</label>
        <paper-listbox
          id="pdb-listbox"
          selected="{{selected}}"
          attr-for-selected="id"
        >
          <template is="dom-repeat" items="[[model]]" as="pdbId">
            <paper-item id="[[pdbId]]">[[pdbId]]</paper-item>
          </template>
        </paper-listbox>
      </div>
    `;
  }

  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return "bio-pdb-list";
  }

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
    return {
      /** An array of PDB IDs */
      model: {
        type: Array,
        value: []
      },

      /** A string containing the selected PDB ID */
      selected: {
        type: String,
        notify: true
      }
    };
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
   * Use for one-time configuration of your component after local DOM is initialized.
   */
  ready() {
    super.ready();

    Polymer.RenderStatus.afterNextRender(this, function() {});
  }
}

window.customElements.define(BioPdbList.is, BioPdbList);
