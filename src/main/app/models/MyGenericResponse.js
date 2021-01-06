'use strict';

class MyGenericResponse {
  constructor(status, code, message, number_records, object) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.number_records = number_records;
    this.object = object;
  }
  toString() {
    var retorno = "status: " + this.status
      + ", code: " + this.code
      + ", message: " + this.message
      + ", number_records: " + this.number_records
      + ", object: " + this.object;
    return retorno;
  }
}
module.exports = MyGenericResponse;