import { Button, Input, Textarea } from 'components/Common';
import Stars from 'components/Stars/Stars';
import React, { useState } from 'react';

const ReviewForm = () => {
  const [points, setPoints] = useState(2);
  return (
    <form>
      <div className="flex align-items-center">
        <Stars points={points} onChange={setPoints} />
        &nbsp;&nbsp;
        Your Rating & Review
      </div>
      <div className="mt-4 mb-4">
        <Input placeholder="Review title" />
      </div>
      <div className="mb-4">
        <Textarea placeholder="Your review" />
      </div>
      <Button color="red" style={{ minWidth: "250px" }}>
        <b className="text--size-20">
          Submit Review
        </b>
      </Button>
    </form>
  )
};

export default ReviewForm;
