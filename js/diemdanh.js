(function(){
  var form = document.getElementById('attendanceLogin');
  if(!form) return;
  var errorBox = document.getElementById('dd-error');
  var username = document.getElementById('dd-username');
  var password = document.getElementById('dd-password');

  // TODO: Cập nhật thông tin xác thực và liên kết dữ liệu thực tế
  var VALID_USER = 'teacher';
  var VALID_PASS = '123456';
  var DATA_URL = 'https://khoanglang.notion.site/Qu-n-l-h-c-sinh-l-p-h-c-v-k-thi-trong-m-t-n-n-t-ng-duy-nh-t-29d13bdb2c8e81c8b5e8e08bd91bca0e?pvs=73';

  form.addEventListener('submit', function(e){
    e.preventDefault();
    if (username.value.trim() === VALID_USER && password.value === VALID_PASS) {
      window.location.href = DATA_URL;
    } else {
      if (errorBox) errorBox.style.display = 'block';
    }
  });
})();


