var merge = function (nums1, m, nums2, n) {
  let fPointer = m - 1;
  let sPointer = n - 1;
  let mainPointer = m + n - 1;

  while (sPointer >= 0) {
    let fValue = nums1[fPointer];
    let sValue = nums2[sPointer];

    if (fValue > sValue) {
      nums1[mainPointer] = fValue;
      mainPointer--;
      fPointer--;
    } else {
      nums1[mainPointer] = sValue;
      mainPointer--;
      sPointer--;
    }
  }
};
