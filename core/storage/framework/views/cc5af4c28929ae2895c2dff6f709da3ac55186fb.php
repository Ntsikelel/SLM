<?php $__env->startSection('title', 'Directory Permissions'); ?>
<?php $__env->startSection('container'); ?>

    <table width="100%" class="table-striped">
        <?php $__currentLoopData = $permissions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $path => $isWritable): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td><?php echo e($path); ?></td>
                <?php if($isWritable): ?>
                    <td class="label label-default pull-right">775</td>
                    <td class="badge badge1"><i class="fa fa-check"></i></td>
                <?php else: ?>
                    <td class="badge badge2"><i class="fa fa-times"></i></td>
                <?php endif; ?>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </table>
    <br/>


    <div class="form-group">
        <?php if($allSet): ?>
            <a href="<?php echo e(url('install/database')); ?>"
               class="btn btn-info pull-right"> Continue</a>
        <?php else: ?>
            <div class="alert alert-danger">Error. Fix directory permissions to continue.</div>
            <div class="alert alert-warning">Hint. Consult your server provider if in doubt.</div>
            <a class="btn btn-info pull-right" href="<?php echo e(\Illuminate\Support\Facades\Request::url()); ?>">
                Refresh
                <i class="fa fa-refresh"></i></a>
        <?php endif; ?>

    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('install.layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\xampp\htdocs\19\dan\smartmicro\resources\views/install/permissions.blade.php ENDPATH**/ ?>