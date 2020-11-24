import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Tag, Section } from 'components/Common';
import { Box } from 'components/Common/Box';
import withHeader from 'components/Header/withHeader';
import { useHistory, useParams } from 'react-router';
import { getProperty } from 'services/Property.service';
import { useLoading } from 'utils/hooks';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Sidebar from 'components/Sidebar/Sidebar';
import Author from 'components/Property/Author';
import BookingForm from 'components/BookingForm/BookingForm';
import SearchForm from 'components/SearchForm/SearchForm';
import Map from 'components/Map/Map';
import ReviewForm from 'components/ReviewForm/ReviewForm';
import PropertyCard from 'components/Property/PropertyCard';
import { Col, Row, Spin } from 'antd';
import { decamelize } from 'utils/parsers';

const MainContent = styled.div`
  max-width: 65%;
  flex: 1;
`;

const PagePropertyDetails = () => {
  const { propertyId } = useParams();
  const history = useHistory();
  const [propertyLoading, withPropertyLoading] = useLoading(false);
  const [property, setProperty] = useState(undefined);

  const { name, lat, lng, properties } = property || {};

  useEffect(() => {
    const doGetProperty = async () => {
      const property = await withPropertyLoading(() => getProperty(propertyId));
      setProperty(property);
    };
    doGetProperty();
  }, [propertyId]);

  const onSearch = filterParams => {
    history.push({
      pathname: '/properties',
      search: `?${new URLSearchParams(decamelize(filterParams)).toString()}`,
    });
  };

  if (!property) return null;

  if (propertyLoading) {
    return (
      <div className="text-center mt-10">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <Gallery images={property.images} />
      <Section grey>
        <Container className="flex justify-content-space-between">
          <MainContent>
            <Box>
              <div className="flex justify-content-space-between">
                <div>
                  <h2 className="text--size-30 text--bold mb-1">{property.name}</h2>
                  <p className="text--size-13 mb-0">{property.address}</p>
                </div>
                <div>
                  <div className="text--bold">
                    <b className="text--size-30">13,000</b>
                    <span className="text--size-17">/mo</span>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div className="mb-8">
                <Tag>{property.propertyType}</Tag>
                <Tag>
                  Beds:&nbsp;
                  {property.propertyDetail.bedRooms}
                </Tag>
                <Tag>
                  Baths:&nbsp;
                  {property.propertyDetail.bathRooms}
                </Tag>
                <Tag>
                  Sq Ft:&nbsp;
                  {property.propertyDetail.area}
                </Tag>
              </div>
              <h4 className="text--size-18 text--bold mb-4">Description</h4>
              <div className="mb-0" dangerouslySetInnerHTML={{ __html: property.propertyDetail.description }} />
            </Box>

            <Box>
              <h4 className="text--size-18 text--bold mb-4">Property Details</h4>
              <div className="flex flex--wrap justify-">
                <Details property={property} />
              </div>
            </Box>

            <Box>
              <Map zoom={13} markerData={[{ name, point: { lat, lng } }]} />
            </Box>
            {Array.isArray(properties) && properties.length ? (
              <Row gutter={30} className="flex flex--wrap justify-content-space-between mb-4">
                {properties.map(p => (
                  <Col sm={12} xs={24} key={p.id} className="mb-4">
                    <PropertyCard property={p} />
                  </Col>
                ))}
              </Row>
            ) : null}
            <Box>
              <ReviewForm />
            </Box>

          </MainContent>
          <Sidebar>
            <Author author={property.createdBy} />
            <BookingForm />
            <SearchForm onSubmit={onSearch} />
          </Sidebar>
        </Container>
      </Section>
    </div>
  )
};

export default withHeader(PagePropertyDetails);
