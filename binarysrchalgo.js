const prompt=require("prompt-sync")();
let arr=[100];//arr size 100;
let n,first,last,middle,i,search; //integer number
n=prompt("Enter how many input need: ");//input n from user
console.log("Enter",+n,"Elements: ");//input a[i] print
for(i=0;i<n;i++){
    arr[i]=prompt();//input a[i] using loop
}
search=prompt("Enter search elements: ")//search input form user
first=0;//first element value is 0
last=n-1;//last element vlaue is n-1 (mean the n input form user vlaue-1)
middle=Math.floor((first+last)/2);//Math.floor function use for ascending order mean (0 to N) first(0) +last(the last value index position
while(first<=last)//loop use for first less then equal last
{
    if(arr[middle]<search)// middle elements less then search elements
    {
        first=middle+1;//if middle less then search elements then again go to while loop otherwise go next conditon
    }
    else if(arr[middle]==search)//if condion false then this conditon work compare middle and search element
    {
        console.log("Element found ",+search,"Index position ",+middle+1);//element found and position print
        break;//condion brak and loop stop
    }
    else//if and else if condion not work then else condition work
    last=middle-1;//last middle index vlaue - 1 and the value go to middle index value
    middle=Math.floor((first+last)/2);//ascending order for use Math.floor function.remember first index value is not change but last index vlaue change

}
if(first>last)//this condition work if the while loop not true or while loop ture but if,else conditon not work
{
    console.log("Element not found ",+search);//print elements not found
}