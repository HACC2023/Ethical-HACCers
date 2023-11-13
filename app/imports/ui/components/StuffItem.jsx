import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Trash } from 'react-bootstrap-icons';
import { Stuffs } from '../../api/stuff/Stuff';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const StuffItem = ({ stuff }) => {
  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      // Call the removeItem function with the _id of the stuff item
      Stuffs.collection.remove(stuff._id);
    }
  };

  return (
    <tr>
      <td>{stuff.name}</td>
      <td>{stuff.quantity}</td>
      <td>{stuff.condition}</td>
      <td>
        <Link to={`/edit/${stuff._id}`}>Edit</Link>
      </td>
      <td>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          <i aria-hidden="true"> <Trash /> </i> {/* You may need to adjust the class or icon based on your icon library */}
        </button>
      </td>
    </tr>
  );
};

// Require a document to be passed to this component.
StuffItem.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  removeItem: PropTypes.func.isRequired, // The function to handle item removal
};

export default StuffItem;
