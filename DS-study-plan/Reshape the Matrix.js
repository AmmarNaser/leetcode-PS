var matrixReshape = function (mat, r, c) {
  const flat = mat.flat();
  if (flat.length !== r * c) return mat;
  return [...Array(r)].map(() => flat.splice(0, c));
};
