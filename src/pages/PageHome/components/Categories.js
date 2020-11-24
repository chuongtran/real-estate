/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, SectionSubtitle, Container } from 'components/Common';

const Category = styled.div`
  background: #fff;
  padding: 50px 50px 35px 50px;
  border-radius: 8px;
  text-align: center;
  width: calc(25% - 30px);

  h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    line-height: 24px;
  }
`;
const CategoryThumbnail = styled.div`
  width: 130px;
  height: 130px;
  background: #FFE8E9;
  margin-bottom: 50px;
`;

const Categories = () => {
  const categories = [0, 1, 2, 3];
  return (
    <Section grey>
      <SectionTitle>What are you looking for?</SectionTitle>
      <SectionSubtitle>We provide full service at every step.</SectionSubtitle>
      <Container size="big">
        <div className="flex justify-content-space-between">
          {categories.map((category, index) => (
            <Category key={index} className="flex flex--column align-items-center">
              <CategoryThumbnail />
              <h4>Modern Villa</h4>
              <p>Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
            </Category>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Categories;
