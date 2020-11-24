import { Box, Input, Textarea, Button } from 'components/Common';
import React from 'react';

const BookingForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('aaaaa');
  }
  return (
    <Box>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <Input placeholder="Name" />
        </div>
        <div className="mb-4">
          <Input placeholder="Phone" />
        </div>
        <div className="mb-4">
          <Textarea defaultValue="Tell us about desired property" />
        </div>
        <Button color="red" style={{ width: '100%' }}>
          <b className="text--size-20">Submit</b>
        </Button>
      </form>
    </Box>
  );
};

export default BookingForm;
