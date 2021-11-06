import componentTypes from '@data-driven-forms/react-form-renderer/component-types';

export const mockSchema = {
  title: 'Example of conditions',
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'field-1',
      label: 'Field 1',
      helperText: 'To show field 2 type a cat',
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'field-2',
      label: 'Field 2',
      helperText: 'To show field 3 type a cat as the second word',
      condition: {
        when: 'field-1',
        is: 'cat',
      },
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'field-3',
      label: 'Field 3',
      condition: {
        when: 'field-2',
        pattern: /^\w+ cat/,
      },
      initialValue: 'We all love cats!',
    },
    {
      component: componentTypes.CHECKBOX,
      name: 'check-1',
      label: 'I want to be a true',
      condition: { when: 'field-3', isNotEmpty: true },
    },
    {
      component: componentTypes.CHECKBOX,
      name: 'check-2',
      label: 'I also want to be true',
      condition: { when: 'field-3', isNotEmpty: true },
    },
    {
      component: componentTypes.CHECKBOX,
      name: 'check-3',
      label: 'Hmmm, please, uncheck me.',
      condition: {
        and: [
          { when: 'check-1', is: true },
          { when: 'check-2', is: true },
        ],
      },
      initialValue: true,
    },
    {
      component: componentTypes.PLAIN_TEXT,
      name: 'congrats!',
      label: 'You made it!',
      condition: {
        and: [
          {
            and: [
              { when: 'check-1', is: true },
              { when: 'check-2', is: true },
            ],
          },
          { not: { when: 'check-3', isNotEmpty: true } },
        ],
      },
    },
  ],
};

const sequenceSchema = {
  component: 'select',
  name: 'select',
  initialValue: 'AdSet Ad #1',
  label: 'Select Ad',
  options: [
    { value: 'AdSet Ad #1', label: 'AdSet Ad #1' },
    { value: 'AdSet Ad #2', label: 'AdSet Ad #2' },
    { value: 'AdSet Ad #3', label: 'AdSet Ad #3' },
    { value: 'AdSet Ad #4', label: 'AdSet Ad #4' },
  ],
  placeholder: 'test',
  helperText: 'select ad',
  hideField: false,
  isDisabled: false,
};

const twoColumnSchema = {
  fields: [
    {
      name: 'layout',
      component: 'two-columns',
      fields: [
        {
          name: 'first-name',
          label: 'First name',
          component: componentTypes.TEXT_FIELD,
        },
        {
          name: 'last-name',
          label: 'Last name',
          component: componentTypes.TEXT_FIELD,
        },
        {
          name: 'address-1',
          label: 'Address 1',
          component: componentTypes.TEXT_FIELD,
        },
        {
          name: 'address-2',
          label: 'Address 2',
          component: componentTypes.TEXT_FIELD,
        },
      ],
    },
  ],
};

const scheduleSchema = [
  {
    component: 'date-picker',
    label: 'Start date',
    name: 'start-date',
  },
  {
    component: 'date-picker',
    label: 'End Date',
    name: 'end-date',
  },
  {
    component: componentTypes.FIELD_ARRAY,
    name: 'delivery-sequence',
    label: '',
    fields: [sequenceSchema],
  },
];

export const schema = {
  fields: [
    {
      component: 'radio',
      name: 'delivery-preference',
      initialValue: 'standard',
      label: 'Delivery Scedhuling Preference',
      isDisabled: false,
      options: [
        { value: 'standard', label: 'Standard' },
        { value: 'sequenced', label: 'Sequenced' },
        { value: 'scheduled', label: 'Scheduled' },
      ],
      hideField: false,
      isRequired: true,
      validate: [{ type: 'required' }],
    },
    {
      component: componentTypes.FIELD_ARRAY,
      name: 'delivery-sequence',
      label: 'Sequenced ad delivery ',
      fields: [sequenceSchema],
      condition: {
        when: 'delivery-preference', // name of controlled field
        is: 'sequenced', // condition
      },
    },
    {
      component: componentTypes.FIELD_ARRAY,
      name: 'delivery-schedule',
      label: 'Scheduled Ad Delivery',
      fields: [...scheduleSchema],
      condition: {
        when: 'delivery-preference', // name of controlled field
        is: 'scheduled', // condition
      },
    },
  ],
};
