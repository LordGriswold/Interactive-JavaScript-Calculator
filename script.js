/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */
document.title = "Interactive JavaScript Calculator";

var UIDiv = document.createElement('div');
UIDiv.setAttribute('class', 'black stuff-box shadowed');

var header = document.createElement('h1');
header.textContent = "JavaScript Calculator";

var p0 = document.createElement('p');
p0.textContent = "Create An Expression:";

var input1 = document.createElement('input');
input1.setAttribute('type', 'number');
input1.setAttribute('value', 5);

var operationSelection = document.createElement('select');

var option1 = document.createElement('option');
option1.textContent = "+";

var option2 = document.createElement('option');
option2.textContent = "-";

var option3 = document.createElement('option');
option3.textContent = "/";

var option4 = document.createElement('option');
option4.textContent = "*";

var option5 = document.createElement('option');
option5.textContent = "%";

var option6 = document.createElement('option');
option6.textContent = "**";

operationSelection.appendChild(option1);
operationSelection.appendChild(option2);
operationSelection.appendChild(option3);
operationSelection.appendChild(option4);
operationSelection.appendChild(option5);
operationSelection.appendChild(option6);

var input2 = document.createElement('input');
input2.setAttribute('type', 'number');
input2.setAttribute('value', 5);

UIDiv.appendChild(header);
UIDiv.appendChild(p0);
UIDiv.appendChild(input1);
UIDiv.appendChild(operationSelection);
UIDiv.appendChild(input2);

document.body.appendChild(UIDiv);

