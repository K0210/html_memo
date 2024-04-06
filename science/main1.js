document.addEventListener('DOMContentLoaded', function() {
  let department2 = document.querySelectorAll('.department2');
  let department1 = document.querySelectorAll('.department1');
  let department3 = document.querySelectorAll('.department3');

  department2.forEach(function(element) {
    element.addEventListener('click', function() {
      if (element.checked) {
        department1.forEach(function(dep) {
          dep.checked = false;
        });
        department3.forEach(function(dep) {
          dep.checked = false;
        });
      }
    });
  });

  department1.forEach(function(element) {
    element.addEventListener('click', function() {
      if (element.checked) {
        department2.forEach(function(dep) {
          dep.checked = false;
        });
        department3.forEach(function(dep) {
          dep.checked = false;
        });
      }
    });
  });

  department3.forEach(function(element) {
    element.addEventListener('click', function() {
      if (element.checked) {
        department1.forEach(function(dep) {
          dep.checked = false;
        });
        department2.forEach(function(dep) {
          dep.checked = false;
        });
      }
    });
  });
});
