import { AuthSession } from "@supabase/supabase-js";

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Filter<T, V = T[keyof T]> = {
  $in?: V[] | string[];
  $gt?: V | string;
  $gte?: V | string;
  $lt?: V | string;
  $lte?: V | string;
  $ne?: V | string | null | "" | boolean;
  $nin?: V[] | string[];
};

export type FilterValue<T> = T[keyof T] | null | "";

export type Filters<T> = Partial<Record<keyof T, FilterValue<T> | Filter<T>>>;

export type TRecursiveField = {
  [key: string]: boolean | TRecursiveField;
};

export type ServiceQuery<T> = Filters<T> & {
  $limit?: number;
  $or?: Filters<T>[];
  $select?: TRecursiveField;
  $skip?: number;
  $sort?: Partial<Record<keyof T, boolean>>;
};

export interface ServiceParams<T> {
  id?: unknown;
  query: ServiceQuery<T>;
  resource: string;
  session?: AuthSession;
}

export interface Pagination<T> {
  data: Partial<T>[] | null;
  limit?: number;
  skip?: number;
  total?: bigint | null;
}

export interface Service<T> {
  modelName: string;
  relations: string[];
  create(data: any, params: ServiceParams<T>): Promise<Partial<T>>;
  find(params: ServiceParams<T>): Promise<Pagination<Partial<T>>>;
  get(id: unknown, params: ServiceParams<T>): Promise<Partial<T> | null>;
  patch(
    id: unknown,
    data: any,
    params: ServiceParams<T>
  ): Promise<Partial<T> | null>;
  remove(id: unknown, params: ServiceParams<T>): Promise<Partial<T> | null>;
}

export type Services<T> = Record<string, Service<T>>;

export type Context<T> = {
  definitions: Record<string, any>;
  resource: string;
  services: Record<string, Service<T>>;
};
