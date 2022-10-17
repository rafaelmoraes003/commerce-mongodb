// 17 - Retorne a quantidade total de produtos em 
// uma nova coleção chamada resumoProdutos

db.produtos.updateMany(
  { },
  {
    $set: {
      resumoProdutos: {
        franquia: "McDonalds",
        totalProdutos: db.produtos.countDocuments({}),
      },
    },
  },
);

db.produtos.aggregate([
  { $replaceRoot: { newRoot: "$resumoProdutos" } },
  { $limit: 1 },
]);