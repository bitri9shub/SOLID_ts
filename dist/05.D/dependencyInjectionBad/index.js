"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MySQLDatabase {
    insert(object) {
        // insert
    }
    update(object) {
        // update
    }
}
/* ###############################
    This section was added later
############################### */
// what will happen if we want to have
// two types of database
class MyMONGODatabase {
    insert(object) {
        // insert
    }
    update(object) {
        // update
    }
}
/* ###############################
    This section was added later
############################### */
class CrudService {
    database;
    // constructor
    save(object) {
        if (object.id === undefined) {
            this.database.insert(object);
        }
        else {
            this.database.update(object);
        }
    }
}
//# sourceMappingURL=index.js.map