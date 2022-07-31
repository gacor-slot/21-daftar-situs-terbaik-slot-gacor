'use babel';

import 21DaftarSitusTerbaikSlotGacor from '../lib/21-daftar-situs-terbaik-slot-gacor';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('21DaftarSitusTerbaikSlotGacor', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('21-daftar-situs-terbaik-slot-gacor');
  });

  describe('when the 21-daftar-situs-terbaik-slot-gacor:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.21-daftar-situs-terbaik-slot-gacor')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '21-daftar-situs-terbaik-slot-gacor:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.21-daftar-situs-terbaik-slot-gacor')).toExist();

        let 21DaftarSitusTerbaikSlotGacorElement = workspaceElement.querySelector('.21-daftar-situs-terbaik-slot-gacor');
        expect(21DaftarSitusTerbaikSlotGacorElement).toExist();

        let 21DaftarSitusTerbaikSlotGacorPanel = atom.workspace.panelForItem(21DaftarSitusTerbaikSlotGacorElement);
        expect(21DaftarSitusTerbaikSlotGacorPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, '21-daftar-situs-terbaik-slot-gacor:toggle');
        expect(21DaftarSitusTerbaikSlotGacorPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.21-daftar-situs-terbaik-slot-gacor')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '21-daftar-situs-terbaik-slot-gacor:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let 21DaftarSitusTerbaikSlotGacorElement = workspaceElement.querySelector('.21-daftar-situs-terbaik-slot-gacor');
        expect(21DaftarSitusTerbaikSlotGacorElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, '21-daftar-situs-terbaik-slot-gacor:toggle');
        expect(21DaftarSitusTerbaikSlotGacorElement).not.toBeVisible();
      });
    });
  });
});
