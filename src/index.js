module.exports = towelSort = (matrix) => matrix !== undefined ? (matrix.map((item, index) => index % 2 === 1 ? item.reverse() : item).flat()) : [];