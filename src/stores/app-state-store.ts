import { RootStore } from './root-store';
import { AppState } from 'react-native';

export class AppStateStore {
  private rootStore: RootStore;
  public appState = AppState.currentState;

  public resumeCallbacks: any[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    AppState.addEventListener('change', (state) => {
      if (state === 'active' && this.appState !== state) {
        this.resumeCallbacks.forEach((cb) => cb());
      }
      this.appState = state;
    });
  }

  public onResume(cb: () => void) {
    this.resumeCallbacks.push(cb);
  }
}
