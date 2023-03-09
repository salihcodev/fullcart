// pkgs:

// utils:

// SLICE LOGICS::
export default class crudSync {
  public state;

  constructor(state: any) {
    this.state = state;
  }

  public onAddingSync(): any {
    let existedItem = this.state.items.filter(({ _id }: any) => _id === this.state.creationResult._id);

    if (existedItem.length > 0) {
      const oldList = this.state.items.filter(({ _id }: any) => _id !== this.state.creationResult._id);

      this.state.items = [...oldList, { ...existedItem[0], count: existedItem[0].count + 1 }];
    } else {
      this.state.items = [...this.state.items, this.state.creationResult];
      existedItem = [];
    }

    return this.state.items;
  }

  public onDeletingSync(): any {
    this.state.items = this.state.items.filter(({ _id }: any) => _id !== this.state.deletionResult);

    return this.state.items;
  }
}
