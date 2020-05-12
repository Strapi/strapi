const form = {
  firstname: {
    label: 'Settings.permissions.users.form.firstname',
    placeholder: 'e.g. John',
    type: 'text',
    validations: {
      required: true,
    },
  },
  lastname: {
    label: 'Settings.permissions.users.form.lastname',
    placeholder: 'e.g. Doe',
    type: 'text',
    validations: {
      required: true,
    },
  },
  email: {
    label: 'Settings.permissions.users.form.email',
    placeholder: 'e.g. john.doe@strapi.io',
    type: 'email',
    validations: {
      required: true,
    },
  },
};

export default form;
