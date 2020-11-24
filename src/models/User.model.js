export class User {
  constructor(data = {}) {
    const fields = Object.keys(data);
    fields.forEach((field) => {
      this[field] = data[field];
    });
    const { firstName, lastName, avatar } = data;
    this.fullName = [firstName, lastName].join(' ');
    this.avatar = avatar || '/ic_avatar-default.png';
  }
}