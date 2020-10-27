/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */
document.title = "Interactive JavaScript Calculator";

var UIDiv = document.createElement('div');
UIDiv.setAttribute('class', 'black stuff-box shadowed');

var header = document.createElement('h1');
header.textContent = "JavaScript Calculator";

UIDiv.appendChild(header);

document.body.appendChild(UIDiv);