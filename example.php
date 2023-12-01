<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dot Loader Example</title>
    <script src="https://vitalymartynov.ru/dotloader/v1/vendor/dev/dotloader.js"></script>
    <style>
        body {
            margin: 0;
            padding: 10px;
            background-color: #000;
        }
        .text_white {
            color: #fff;
        }
    </style>
</head>
<body>
    <span class="vm_dot_loader text_white">wow</span>
    <script>
        window.onload = () => {
            var myDotLoader = new vmDotLoader({max_len: 3})
        }
    </script>
</body>
</html>
