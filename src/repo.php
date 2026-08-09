<?php require_once './src/assets/safari-checker.php'; ?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0d0d14">
  <title>F1X3R &middot; Repo</title>
  
  <link rel="stylesheet" href="./src/assets/repo-style.css?v=<?php echo filemtime(__DIR__ . '/src/assets/repo-style.css'); ?>">

  <script src="/src/assets/disable-devtool/dist/disable-devtool.0.3.7.min.js"></script>
  <script src="/src/assets/devtool-init.js"></script>
  <script src="/src/assets/ios-checker.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

  <!-- เรียกใช้ app.js เดิม และ repo.js ใหม่ -->
  <script src="./src/assets/app.js" defer></script>
  <script src="./src/assets/repo.js" defer></script>
</head>
<body>

  <!-- ตัวรับ UI ทั้งหมดจาก repo.js -->
  <div id="app"></div>

</body>
</html>
