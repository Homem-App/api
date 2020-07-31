const listAll = async ({ articleDbService }) => {
  const articlesList = await articleDbService.listAll();
  return articlesList;
}

module.exports = {
  listAll,
}