import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The VendorsCollection. It encapsulates state and variable values for stuff.
 */
class VendorsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'VendorsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      organization: String,
      organizationLocation: Number,
      quantity: Date,
      orderDate: Date, // Automatically collected
      returnDate: Date,
      types: {
        type: String,
        allowedValues: ['small', 'medium', 'large'],
        defaultValue: 'unassigned',
      },
      cleaningLocation: {
        type: String,
        allowedValues: ['location-1', 'location-2', 'location-3'],
        defaultValue: 'unassigned',
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
 * The singleton instance of the VendorsCollection.
 * @type {VendorsCollection}
 */
export const Vendors = new VendorsCollection();
