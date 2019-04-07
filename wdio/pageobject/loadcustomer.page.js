var page = require('./page');

var loadcustomer = Object.create(page, {
  firstname: {
    get: function() {
      return $("*[name='firstName']");
    },
  },
  lastname: {
    get: function() {
      return $("*[name = 'lastName']");
    },
  },
  dob: {
    get: function() {
      return $("*[name = 'dob']");
    },
  },
  primaryAddress: {
    get: function() {
      return $("select[name = 'primaryAddress']");
    },
  },
  submitButton: {
    get: function() {
      return $('[type=submit]');
    },
  },

  open: {
    value: function() {
      page.open.call(this, 'login');
    },
  },
  submit: {
    value: function() {
      this.submitButton.click();
    },
  },
});

module.exports = loadcustomer;
