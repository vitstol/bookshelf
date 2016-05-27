/**
 * Created by vitalii on 25.05.16.
 */
Ext.define('BookShelf.store.BookShelfStore', {
    extend: 'Ext.data.Store',
    requires : [
        'BookShelf.model.BookShelfModel'
    ],
    model: 'BookShelf.model.BookShelfModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'book',
            read: 'book',
            destroy: 'book',
            update: 'book'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});