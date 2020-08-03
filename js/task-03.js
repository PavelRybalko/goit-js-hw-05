class Storage {
  constructor(arr) {
    this.items = arr;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    if (this.items.includes(item)) {
      const i = this.items.indexOf(item);
      this.items.splice(i, 1);
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроид");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.table(storage.items);
