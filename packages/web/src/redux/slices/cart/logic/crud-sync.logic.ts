// pkgs:

// utils:

// SLICE LOGICS::
export default class crudSync {
  public state;

  constructor(state: any) {
    this.state = state;
  }

  public getCost(): any {
    let totalCost = 0;
    for (let i in this.state.items) {
      totalCost += this.state.items[i].count * this.state.items[i].priceInDollar;
    }

    this.state.cartStats.cost = totalCost;

    return this.state.cartStats.cost;
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

  public getCount(): any {
    this.state.cartStats.count = this.state.items.length;
    return this.state.cartStats.count;
  }
}
