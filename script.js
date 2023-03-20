//Write the code necessary to do the following:

//1. Select the section with an id of container without using querySelector.
    const questionOne = document.getElementById("container");
//2. Select the section with an id of container using querySelector.
    const questionTwo = document.querySelector("#container");
//3. Select all of the list items with a class of “second”.
    const questionThree = document.getElementsByClassName("second");
//4. Select a list item with a class of third, but only the list item inside of the ol tag.
    const questionFour = document.querySelector("ol .third");
//5. Give the section with an id of container the text “Hello!”.
    const questionFive = 
        questionOne.innerText = "Hello";
//6. Add the class main to the div with a class of footer.
    const footer = document.getElementsByClassName("footer");
    const questionSix = footer.classList.add("main");
//7. Remove the class main on the div with a class of footer.
    const questionSeven = questionSix.classList.remove("main");
//8. Create a new li element.
    const questionEight = document.createElement("li");
//9. Give the li the text “four”.
    const questionNine = questionEight.innerText = "four";
//10. Append the li to the ul element.
    const unorderedList = document.querySelector("ul");
    const questionTen = unorderedList.append(questionNine);
//11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
    const orderedListElements = document.querySelectorAll("ol li");
    for (let lis of orderedListElements){
        lis.style.backgroundColor = "green";
    }
//12. Remove the div with a class of footer 
    const questionTwelve = footer.remove();