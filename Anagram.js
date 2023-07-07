{
  /* Valid Anagram*/
}
const isAnagram = (s, t) => {
  const string1 = s.split("").sort().join();
  const string2 = t.split("").sort().join();
  return string == string2;
};
