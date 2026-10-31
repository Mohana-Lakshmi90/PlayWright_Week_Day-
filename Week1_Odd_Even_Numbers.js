// Find a ODD/ EVEN NUMBER

var num=0
if(num>0 && num%2==0)
{
    console.log("Positive Even Number :",num)
}
else if(num>0 && num%2!=0)
{
    console.log("Positive ODD Number :",num)
}
else if(num<0 && num%2==0)
{
    console.log("Negative Even Number :",num)
}
else if(num<0 && num%2!=0)
{
    console.log("Negative ODD Number :",num)
}
else
{
    console.log("The number is Zero")
}