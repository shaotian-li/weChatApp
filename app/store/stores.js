import { observable } from 'mobx';

class RootStore {
  @observable userName = null;
}

export default new RootStore();
