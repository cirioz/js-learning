/*
	Upotreba fajla:

	Otvoriti fajl main.html u browseru, otvoriti konzolu i tamo se vide svi logovi.
	Mozes se igrati, promeniti neke stvari i videti kako se ponasaju.

	------------------------------------------------------------------------------------

	U konzoli smo pisali bez ; jer on shvati ono sto ukucamo kao gotovu naredbu.
	; sluze samo da bi pri izvrsavanju koda i u skriptama je potrebno pisati ; na kraju naredbe
*/

// Funkcijica za crtanje naslova ;)
function headline(h, ch = '-', headWidth = 50)
{
	if (ch.length != 1)
	{
		console.error('varijabla "ch" mora biti duzine 1');
		// sav kod ispod koji se nalazi u ovoj funkciji se nece izvrsiti jer tok izvrsavanja napusta ovaj blok naredbom return
		return;
	}
	if (ch == '@')
	{
		// uslov da necemo da ispisujemo ako je karakter @, napustamo funkciju
		return;
	}
	// const headWidth = 50;
	var l = headWidth - h.length - 2;
	var writeTo = '';
	for(var i = 0; i < l/2; i++)
	{
		// isto sto i --> writeTo += ch
		writeTo = writeTo + ch;
	}
	writeTo = writeTo + ' ' + h + ' ';
	// moze se napisati i kao:
	// writeTo += ' ' + h + ' ';
	for(i = l/2; i < l; i++)
	{
		// isto sto i --> writeTo = writeTo + ch;
		writeTo += ch;
	}
	console.log(writeTo);
}

headline('Jednakosti', '#');
headline('upotreba == i ===');
console.log(12 == 12);
console.log(12 == '12');
console.log(12 === '12');
console.log(true == 'true');
console.log('--------------------------------------------------');
console.log(true == '1');
console.log(true == 1);
console.log(0 == '');
console.log(0 === '');

headline('Tipovi', '#')
headline('typeof function');
console.log(typeof(5));
console.log(typeof('5'));
console.log(typeof(true));
console.log(typeof(false));
console.log(typeof('no matter what #^&%(*)^%^($*&^'));
console.log(typeof(12) == typeof(12));
console.log(typeof(12) == typeof('12'));
console.log(typeof(12 == 12));
console.log(typeof(headline));

// Niz (referentan tip)
headline('Nizovi');
var a = [1,2,3,4,5];
var b = [1,2,3,4,5];
console.log(typeof(a));
console.log(a == a);
console.log(a == b);
console.log(a === b);

headline('Primena + u razlicitim situacijama');
// mozemo i direktno, JS ce prvo da evaluira vrednost pa da je onda salje funkciji console.log
// JS radi evaluaciju s leva na desno
console.log(12 + 15 + 'lelebrate');
console.log('bratmoj' + 15 + 10);
// a mozemo u varijablu pa da stampamo
var s = 'konka' + 'tenacija';
console.log(s);

headline('Objekat');
var obj = {'ime': 'Ozi', 'prezime': 'Cirkovic', 'godiste': 1992};
console.log(obj);
console.log(typeof(obj));
console.log(obj.ime);
console.log(obj.prezime);
console.log(obj.godiste);
obj.ime = 'Ozren';
console.log(obj.ime);
console.log(obj);

headline('Funkcije', '#');
function bzvz() {
	console.log('ova samo nesto pise, ali nista ne vraca');
}
function bzvz2() {
	return 'ova vraca vrednost ovu koju citas';
}
console.log(bzvz());
console.log(bzvz2());
console.log(bzvz);
console.log(headline('preskok', '@'));

var kr;
headline('Kraj', '#');
kr = headline('Kraj', '--');
headline('Kraj', '@');
headline('Kraj', '!');
