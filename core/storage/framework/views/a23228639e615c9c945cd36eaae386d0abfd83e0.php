<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="<?php echo e(asset('css/bootstrap.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(asset('css/reports.css')); ?>" rel="stylesheet">
    <title><?php echo $__env->yieldContent('title'); ?></title>
</head>
<body>
<footer>
    <?php echo $__env->yieldContent('footer'); ?>
</footer>

<div class="information">
    <?php echo $__env->yieldContent('header'); ?>
    <?php echo $__env->yieldContent('title-content'); ?>
</div>

<br/>

<div class="content">
    <?php echo $__env->yieldContent('main-content'); ?>
</div>
<script type="text/php">
if ( isset($pdf) ) {
    $pdf->page_script('
        if ($PAGE_COUNT > 1) {
            $font = $fontMetrics->get_font("Verdana, Arial, sans-serif", "normal");
            $size = 10;
            $pageText = "Page " . $PAGE_NUM . " of " . $PAGE_COUNT;
            $y = 820;
            $x = 520;
            $pdf->text($x, $y, $pageText, $font, $size);
        }
    ');
}
</script></body></html><?php /**PATH E:\xampp\htdocs\signalevanto\backend\resources\views/reports/layouts/master.blade.php ENDPATH**/ ?>