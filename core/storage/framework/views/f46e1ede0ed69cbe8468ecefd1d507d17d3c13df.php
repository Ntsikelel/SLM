<?php $__env->startSection('title', 'Account Statement'); ?>
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
               <strong>Account Statement</strong>
            </td>
            <td align="center" class="cell-title-large cell-text-left">
                Account Name:  <?php echo e(Illuminate\Support\Str::limit($pageData['account_display_name'], 20)); ?>

            </td>
            <td class="cell-title-medium cell-text-left">
                Account Number: <?php echo e($pageData['account_number']); ?>

            </td>
        </tr>
        <tr>
            <td align="left" class="cell-title-medium">
            </td>
            <td align="center" class="cell-title-large cell-text-left">
                    <?php if(isset($pageData['loan']['member'])): ?>
                        Member Name:  <?php echo e(Illuminate\Support\Str::limit($pageData['loan']['member']['first_name'].' '.$pageData['loan']['member']['last_name'], 20)); ?>

                    <?php elseif(isset($pageData['member'])): ?>
                    <?php endif; ?>
            </td>
            <td class="cell-title-medium cell-text-left">
                <?php if(isset($pageData['loan']['member'])): ?>
                    Member Phone:  <?php echo e(Illuminate\Support\Str::limit($pageData['loan']['member']['phone'], 12)); ?>

                <?php elseif(isset($pageData['member'])): ?>
                    Member Phone:  <?php echo e(Illuminate\Support\Str::limit($pageData['member']['phone'], 12)); ?>

                <?php endif; ?>
            </td>
        </tr>
    </table>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('main-content'); ?>
    <table class="table table-sm">
        <thead>
            <tr>
                <th>Date / Time</th>
                <th>Narration</th>
                <th class="cell-text-right">Debit</th>
                <th class="cell-text-right">Credit</th>
                <th class="cell-text-right">Balance</th>
            </tr>
        </thead>
        <tbody>
        <?php $__currentLoopData = $pageData['statement']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td><?php echo e($row['created_at']); ?></td>
                <td><?php echo e($row['narration']); ?></td>
                <td class="cell-text-right"><?php echo e($row['is_dr'] ? $row['display_amount'] : '-'); ?></td>
                <td class="cell-text-right"><?php echo e($row['is_cr'] ? $row['display_amount'] : '-'); ?></td>
                <td class="cell-text-right"><?php echo e($row['balance']); ?></td>
            </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('reports.layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\xampp\htdocs\19\dan\smartmicro\resources\views/reports/account-statement.blade.php ENDPATH**/ ?>