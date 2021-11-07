import './list-simple.module.scss';
import React, { Fragment, useState } from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import FieldArray from '@data-driven-forms/react-form-renderer/field-array';

import componentMapper from '@data-driven-forms/suir-component-mapper/component-mapper';

import { Button, Icon } from 'semantic-ui-react';
/* eslint-disable-next-line */
import { Table } from 'semantic-ui-react';

const FormButton = ({ label, variant, ...props }) => (
  <button {...props}>{label}</button>
);

const IconButton = (props) => {
  const { input, icon, ...rest } = useFieldApi(props);
  const fieldApi = useFieldApi(props);
  return (
    <div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log(e);
          console.log(props);
          console.log(fieldApi);
        }}
        icon
        submit={false}
      >
        <Icon name={icon} />
      </Button>
    </div>
  );
};

const ArrayItem = ({ fields, name }) => {
  const { renderForm } = useFormApi();
  const editedFields = fields.map((field) => ({
    ...field,
    name: `${name}.${field.name}`,
  }));

  return (
    <>
      {editedFields.map((field, index) => (
        <Table.Cell key={index}>{renderForm([field])}</Table.Cell>
      ))}
    </>
  );
};

const FieldArrayCustom = (props) => {
  const {
    fieldKey,
    arrayValidator,
    title,
    description,
    fields,
    itemDefault,
    meta,
    getState,
    ...rest
  } = useFieldApi(props);
  const { dirty, submitFailed, error } = meta;
  const isError = (dirty || submitFailed) && error && typeof error === 'string';

  return (
    <FieldArray key={fieldKey} name={rest.input.name} validate={arrayValidator}>
      {(cosi) => (
        <Fragment>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          <Table basic>
            <Table.Body>
              {cosi.fields.map((name, index) => (
                <Table.Row key={index}>
                  <ArrayItem
                    key={`${name || fieldKey}-${index}`}
                    fields={fields}
                    name={name}
                  />
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {isError && error}
          <FormButton
            type="button"
            variant="add"
            onClick={() => cosi.fields.push(itemDefault)}
            label="Add +"
          />
        </Fragment>
      )}
    </FieldArray>
  );
};

const _componentMapper = {
  ...componentMapper,
  [componentTypes.FIELD_ARRAY]: FieldArrayCustom,
  [componentTypes.BUTTON]: IconButton,
};

const FormTemplate = ({ formFields }) => {
  const { handleSubmit } = useFormApi();

  return <form onSubmit={handleSubmit}>{formFields}</form>;
};

const schema = {
  fields: [
    {
      component: componentTypes.FIELD_ARRAY,
      name: 'nice_people',
      fieldKey: 'delivery-sequence',
      title: 'Delivery Sequence',
      description: '',
      fields: [
        {
          component: componentTypes.BUTTON,
          icon: 'play',
          action: 'copy',
        },
        {
          component: 'select',
          name: 'sequence',
          initialValue: 'AdSet Ad #1',
          options: [
            { value: 'AdSet Ad #1', label: 'AdSet Ad #1' },
            { value: 'AdSet Ad #2', label: 'AdSet Ad #2' },
            { value: 'AdSet Ad #3', label: 'AdSet Ad #3' },
            { value: 'AdSet Ad #4', label: 'AdSet Ad #4' },
          ],
          placeholder: 'Select Ad',
        },
      ],
    },
  ],
};

const FieldArrayProvider = () => {
  const [values, setValues] = useState(undefined);

  const onSubmit = (values) => console.log(values);

  return (
    <React.Fragment>
      <FormRenderer
        componentMapper={_componentMapper}
        FormTemplate={FormTemplate}
        schema={schema}
        onSubmit={onSubmit}
        debug={({ values }) => setValues(values)}
      />
      <div style={{ marginTop: 16 }}>
        <h3>Form values</h3>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
    </React.Fragment>
  );
};

FieldArrayProvider.displayName = 'FieldArrayProvider';

export function ListSimple(props) {
  return (
    <div>
      <h1>Welcome to ListSimple!</h1>
      <FieldArrayProvider></FieldArrayProvider>
    </div>
  );
}

export default ListSimple;
