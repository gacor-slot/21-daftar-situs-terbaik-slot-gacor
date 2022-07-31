'use babel';

import 21DaftarSitusTerbaikSlotGacorView from './21-daftar-situs-terbaik-slot-gacor-view';
import { CompositeDisposable } from 'atom';

export default {

  21DaftarSitusTerbaikSlotGacorView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.21DaftarSitusTerbaikSlotGacorView = new 21DaftarSitusTerbaikSlotGacorView(state.21DaftarSitusTerbaikSlotGacorViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.21DaftarSitusTerbaikSlotGacorView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '21-daftar-situs-terbaik-slot-gacor:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.21DaftarSitusTerbaikSlotGacorView.destroy();
  },

  serialize() {
    return {
      21DaftarSitusTerbaikSlotGacorViewState: this.21DaftarSitusTerbaikSlotGacorView.serialize()
    };
  },

  toggle() {
    console.log('21DaftarSitusTerbaikSlotGacor was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
