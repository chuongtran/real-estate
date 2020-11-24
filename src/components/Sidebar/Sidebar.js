/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  width: calc(35% - 30px);
  top: 0;
`;

const Sidebar = (props) => {
  const [top, setTop] = useState(null);
  const ref = useRef(null);

  const addScrolling = () => {
    const windowTop = window.scrollY;
    if (windowTop > top) {
      ref.current.style.position = 'fixed';
    } else {
      ref.current.style.position = null;
    }
  };

  // useEffect(() => {
  //   if (top !== null) {
  //     window.addEventListener('scroll', addScrolling);
  //   }
  //   return () => {
  //     window.removeEventListener('scroll', addScrolling);
  //   }
  // }, [!!top]);

  useEffect(() => {
    setTop(ref.current.offsetTop);
    ref.current.style.width = `${ref.current.offsetWidth}px`;
    ref.current.style.left = `${ref.current.offsetLeft}px`;
  }, [ref]);

  return (
    <StyledSidebar ref={ref} {...props} />
  )
};

export default Sidebar;
