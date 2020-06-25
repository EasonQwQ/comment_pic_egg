const string10to62 = (number) => {
  const chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.split('');
  const radix = chars.length;
  let quotient = +number;
  const arr = [];
  let mod;
  do {
    mod = quotient % radix;
    quotient = (quotient - mod) / radix;
    arr.unshift(chars[mod]);
  } while (quotient);
  return arr.join('');
};
module.exports = {
  string10to62,
};
