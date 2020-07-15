<?php $__env->startSection('title', 'Congratulations !!'); ?>
<?php $__env->startSection('container'); ?>
    <p class="paragraph">Installation completed successfully.</p>
    <div class="alert alert-info"><h5>Default User:</h5>
        <p class="paragraph">Email: admin@admin.com</p>
        <p class="paragraph">Password: admin123</p>
    </div>
    <div class="form-group">
        <a href="<?php echo e(url('/')); ?>"
           class="btn btn-info pull-right">Login</a>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('install.layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\xampp\htdocs\19\dan\smartmicro\resources\views/install/complete.blade.php ENDPATH**/ ?>