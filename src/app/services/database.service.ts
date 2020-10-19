import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  database: SQLiteObject;
  constructor (private platform: Platform, private sqlite: SQLite) {
    if (this.platform.is ('cordova')) {
      this.platform.ready ().then (() => {
        this.sqlite.create ({
          name: 'planner.db',
          location: 'default'
        }).then ((db: SQLiteObject) => {
          this.database = db;
          this.create_tables ();
        });
      });
    }
  }

  create_tables () {
    let sql: string;

    sql = `
      CREATE TABLE IF NOT EXISTS Projects (
          id               INTEGER PRIMARY KEY,
          area_id          INTEGER,
          name             TEXT NOT NULL,
          note             TEXT,
          due_date         TEXT,
          color            INTEGER,
          is_todoist       INTEGER,
          inbox_project    INTEGER,
          team_inbox       INTEGER,
          item_order       INTEGER,
          is_deleted       INTEGER,
          is_archived      INTEGER,
          is_favorite      INTEGER,
          is_sync          INTEGER,
          shared           INTEGER,
          is_kanban        INTEGER,
          show_completed   INTEGER,
          sort_order       INTEGER
      );
    `;

    this.database.executeSql (sql, [])
      .then(() => console.log('Table Projects created'))
      .catch(e => console.log(e));
  }
}
