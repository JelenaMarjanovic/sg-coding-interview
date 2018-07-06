// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent node's value.

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  // Move to the left-hand side (update max value inside recursive call)
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  // Move to the right-hand side (update min value inside recursive call)
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;