export default class ErrorRepository {
  constructor() {
    this.members = new Map([
      [0, 'Not found'],
      [1, 'Process not finished'],
      [2, 'Gateway Timeout'],
      [3, 'No connect'],
    ]);
  }

  translate(code) {
    return this.members.has(code) ? this.members.get(code) : 'Unknown error';
  }
}
