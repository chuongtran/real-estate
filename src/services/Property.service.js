import { Property } from 'models/Property.model';
import axios from 'utils/axios';

export const getProperties = async () => {
  const properties = await axios.post('property/find_all');
  return properties.map(property => new Property(property));
};

export const searchProperties = async (params) => {
  // ids, name, street, ward, district, status, province, propertyPurpose, propertyType, houseDirection, minPrice, maxPrice, bedRooms, createdBy
  const properties = await axios.post('property/find/all', params);
  return properties.map(property => new Property(property));
};

export const getProperty = async (id) => {
  const property = await axios.get(`property/${id}`);
  return property ? new Property(property) : null;
};

