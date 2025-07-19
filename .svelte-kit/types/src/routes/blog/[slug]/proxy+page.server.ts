// @ts-nocheck
import type { PageServerLoad } from "./$types";
import caseStudies from "./data.json"

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
  const caseStudy = caseStudies.caseStudies.find(
    (cs: { slug: string; }) => cs.slug === params.slug
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
