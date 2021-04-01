const notebooks = [
  {
    id: 1,
    name: "Notebook Samsung Essentials E21 Intel Celeron Dual Core",
    img:
      "https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg",
    price: "2.50",
  },
  {
    id: 2,
    name: "Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB",
    img:
      "https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png",
    price: "3.00",
  },
  {
    id: 3,
    name: "Notebook Samsung Expert X22 Intel Core 7 i5 8GB",
    img:
      "https://images-americanas.b2w.io/produtos/01/00/item/132260/6/132260681G1.jpg",
    price: "4.00",
  },
  {
    id: 4,
    name: "Notebook Dell Alienware - i7 16GB",
    img:
      "https://images-submarino.b2w.io/produtos/01/00/sku/34470/9/34470934G1.jpg",
    price: "5.00",
  },
  {
    id: 5,
    name: "Notebook Samsung Expert X22 Intel Core 7 i5 8GB",
    img:
      "https://images-americanas.b2w.io/produtos/01/00/item/132260/6/132260681G1.jpg",
    price: "4.00",
  },
];

export function getNotebookById(id) {
  return notebooks.find((product) => product.id === id);
}

export default notebooks;
