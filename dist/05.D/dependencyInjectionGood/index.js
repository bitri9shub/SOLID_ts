"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CrudService {
    database;
    // constructor
    save(object) {
        this.database.save(object);
    }
}
class MySQLDatabase {
    save(object) {
        if (object.id === undefined) {
            // insert
        }
        else {
            // update
        }
    }
}
class MyMONGODatabase {
    save(object) {
        if (object.id === undefined) {
            // insert
        }
        else {
            // update
        }
    }
}
//# sourceMappingURL=index.js.map