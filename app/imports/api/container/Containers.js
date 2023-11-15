import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ContainersCollection. It encapsulates state and variable values for stuff.
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
      checkoutDate: Date, // Automatically populated
      returnDate: Date, // Null
      status: {
        type: String,
        allowedValues: ['cleaning', 'with-vendor', 'in-use'],
        defaultValue: '',
      },
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
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
export const Stuffs = new ContainersCollection();
