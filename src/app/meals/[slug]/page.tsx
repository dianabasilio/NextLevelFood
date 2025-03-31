import React from "react";

interface MealsSlugPageProps {
  params: { slug: string };
}

const MealsSlugpage: React.FC<MealsSlugPageProps> = ({ params }) => {
  return <div> Meal detail{params.slug}</div>;
};

export default MealsSlugpage;
