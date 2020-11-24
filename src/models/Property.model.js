/* eslint-disable max-classes-per-file */
import { User } from "./User.model";

export class PropertyDetail {
  constructor(data = {}) {
    const { area, bathRooms, bedRooms, bookingAvailable, description, houseDirection} = data;
    this.area = area || 0;
    this.bathRooms = bathRooms || 0;
    this.bedRooms = bedRooms || 0;
    this.bookingAvailable = bookingAvailable || false;
    this.description = description;
    this.houseDirection = houseDirection;
  }
}

export class Property {
  constructor(data = {}) {
    const fields = Object.keys(data);
    fields.forEach((field) => {
      this[field] = data[field];
    });
    const { street, ward, district, province, propertyDetail, createdBy } = data;
    this.thumbnail = this.images && this.images.length ? this.images[0].url : '/bg_property-default.png';
    this.address = [street, ward, district, province].join(', ');
    this.propertyDetail = new PropertyDetail(propertyDetail);
    this.createdBy = new User(createdBy);
    this.properties = (data.properties || []).map(p => new Property(p));
  }
};
