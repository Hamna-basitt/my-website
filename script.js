document.addEventListener('DOMContentLoaded', function() {
    const widgets = document.querySelectorAll('.widget');
  
    // Add hover effect for widgets
    widgets.forEach(widget => {
      widget.addEventListener('mouseenter', function() {
        widget.style.transform = 'scale(1.05)';
      });
  
      widget.addEventListener('mouseleave', function() {
        widget.style.transform = 'scale(1)';
      });
    });
  
    // Button click event
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        alert('Link is opening...');
      });
    });
  });
  