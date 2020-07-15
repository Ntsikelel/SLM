<?php $__env->startSection('title', 'Trial Balance'); ?>
<?php $__env->startSection('footer'); ?>
    <?php echo $__env->make('reports.layouts.footer', ['setting' => $setting], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('header'); ?>
    <?php echo $__env->make('reports.layouts.header', ['setting' => $setting], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('title-content'); ?>
    <table  width="100%">
        <tr>
            <td align="left" class="cell-title-medium">
                <strong>Trial Balance</strong>
            </td>
            <td align="center" class="cell-title-large cell-text-left">
                Branch Name:  <?php echo e(Illuminate\Support\Str::limit($branchName, 20)); ?>

            </td>
            <td class="cell-title-medium cell-text-left">
            </td>
        </tr>
    </table>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('main-content'); ?>
    <table class="table table-sm">
        <thead>
        <tr>
            <th>Account</th>
            <th class="cell-text-right">Debit</th>
            <th class="cell-text-right">Credit</th>
        </tr>
        </thead>
        <tbody>
        <?php $__currentLoopData = $pageData; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php if($loop->last): ?>
                <tr>
                    <th><?php echo e($row[0]); ?></th>
                    <th class="cell-text-right"><?php echo e($row[1]); ?></th>
                    <th class="cell-text-right"><?php echo e($row[2]); ?></th>
                </tr>
            <?php else: ?>
                <tr>
                    <td><?php echo e($row[0]); ?></td>
                    <td class="cell-text-right"><?php echo e($row[1]); ?></td>
                    <td class="cell-text-right"><?php echo e($row[2]); ?></td>
                </tr>
            <?php endif; ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('reports.layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\xampp\htdocs\19\dan\smartmicro\resources\views/reports/trial-balance.blade.php ENDPATH**/ ?>