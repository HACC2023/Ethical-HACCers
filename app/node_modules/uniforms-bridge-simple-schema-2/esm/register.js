import SimpleSchema from 'simpl-schema';
import { filterDOMProps } from 'uniforms';
// Register custom property.
SimpleSchema.extendOptions(['uniforms']);
filterDOMProps.register('autoValue', 'blackbox', 'custom', 'decimal', 'defaultValue', 'exclusiveMax', 'exclusiveMin', 'max', 'maxCount', 'min', 'minCount', 'optional', 'regEx', 'trim', 'type');
