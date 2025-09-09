export class TableManager {
  // TODO: implement table and matchmaking logic
  tables = new Map<string, unknown>();
  createTable(name: string) {
    const id = `${Date.now()}`;
    this.tables.set(id, { name });
    return id;
  }
}
