import type { PageServerLoad } from "./$types";
import caseStudies from "./data.json";

export const load: PageServerLoad = async ({ params }) => {
  const caseStudy = caseStudies.caseStudies.find(
    (cs) => cs.slug === params.slug
  );

  if (!caseStudy) {
    return {
      status: 404,
      error: "Case study not found",
    };
  }

  return {
    props: { caseStudy },
  };
};
