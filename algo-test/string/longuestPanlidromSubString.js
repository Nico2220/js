function longuestPanlidromSubString(string) {
  let longuest = [0, 1];

  for (let i = 1; i < string.length; i++) {
    const odd = findPanlidromFrom(string, i - 1, i + 1);
    const even = findPanlidromFrom(string, i - 1, i);
    const currentLonguest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    longuest =
      currentLonguest[1] - currentLonguest[0] > longuest[1] - longuest[0]
        ? currentLonguest
        : longuest;
  }
  return string.slice(longuest[0], longuest[1]);
}

function findPanlidromFrom(string, leftIdx, rigthIdx) {
  while (leftIdx >= 0 && rigthIdx < string.length) {
    if (string[leftIdx] !== string[rigthIdx]) {
      break;
    }
    leftIdx--;
    rigthIdx++;
  }

  return [leftIdx + 1, rigthIdx];
}

console.log(longuestPanlidromSubString("abaxyzzyxf"));
