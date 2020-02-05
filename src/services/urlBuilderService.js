export const buildPlaceUrl = (place) => {
  const {
    _id, friendlyUrl, heName, enName,
  } = place;

  return `/place/${_id}/${friendlyUrl || heName || enName}`;
};
/**
 *
 * @param {placeId: string, subCategoryId: string} searchConfig
 */
export const buildSearchUrl = (searchConfig) => {
  const { placeId, subCategoryId } = searchConfig;

  return `/search?placeId=${placeId}&subCategoryId=${subCategoryId}`;
};

export const buildBusinesUrl = (business) => {
  const { friendlyUrl, _id, englishName } = business;

  return `/business/${_id}/${friendlyUrl || englishName || ''}`;
};
