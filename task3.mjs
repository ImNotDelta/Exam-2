import test from "./test.mjs";

function calculateTotal(node) {
    if (!node) {
        return 0;
    }
    return node.value + calculateTotal(node.left) + calculateTotal(node.right);
}

function findDeepestLevel(node, currentLevel = 1) {
    if (!node) {
        return 0;
    }
    
    const leftDepth = findDeepestLevel(node.left, currentLevel + 1);
    const rightDepth = findDeepestLevel(node.right, currentLevel + 1);
    
    return Math.max(currentLevel, leftDepth, rightDepth);
}

function numberOfNodes(node) {
    if (!node) {
        return 0;
    }
    return 1 + numberOfNodes(node.left) + numberOfNodes(node.right);
}

const tests = test("Left and right up and down, away we go!");

// Value tree from nodes.json

const Tree = {
    value: 281,
    left: null,
    right: {
        value: 168,
        left: {
            value: 732,
            left: {
                value: 653,
                left: {
                    value: 372,
                    left: null,
                    right: {
                        value: 879,
                        left: null,
                        right: {
                            value: 330,
                            left: {
                                value: 752,
                                left: null,
                                right: {
                                    value: 328,
                                    left: null,
                                    right: {
                                        value: 278,
                                        left: null,
                                        right: {
                                            value: 983,
                                            left: {
                                                value: 924,
                                                left: {
                                                    value: 269,
                                                    left: {
                                                        value: 558,
                                                        left: {
                                                            value: 571,
                                                            left: null,
                                                            right: {
                                                                value: 241,
                                                                left: null,
                                                                right: null
                                                            }
                                                        },
                                                        right: null
                                                    },
                                                    right: null
                                                },
                                                right: null
                                            },
                                            right: {
                                                value: 912,
                                                left: null,
                                                right: {
                                                    value: 438,
                                                    left: {
                                                        value: 977,
                                                        left: null,
                                                        right: {
                                                            value: 119,
                                                            left: null,
                                                            right: {
                                                                value: 410,
                                                                left: null,
                                                                right: {
                                                                    value: 97,
                                                                    left: null,
                                                                    right: {
                                                                        value: 906,
                                                                        left: null,
                                                                        right: null
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    right: {
                                                        value: 971,
                                                        left: null,
                                                        right: {
                                                            value: 441,
                                                            left: null,
                                                            right: null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            right: null
                        }
                    }
                },
                right: null
            },
            right: {
                value: 364,
                left: {
                    value: 131,
                    left: null,
                    right: {
                        value: 125,
                        left: null,
                        right: {
                            value: 895,
                            left: {
                                value: 910,
                                left: null,
                                right: {
                                    value: 838,
                                    left: {
                                        value: 12,
                                        left: null,
                                        right: {
                                            value: 703,
                                            left: {
                                                value: 809,
                                                left: null,
                                                right: null
                                            },
                                            right: null
                                        }
                                    },
                                    right: null
                                }
                            },
                            right: {
                                value: 86,
                                left: null,
                                right: {
                                    value: 429,
                                    left: null,
                                    right: {
                                        value: 547,
                                        left: null,
                                        right: {
                                            value: 545,
                                            left: null,
                                            right: {
                                                value: 267,
                                                left: {
                                                    value: 652,
                                                    left: null,
                                                    right: null
                                                },
                                                right: null
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                right: null
            }
        },
        right: null
    }
};


tests.isEqual(calculateTotal(Tree), 20903, "Should calculate correct sum for the tree");
tests.isEqual(findDeepestLevel(Tree), 18, "Should find correct depth for the tree");
tests.isEqual(numberOfNodes(Tree), 40, "Should count correct number of nodes in the tree");

tests.isEqual(calculateTotal(null), 0, "Should handle null tree");
tests.isEqual(findDeepestLevel(null), 0, "Should handle null tree for depth");
tests.isEqual(numberOfNodes(null), 0, "Should handle null tree for node count");

tests.isEqual(calculateTotal({ value: 5, left: null, right: null }), 5, "Should return single node for sum");
tests.isEqual(findDeepestLevel({ value: 5, left: null, right: null }), 1,"Should return single node for depth");
tests.isEqual(numberOfNodes({ value: 5, left: null, right: null }), 1, "Should return single node for count");
