// Originalno resenje -- radi, sve je ok

let count=0;
let i,j ;
for(j=2;j<=1000;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  
}

if(count==2)

console.log(j)
count=0
  
}

/** *************** OPTIMIZED VERSION 1 *********************
 * 
 * izbacen count, ne proveravamo deljivost sa 1 i brojem kojim proveravamo
 */

let i,j;
for(j = 2; j < 1000; j++)
{
    // predpostavljamo da je broj prost
    var prime = true;
    // iteriramo od 2 do broja manjeg od onog kojeg proveravamo (jer je s njima uvek deljiv)
    for(i = 2; i < j; i++)
    {
        // ukoliko je ostatak s deljenjem jednak nuli, znaci da postoji broj s kojim je deljiv (osim 1 i datog broja)
        if(j % i == 0)
        {
            // u tom slucaju broj nije prost
            prime = false;
            // nemamo potrebe da proveravamo dalje, jer mozemo naci samo vise delilaca, a imamo informaciju - broj je prost
            break;
        }
    }

    if (prime)
    {
        console.log(j)
    }
}
