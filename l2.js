function z1(){
    sum=0;
for(i=0;i<1000;i++)
{
    if ((i % 3==0) || (i%5==0))
    {
        sum=sum+i;
    }
}
alert("Sum="+sum);
}

function z2(){
    sum=2;
    i=3;
    fi=1;
    li=2;
    while (i<4000000)
    {
        i=li+fi;
        fi=li;
        li=i;
        if(i%2==0)
        {
            sum=sum+i;
        }
    }
    alert(sum);
}

function z5(){
    sum=1;
    arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for(i=1;i<=20;i++)
    {
        if (arr[i]>1)
        {
        temp=arr[i];
        do{
        del=false;
        for(j=i;j<20;j++)
        {
           if (arr[j]%temp==0)
           {
            arr[j]/=temp;
            del=true;
           }
        }
          if (del==true)
        {
        sum=sum*temp;
        }
        }while(del==false)
    }    
    }
    alert(sum);
}

function z6(){
    sum1=0;
    sum2=0;
    for(i=1;i<=100;i++)
    {
        sum1=sum1+i*i;
        sum2=sum2+i;
    }
    sum2=sum2*sum2;
    res=sum2-sum1;
    alert(res);
}

function z9(){
    
}