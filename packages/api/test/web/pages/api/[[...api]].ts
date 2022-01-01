import Api from "@/lib/api";
import { getSession } from "@/lib/helpers";
import * as services from "@/lib/services";
import type { Model } from "@/types";

export default Api<Model>({ services, getSession });
