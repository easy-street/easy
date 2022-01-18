import Api from "api";
import { definitions } from "@/lib/introspection.json";
import { getSession } from "@/lib/helpers";
import * as services from "@/lib/services";
import type { Model } from "@/types";

export default Api<Model>({ definitions, services, getSession });
