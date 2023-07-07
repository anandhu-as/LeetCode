const isAnagram = (strg1, strg2) =>
  [...strg1].sort().join() === [...strg2].sort().join();
  console.log(isAnagram('listen','silent'));
