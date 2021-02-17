import { PolymerElement, html } from "@polymer/polymer/polymer-element";

import "aspen-protein-viewer/ngl-viewer";

/**
 * `bio-pdb-viewer` This component displays a PDB molecule 3D view.
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {PolymerElement}
 */
class BioPdbViewer extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --height: 100%;
          --width: 100%;
        }
        .threeD-protein {
          height: var(--height);
          width: var(--width);
        }
      </style>

      <div class="threeD-protein" title="[[pdbId]]">
        <ngl-viewer data-resource="rcsb://[[pdbId]]"></ngl-viewer>
      </div>
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
        notify: true,
      },

      /** The type of molecule. */
      moleculeType: { type: String, value: "bio" },

      /** The size of the molecule image. */
      size: { type: String, value: "250" },
    };
  }
}

window.customElements.define(BioPdbViewer.is, BioPdbViewer);
