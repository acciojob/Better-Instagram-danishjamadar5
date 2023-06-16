//your code here
// Get all the draggable elements
const draggableElements = document.querySelectorAll('.image');

// Variable to store the currently dragged element
let dragSrcElement = null;

// Function to handle drag start event
function handleDragStart(e) {
  dragSrcElement = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
  this.classList.add('selected');
}

// Function to handle drag over event
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

// Function to handle drag enter event
function handleDragEnter(e) {
  this.classList.add('over');
}

// Function to handle drag leave event
function handleDragLeave(e) {
  this.classList.remove('over');
}

// Function to handle drop event
function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragSrcElement !== this) {
    dragSrcElement.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

// Function to handle drag end event
function handleDragEnd(e) {
  this.classList.remove('selected');
  draggableElements.forEach((element) => {
    element.classList.remove('over');
  });
}

// Add event listeners to the draggable elements
draggableElements.forEach((element) => {
  element.addEventListener('dragstart', handleDragStart, false);
  element.addEventListener('dragenter', handleDragEnter, false);
  element.addEventListener('dragover', handleDragOver, false);
  element.addEventListener('dragleave', handleDragLeave, false);
  element.addEventListener('drop', handleDrop, false);
  element.addEventListener('dragend', handleDragEnd, false);
});
