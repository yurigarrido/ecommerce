export async function getCategories(functionSetState) {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const json = await response.json();
  json.pop();
  json.unshift({ id: 1, name: 'Categorias' });
  // setResponseCategories(json);
  functionSetState(json);
}

export async function getProductsFromCategoryAndQuery(
  functionSetState,
  type,
  categoryId,
  query
) {
  let url =
    'https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY';
  if (type === 'byClickButton') {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else if (type === 'searchByText') {
    url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  } else {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }
  const response = await fetch(url);
  const json = await response.json();
  // setDataCards(json.results);
  functionSetState(json.results);
}
