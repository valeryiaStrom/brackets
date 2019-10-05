module.exports = function check(str, bracketsConfig) {
  // your solution

	let strArr = str.split(""); //split input string into array like ["(", "(", "(", ")", ")", ")", "(", ")"]
  console.log("now we have array of brackets: " + strArr);
  
  let strConfing = bracketsConfig.join("");
  console.log(strConfing);
  
  
  let array = strConfing.split("");
  console.log(array);
  
  for (let symbol of array) {
	  
	  let comaIndex = array.indexOf(",");
	  
	  if (comaIndex != -1) {
		  array.splice(comaIndex,1);
	  }
	  
  }
  
   console.log("теперь массив-конфиг без запятых" + array);
  
  if (strArr.length % 2 != 0) {
	  console.log("the number of elements is uneven, that means someone doesn't have a pair - we can quit the function");
	  return false;
  }
  
  let strStack = [];
  
outer: for (let bracket of strArr) {
	  
      for (let element of array) {
	
		  let elementIndex = array.indexOf(element);
		  
		  if (bracket == element && (elementIndex == 0 || elementIndex % 2 == 0) && element != array[elementIndex+1]) { 
		  console.log("we found an opening bracket:" + bracket);
		  console.log("we push it to stack");
		  strStack.push(bracket);
		  console.log("now stack is: " + strStack);
		  continue outer;

		  
	  } else if (bracket == element && elementIndex % 2 != 0) {
		  
		  console.log("we found a closing bracket" + bracket);
		  if ((strStack.length == 0) || (strStack[strStack.length - 1] != array[elementIndex - 1])) {
			  console.log("either the stack is empty or the last element of stack does not match the closing bracket");
			  return false;
			  
		  } else {
			  strStack.pop();
			  console.log("remove the last opening bracket from the stack");
			  console.log("now the stack is: " + strStack);
			  //continue outer;

		  }
		  continue outer; //matching is found, don't continue looking for rest elements in the config
		  
	  } else if(bracket == element && elementIndex % 2 == 0 && element == array[elementIndex+1]) {
		 
		 console.log("найдена палка либо 7 либо 8, либо любая скобка, у которая парная - точно такая же");
		  strStack.push(bracket);
		  console.log("положили ее в стек");
		  console.log("теерь стек такой: " + strStack);
		 
		  
		  if (strStack[strStack.length - 2] == bracket) { 
			  console.log("если предпоследний элемент стека матчится с палкой, то достали последние две палки");
			  strStack.pop();
			  strStack.pop()
			  console.log("теперь стек такой: " + strStack);
			  
		  }
		 
		  continue outer;
	  }
		  
		  
		  
	} //конец первого цикла
		  
		  
		  
		  
		  
} //конец второго цикла
	  
   if (strStack.length > 0) {
		console.log("Похоже в стэке остались непарные скобки, значит проверка на парность не пройдена");
		return false;
		
	} 
	
	return true;

}
