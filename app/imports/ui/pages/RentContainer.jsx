// RentContainer.jsx
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField, DateField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Containers } from '../../api/container/Containers';

const formSchema = new SimpleSchema({
  containerId: String,
  checkoutDate: {
    type: Date,
    defaultValue: new Date(),
  },
  returnDate: {
    type: Date,
    optional: true,
  },
  status: {
    type: String,
    allowedValues: ['unassigned', 'cleaning', 'with-vendor', 'in-use'],
    defaultValue: 'unassigned',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

const RentContainer = () => {
  const submit = (data, formRef) => {
    const { containerId, checkoutDate, returnDate, status } = data;
    Containers.collection.insert(
      { containerId, checkoutDate, returnDate, status },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="containerId" />
                <DateField name="checkoutDate" disabled />
                <DateField name="returnDate" />
                <SelectField name="status" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default RentContainer;
