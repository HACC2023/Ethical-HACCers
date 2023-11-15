import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ContainersCollection. It encapsulates state and variable values for containers.
 */
class ContainersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ContainersCollection';

    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);

    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      containerId: String,
      checkoutDate: {
        type: Date,
        defaultValue: new Date(), // Automatically populate with the current date
      },
      returnDate: {
        type: Date,
        optional: true, // Initially null, to be updated upon return
      },
      status: {
        type: String,
        allowedValues: ['cleaning', 'with-vendor', 'in-use'],
        defaultValue: 'with-vendor',
      },
    });

    // Attach the schema to the collection, so all attempts to insert a document are checked against the schema.
    this.collection.attachSchema(this.schema);

    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ContainersCollection.
 * @type {ContainersCollection}
 */
export const Containers = new ContainersCollection();
