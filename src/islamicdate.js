export class IslamicDateEngine {
  constructor(dataset) {
    this.dataset = dataset;
    this.index = new Map();

    for (const row of dataset) {
      this.index.set(row.gregorian_date, row);
    }
  }

  getByGregorian(dateStr) {
    return this.index.get(dateStr) || null;
  }

  getAll() {
    return this.dataset;
  }
}

