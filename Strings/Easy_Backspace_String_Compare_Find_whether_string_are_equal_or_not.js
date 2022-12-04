/*
/////////////////////////////       Method 1 - O(n) time & O(n) space
function equalString(s, t) {
  let s2 = Array.from(s);
  let t2 = Array.from(t);

  let s3 = removeHashSign(s2);
  let t3 = removeHashSign(t2);

  if (s3.length !== t3.length) return false;

  for (let i = 0; i < s3.length; i++) if (s3[i] !== t3[i]) return false;

  return true;
}

function removeHashSign(array) {
  let extracted = [];

  for (let value of array) {
    if (value !== "#") extracted.push(value);
    else if (value === "#" && extracted.length > 0) extracted.pop();
  }
  return extracted;
}

let s1 = "##abc#d#d#d";
let s2 = "abe#f#d#d#f#d";
console.log(equalString(s1, s2));
*/

/*
/////////////////////////////       Method 2 - O(n^2) time & O(1) space
function equalString(s, t) {
  let s2 = Array.from(s);
  let t2 = Array.from(t);

  removeHashSign(s2);
  removeHashSign(t2);

  console.log(s2);
  console.log(t2);

  if (s2.length !== t2.length) return false;

  for (let i = 0; i < s2.length; i++) if (s2[i] !== t2[i]) return false;

  return true;
}

function removeHashSign(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] !== "#") continue;
    else if ((array[i] === "#") && (i !== 0)) {
      array.splice(i - 1, 2);
      i--;
    } else if ((array[i] === "#") && (i === 0)) array.splice(i, 1);
  }
}

let s1 = "###abc#d#d#d";
let s2 = "#abe#f#d#d#f#d";
console.log(equalString(s1, s2));
*/

/////////////////////////////       Method 3 - O(n) time & O(1) space
///////////////////////////// O(n), ztm ka efficient tareeqa tora difrnt h , us n while loop use kia h
function equalString(s, t) {
  let s2Ptr = s.length;
  let t2Ptr = t.length;

  let cutFromS2Ptr = 0;
  let cutFromT2Ptr = 0;

  while (s2Ptr > 0 || t2Ptr > 0) {
    if (s[s2Ptr - 1] === "#") {
      s2Ptr--;
      cutFromS2Ptr++;
      continue;
    }
    if (cutFromS2Ptr > 0) {
      s2Ptr--;
      cutFromS2Ptr--;
      continue;
    }
    cutFromS2Ptr = 0;

    if (t[t2Ptr - 1] === "#") {
      t2Ptr--;
      cutFromT2Ptr++;
      continue;
    }
    if (cutFromT2Ptr > 0) {
      t2Ptr--;
      cutFromT2Ptr--;
      continue;
    }
    cutFromT2Ptr = 0;

    if (s[s2Ptr - 1] !== t[t2Ptr - 1]) {
      return false;
    }
    s2Ptr--;
    t2Ptr--;
  }
  return true;
}

let s = "bxj##tw";
let t = "bxo#j##tw";
console.log(equalString(s, t));
