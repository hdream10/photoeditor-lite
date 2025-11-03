import * as SQLite from "expo-sqlite";

class SQLiteClient {
  private db: SQLite.SQLiteDatabase;

  public constructor(databaseName: string) {
    this.db = SQLite.openDatabaseSync(databaseName);
  }

  public async run(sql: string): Promise<void> {
    return this.db.execAsync(sql).catch((error) => {
      console.error("[SQLite run error]", error);
      throw error;
    });
  }

  public async query<T>(sql: string): Promise<T[]> {
    return this.db.getAllAsync<T>(sql).catch((error) => {
      console.error("[SQLite query error]", error);
      throw error;
    });
  }
}

export default SQLiteClient;
