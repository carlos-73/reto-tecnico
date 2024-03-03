'use strict';

class MyGenericResponse {
  constructor(status, code, message, number_records, object) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.number_records = number_records;
    this.object = object;
  }
}
module.exports = MyGenericResponse;
