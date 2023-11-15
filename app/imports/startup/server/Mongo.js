import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Containers } from '../../api/container/Containers';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

const addContainer = (container) => {
  console.log(`  Adding Container: ${container.containerId})`);
  Containers.collection.insert(container);
};

// Initialize the ContainersCollection if empty.
if (Containers.collection.find().count() === 0) {
  if (Meteor.settings.defaultContainers) {
    console.log('Creating default containers.');
    Meteor.settings.defaultContainers.forEach(container => addContainer(container));
  }
}
