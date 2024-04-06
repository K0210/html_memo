document.addEventListener('DOMContentLoaded', function() {
  let department = document.querySelectorAll('.department2');

  department.forEach(function(element) {
    element.addEventListener('click', function() {
      if (element.checked) {
        department.forEach(function(dep) {
          dep.checked = false;
        });
      }
    });
  });
});
