import { SQLiteClient } from "@/shared/database";
import type { IPhotoHistoryItem } from "./types";

class PhotoHistoryRepository {
  private db: SQLiteClient;

  public constructor(db: SQLiteClient) {
    this.db = db;
  }

  public async init(): Promise<void> {
    await this.db.run(`
          CREATE TABLE IF NOT EXISTS photo_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uri TEXT NOT NULL,
            createdAt INTEGER NOT NULL
          );
        `);
  }

  public async getAll(): Promise<IPhotoHistoryItem[]> {
    return this.db.query<IPhotoHistoryItem>(`
      SELECT id, uri, createdAt
      FROM photo_history
      ORDER BY createdAt DESC;
    `);
  }

  public async add(uri: string): Promise<void> {
    const now = Date.now();
    await this.db.run(`
      INSERT INTO photo_history (uri, createdAt)
      VALUES ('${uri}', ${now});
    `);
  }
}

export default PhotoHistoryRepository;
