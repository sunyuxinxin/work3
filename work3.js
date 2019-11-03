var a,b;
a > b ? b=a : b=a-2;

for(let i=1;i<=100;i++){
    if(i%3==0){
        console.log(i);
    }
}

function change(a,b){
    var c;
    c=a;
    a=b;
    b=c;
}

function sumOfSquares(a,b){
  let res;
  return res=a*a+b*b;
}
let res=sumOfSquares(11,22);
console.log(res);

const num=[['a',0],['b',3],['c',6],['d',9]],
      list = [];
    list.push(['b',3]);
    list.push(['c',6]);
    list.push(['d',9]);
    console.log(list)

var  str;
var patt1="p";
var patt2=".myclass";
var patt3=".myid";
function $(str){
   var re=0;
   if(str==patt1){
       re=document.getElementsByTagName('p');
   }
   if(str==patt2){
       re=document.getElementsByClassName('myclass');
   }
   if(str==patt3){
       re=ducument.getElementsById('myid');
   }
   return re;
}
console.log($('p'));
console.log($('#myid'));
console.log($('.class'));

const arr=[1,1,1,2,2,3,4,4,5,5,5];
function uniq(arr){
    var result=[];
    for (var i=0;i<arr.length;i++){
        if(result.indexOf(arr[i]) === -1){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(uniq(arr));

let arr2=[5,3,8,1];
let filtered = arr2.filter(function (x) {
    return x<=4&&x>=1;
});
console.log(filtered);


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users=[john,pete,mary];
let usersMapped = users.map(user =>({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));
  alert( usersMapped[0].id ); 
  alert( usersMapped[0].fullName ); 

  



    



 



