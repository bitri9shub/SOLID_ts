class MySQLDatabase {
    insert(object: object) {
        // insert
    }

    update(object: object) {
        // update
    }
}

/* ###############################
    This section at the end
############################### */

// what will happen if we want to have
// two types of database

class MyMONGODatabase {
    insert(object: object) {
        // insert
    }

    update(object: object) {
        // update
    }
}

/* ###############################
    This section at the end
############################### */

class CrudService {
    database: MySQLDatabase

    // constructor

    save(object: any): void {
        if (object.id === undefined) {
            this.database.insert(object)
        } else {
            this.database.update(object)
        }
    }
}

