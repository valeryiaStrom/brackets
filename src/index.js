module.exports = function check(str, bracketsConfig) {
  // your solution

  let strArr = str.split(""); //split input string into array like ["(", "(", "(", ")", ")", ")", "(", ")"]
  console.log("now we have array of brackets: " + strArr);

  if (strArr.length % 2 != 0) {
	  console.log("the number of elements is uneven, that means someone doesn't have a pair - we can quit the function");
	  return false;
  }
  
  let strStack = [];
  
  for (let bracket of strArr) {
	  
	  if (bracket == "(" || bracket == "{" || bracket == "[") {
		  console.log("we found an opening bracket:" + bracket);
		  console.log("we push it to stack");
		  strStack.push(bracket);
		  console.log("now stack is: " + strStack);
		  
	  } else if (bracket == ")") {
		  
      console.log("we found a closing bracket" + bracket);
      
		  if ((strStack.length == 0) || (strStack[strStack.length - 1] != "(")) {
			  console.log("either the stack is empty or the last element of stack does not match the closing bracket");
			  return false;
			  
		  } else {
			  strStack.pop();
			  console.log("remove the last opening bracket from the stack");
			  console.log("now the stack is: " + strStack);
		  }
		  
	  } else if (bracket == "}") {
		  console.log("we found a closing bracket" + bracket);
		  
		  if ((strStack.length == 0) || (strStack[strStack.length - 1] != "{")) {
			  console.log("either the stack is empty or the last element of stack does not match the closing bracket");
			  return false;
			  
		  } else {
			  strStack.pop();
			  console.log("remove the last opening bracket from the stack");
			  console.log("now the stack is: " + strStack);
		  }
		   
	  } else if (bracket == "]") {
		  console.log("we found a closing bracket" + bracket);
		  
		  if ((strStack.length == 0) || (strStack[strStack.length - 1] != "[")) {
			  console.log("either the stack is empty or the last element of stack does not match the closing bracket");
			  return false;
			  
		  } else {
			  strStack.pop();
			  console.log("remove the last opening bracket from the stack");
			  console.log("now the stack is:: " + strStack);
		  }
		   
	  } else if (bracket == "|" || bracket == "7" || bracket == "8") {
		  console.log("найдена палка либо 7 либо 8");
		  strStack.push(bracket);
		  console.log("положили ее в стек");
		  console.log("теерь стек такой: " + strStack);
		  
		  if (strStack[strStack.length - 2] == bracket) { //тут проавили вместо "|"
			  console.log("если предпоследний элемент стека матчится с палкой, то достали последние две палки");
			  strStack.pop();
			  strStack.pop()
			  console.log("теперь стек такой: " + strStack);
			  
		  }
		  
	  } else if (bracket == "1") {
		  console.log("найдена открывающая единица" + bracket);
		  strStack.push(bracket);
		  console.log("теперь стек такой: " + strStack);
		  
	  } else if (bracket == "2") {
		  console.log("найдена закрывающая двойка" + bracket);
		  if ((strStack.length == 0) || (strStack[strStack.length - 1] != "1")) {
			  console.log("либо в стеке пусто либо последний лемент стека не мачится");
			  return false;
			  
		  } else {
			  strStack.pop();
			  console.log("убираем последний элемент из стека");
			  console.log("теперь стек такой: " + strStack);
		  }
	  } else if (bracket == "3") {
		  console.log("найдена открывающая тройка" + bracket);
		  strStack.push(bracket);
		  console.log("теперь стек такой: " + strStack); 
		  
	  } else if (bracket == "4") {
		  console.log("найдена закрывающая четверка" + bracket);
		  if ((strStack.length == 0) || (strStack[strStack.length - 1] != "3")) {
			  console.log("либо в стеке пусто либо последний лемент стека не мачится");
			  return false;
			  
		  } else {
			  strStack.pop();
			  console.log("убираем последний элемент из стека");
			  console.log("теперь стек такой: " + strStack);
		  }
		  
	  } else if (bracket == "5") {
		  console.log("найдена открывающая пятерка" + bracket);
		  strStack.push(bracket);
		  console.log("теперь стек такой: " + strStack); 
		  
	  } else if (bracket == "6") {
		  console.log("найдена закрывающая шестерка" + bracket);
		  if ((strStack.length == 0) || (strStack[strStack.length - 1] != "5")) {
			  console.log("либо в стеке пусто либо последний лемент стека не мачится");
			  return false;
			  
		  } else {
			  strStack.pop();
			  console.log("убираем последний элемент из стека");
			  console.log("теперь стек такой: " + strStack);
		  }
	  } else {
      console.log("найденный элемент  - не скобка, не 1, не 2, не 3, не 4, не 5, не 6, не 7 и не 8. Ничего не выйдет:(");
      return false;
    }
	  
	  
  } //конец цикла
 
if (strStack.length > 0) {
		console.log("Похоже в стэке остались непарные скобки, значит проверка на парность не пройдена");
		return false;
		
	} 
	
	return true;


}
