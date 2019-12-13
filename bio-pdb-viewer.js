/**
 * `bio-pdb-viewer` This component displays a PDB molecule image.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class BioPdbViewer extends Polymer.Element {
  static get template() {
    return Polymer.html`
      <style>
          :host {
              display: block;
              --height: 100%;
              --width: 100%;
            }
          img{
            height: var(--height);
            width: var(--width);
          }
        </style>
    <img id="pdbImg" title="{{title}}">
`;
  }

  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return "bio-pdb-viewer";
  }

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
    return {
      /** The PDB ID for the protein structure. */
      pdbId: {
        type: String,
        value: "4LUC",
        observer: "pdbIdChanged",
        notify: true
      },

      /** The type of molecule. */
      moleculeType: { type: String, value: "bio" },

      /** The size of the molecule image. */
      size: { type: String, value: "250" },

      /** The title of the image. */
      title: { type: String, value: "KRAS" }
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
    this.$.pdbImg.src = this._getUrl();

    Polymer.RenderStatus.afterNextRender(this, function() {});
  }

  pdbIdChanged(newVal) {
    this.$.pdbImg.src = this._getUrl();
    this.title = this.pdbId;
  }

  _getUrl() {
    let id = this.pdbId.toLowerCase();
    let folder = id.substring(1, 3);
    return `https://cdn.rcsb.org/images/rutgers/${folder}/${id}/${id}.pdb1-250.jpg`;
  }
}

window.customElements.define(BioPdbViewer.is, BioPdbViewer);
