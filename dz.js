
var a, b, c, Dis, x1, x2;
a=prompt("введите число a");
b=prompt("введите число b");
c=prompt("введите число c");
document.write(a+"x<sup>2</sup>+"+b+"x+"+c+"=0");
Dis=b*b-4*a*c;
if(Dis>=0){
 (x1=(-b+Math.sqrt(Dis))/(2*a))&&(x2=(-b-Math.sqrt(Dis))/(2*a))
}else{
 alert("немає коренів");
}
