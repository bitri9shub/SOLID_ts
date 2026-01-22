class CrudService {
    database: Database

    // constructor

    save(object: any) {
        this.database.save(object)
    }
}

interface Database {
    save(object: any): void
}

class MySQLDatabase implements Database {
    save(object: any): void {
        if (object.id === undefined) {
            // insert
        } else {
            // update
        }
    }
}

class MyMONGODatabase implements Database {
    save(object: any): void {
        if (object.id === undefined) {
            // insert
        } else {
            // update
        }
    }
}