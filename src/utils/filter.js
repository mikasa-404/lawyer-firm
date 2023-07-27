export function filterData(searchText, Data) {
  const filterData = Data.filter((data) =>
    data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}
