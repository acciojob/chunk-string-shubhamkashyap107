function stringChop(str, size) {
    // your code here

    let ans = []

    for(let i = 0; i < str.length; i++)
    {
        temp += str.charAt(i)
        if(temp.length == size)
        {
            ans.push(temp)
            temp = ""
        }
    }

    return ans

  }
  

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
