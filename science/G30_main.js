document.addEventListener('DOMContentLoaded', function() {
  let department = document.querySelectorAll('.G30_department');

  department.forEach(function(element) {
    element.addEventListener('click', function() {
      if (element.checked) {
        department.forEach(function(dep) {
          dep.checked = false;
        });
        this.checked = true;
      }
    });
  });
});
