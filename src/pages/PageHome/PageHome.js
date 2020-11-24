import React, { useEffect, useState } from "react";

import Header from 'components/Header/Header';
import HomeHeader from "./components/HomeHeader";
import FeaturedProperties from "./components/FeaturedProperties";
import Cities from "./components/Cities";
import Categories from "./components/Categories";
import { getProperties } from "services/Property.service";
import { useLoading } from "utils/hooks";

const PageHome = () => {
  const [properties, setProperties] = useState([]);
  const [propertiesLoading, withPropertiesLoading] = useLoading();
  useEffect(() => {
    const doGetProperties = async () => {
      const properties = await withPropertiesLoading(() => getProperties());
      setProperties(properties);
    };
    doGetProperties();
  }, []);
  console.log(propertiesLoading, properties);
  return (
    <div>
      <Header />
      <HomeHeader />
      <FeaturedProperties properties={properties.slice(0, 3)} />
      <Cities />
      <Categories />
    </div>
  );
};

export default PageHome;
