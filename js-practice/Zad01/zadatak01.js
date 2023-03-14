// najveci od jednocifrenih brojeva u nizu

niz = [5, 6, 9, 1, 11, 234, 5667, 4];

function nadji(arr) {
	let max = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] / 10 < 1 && arr[i] > max)
		{
			max = arr[i];
		}
	}
	return max;
}
