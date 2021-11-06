import { componentTypes, FieldArray, useFormApi } from '@data-driven-forms/react-form-renderer';

import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import FormTemplate from '@data-driven-forms/suir-component-mapper/form-template';
import componentMapper from '@data-driven-forms/suir-component-mapper/component-mapper';

import './schedule-delivery.module.scss';
import { schema } from './schema'

import Grid from '@material-ui/core/Grid';

/* eslint-disable-next-line */
export interface ScheduleDeliveryProps {}

const OneRowFieldWrapper = ({ fields }) => {
  const { renderForm } = useFormApi();

  return (
    <div>
      alma
      {fields.map((field) => (
        <div key={field.name}>
          {renderForm([field])}
        </div>
      ))}
    </div>
  );
};

const TwoColumns = ({ fields }) => {
  const { renderForm } = useFormApi();

  return (
    <Grid container spacing={3}>
      {fields.map((field) => (
        <Grid key={field.name} item xs={6}>
          {renderForm([field])}
        </Grid>
      ))}
    </Grid>
  );
};

const _componentMapper = {
  ...componentMapper,
  'two-columns': TwoColumns,
};

console.log(_componentMapper)

export function ScheduleDelivery(props: ScheduleDeliveryProps) {
  return (
    <div>
      <h1>Welcome to ScheduleDelivery!</h1>
      <FormRenderer
          schema={schema}
          FormTemplate={FormTemplate}
          componentMapper={_componentMapper}
          onSubmit={console.log}
        />
    </div>
  );
}

export default ScheduleDelivery;


