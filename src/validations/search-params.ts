import { createSearchParamsCache, parseAsString } from 'nuqs/server'

export const searchParamsParsers = {
  search: parseAsString.withDefault(''),
  page: parseAsString.withDefault('1'),
}

export const searchParamsCache = createSearchParamsCache(searchParamsParsers)

export type SearchParamsType = ReturnType<typeof searchParamsCache.parse>
