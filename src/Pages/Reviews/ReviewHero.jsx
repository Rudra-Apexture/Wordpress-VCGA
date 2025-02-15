import React from 'react';
import Hero from '../../components/Hero';

const ReviewHero = () => {
  return (
    <Hero
      mainHeading="Hear From Those Who've "
      mainHeadingHighlight="Grown with VCGA "
      description="Real stories, real results—our clients share how we’ve transformed their businesses. From boosting revenue to achieving their goals, their success speaks for itself. See how we’ve helped them grow and succeed with Vcga."
      showButton={false}
      descriptionMaxWidth="1120px"  // Set the maximum width here
    />
  );
};

export default ReviewHero;