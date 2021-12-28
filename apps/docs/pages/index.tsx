import type { NextPage } from "next";
import useSWR from "swr";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import type { OpenAPIV3 } from "openapi-types";

const HomePage: NextPage = () => {
  const { data: spec } = useSWR<OpenAPIV3.Document>("/docs/api/web");
  return spec ? <SwaggerUI spec={spec} /> : null;
};

export default HomePage;
