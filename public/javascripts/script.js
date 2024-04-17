
window.addEventListener("keydown", function(e) {
    if(e.which === 27){
        document.querySelector("#textmaking").style.display = "none";
        document.querySelector("#textcreate").style.display = "none";
    }
})

document.querySelector("#create").addEventListener("click", function(){
    document.querySelector("#textcreate").style.display = "initial";
    document.querySelector("#textmaking").style.display = "none";
})
document.querySelector("#folding").addEventListener("click", function(){
    document.querySelector("#textcreate").style.display = "none";
    document.querySelector("#textmaking").style.display = "initial";
})
            
document.addEventListener("click", function(e){
    if(e.target.id === "editdaicon"){
        // document.querySelector("#owerflow").style.display = "flex";
        wholediv = e.target.parentNode.parentNode
        filenameofudating = wholediv.childNodes[1].childNodes[5].textContent
        atag = wholediv.childNodes[1].childNodes[5]
        inputtag = wholediv.childNodes[1].childNodes[7]
        
        atag.style.display = 'none';
        inputtag.style.display = 'initial';    
            
    }
})

// Function to add line numbers to a textarea
function addLineNumbers(textarea) {
    var lines = textarea.value.split('\n');
    var numberedLines = '';

    for (var i = 0; i < lines.length; i++) {
      // Add line number only if it's not already present
        if (!/^\d+\.\s/.test(lines[i])) {
            numberedLines += i + 1 + '. ' + lines[i];
        } else {
            numberedLines += lines[i];
        }
      // Add newline character if it's not the last line
        if (i !== lines.length - 1) {
            numberedLines += '\n';
        }
    }

    textarea.value = numberedLines;
}

  // Get the textarea element
var textarea = document.getElementById('numbered-textarea');

  // Call the function initially
addLineNumbers(textarea);

  // Add event listener for keydown to handle Enter key
textarea.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behavior of Enter key
      var cursorPos = textarea.selectionStart; // Get cursor position
      var textBeforeCursor = textarea.value.substring(0, cursorPos); // Get text before cursor
      var textAfterCursor = textarea.value.substring(cursorPos); // Get text after cursor
      var linesBeforeCursor = textBeforeCursor.split('\n'); // Split text before cursor into lines
      var currentLineNumber = linesBeforeCursor.length; // Get current line number
      var currentLineText = linesBeforeCursor[currentLineNumber - 1]; // Get text of current line

      // Check if the current line already starts with a number
        if (!/^\d+\.\s/.test(currentLineText)) {
        // If not, add line number to the new line
            textarea.value = textBeforeCursor + '\n' + (currentLineNumber) + '. ' + textAfterCursor;
        } else {
        // If it already has a number, simply move the cursor to a new line
            textarea.value = textBeforeCursor + '\n' + textAfterCursor;
        }

      // Move cursor to the beginning of the new line
        textarea.setSelectionRange(cursorPos + 3, cursorPos + 3);
    
      // Update line numbers after handling Enter key
        addLineNumbers(textarea);
    }
});