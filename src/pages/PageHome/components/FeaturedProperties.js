import React from 'react';
import PropTypes from 'prop-types';

import { SectionTitle, SectionSubtitle, Container, Section } from 'components/Common';
import PropertyCard from 'components/Property/PropertyCard';
import { Col, Row } from 'antd';

const FeaturedProperties = ({ properties }) => {
  return (
    <Section grey>
      <SectionTitle>Featured Properties</SectionTitle> 
      <SectionSubtitle>Handpicked properties by our team.</SectionSubtitle>
      <Container className="mt-10">
        <Row gutter={30}>
          {properties.map((property) => (
            <Col sm={8} key={property.id}>
              <PropertyCard property={property} />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  )
};

FeaturedProperties.propTypes = {
  properties: PropTypes.array,
};
FeaturedProperties.defaultProps = {
  properties: [],
};

export default FeaturedProperties;
