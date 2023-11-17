import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The EventsCollection. It encapsulates state and variable values for stuff.
 */
class EventsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'EventsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      organization: String,
      eventLocation: String,
      quantity: Number,
      eventDate: Date,
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
 * The singleton instance of the EventsCollection.
 * @type {EventsCollection}
 */
export const Events = new EventsCollection();
