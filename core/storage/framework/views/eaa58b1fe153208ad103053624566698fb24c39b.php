<?php $__env->startSection('title', 'Finally ...'); ?>
<?php $__env->startSection('container'); ?>

    <?php if($alreadyInstalled): ?>

        <div class="alert alert-danger">Signal loans is already installed.</div>
        <div class="alert alert-warning">For a new installation, delete database tables and re-run this installer.</div>

        <?php else: ?>

        <div class="alert alert-info">Click install to setup database tables plus add some needed seed data.</div>
        <div class="alert alert-warning">This might take some moment</div>
        <?php echo Form::open(array('url' => url('install/installation'), 'method' => 'post', 'name' => 'form',"enctype"=>"multipart/form-data")); ?>

        <div class="form-group">
            <button type="submit" class="btn btn-info pull-right"> Install </button>
        </div>
        <?php echo Form::close(); ?>


    <?php endif; ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('install.layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\xampp\htdocs\19\dan\smartmicro\resources\views/install/installation.blade.php ENDPATH**/ ?>