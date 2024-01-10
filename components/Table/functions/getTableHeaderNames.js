function getTableHeaderNames(tuple) {
  if (tuple === undefined)
    return [];
  else
    return Object.keys(tuple);
}

export default getTableHeaderNames;