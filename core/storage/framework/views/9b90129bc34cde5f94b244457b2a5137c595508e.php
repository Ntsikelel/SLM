<?php $__env->startSection('title', 'Calculator Results - Amortization Schedule'); ?>
<?php $__env->startSection('footer'); ?>
    <?php echo $__env->make('reports.layouts.footer', ['setting' => $setting], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('header'); ?>
    <?php echo $__env->make('reports.layouts.header', ['setting' => $setting], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('title-content'); ?>
    <table  width="100%">
        <thead>
        <tr>
            <th colspan="3" align="left" class="cell-title-medium cell-text-center">
                Calculator Results - Amortization Schedule
            </th>
        </tr>
        </thead>
        <tr>
            <td align="center" class="cell-title-medium cell-text-left">
                Loan Type: <?php echo e($data['loan_type']); ?>

            </td>
            <td class="cell-title-large cell-text-left">
                Service Fee:  <?php echo e($data['service_fee']); ?>

            </td>
            <td class="cell-title-medium cell-text-left">
                Interest Type: <?php echo e($data['interest_type_display']); ?>

            </td>
        </tr>
        <tr>
            <td align="center" class="cell-title-medium cell-text-left">
                Repayment Period: <?php echo e($data['period']); ?>

            </td>
            <td class="cell-title-large cell-text-left">
                Interest Rate:  <?php echo e($data['rate']); ?>

            </td>
            <td class="cell-title-medium cell-text-left">
                Payment Frequency: <?php echo e($data['frequency_display']); ?>

            </td>
        </tr>
        <tr>
            <td align="center" class="cell-title-medium cell-text-left">
                Amount: <?php echo e(formatMoney($data['amount'])); ?>

            </td>
            <td class="cell-title-medium cell-text-left">
                Start Date: <?php echo e(formatDate($data['start_date'])); ?>

            </td>
        </tr>
    </table>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('main-content'); ?>
    <table class="table table-sm">
        <thead>
        <tr>
            <th>Period</th>
            <th>Due Date</th>
            <th class="cell-text-right">Payment</th>
            <th class="cell-text-right">Interest</th>
            <th class="cell-text-right">Principal</th>
            <th class="cell-text-right">Balance</th>
        </tr>
        </thead>
        <tbody>
        <?php $__currentLoopData = $amortization; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php if($loop->last): ?>
                <tr>
                    <th><?php echo e($row->count); ?></th>
                    <th><?php echo e($row->due_date); ?></th>
                    <th class="cell-text-right"><?php echo e($row->payment); ?></th>
                    <th class="cell-text-right"><?php echo e($row->interest); ?></th>
                    <th class="cell-text-right"><?php echo e($row->principal); ?></th>
                    <th class="cell-text-right"><?php echo e($row->balance); ?></th>
                </tr>
            <?php else: ?>
                <tr>
                    <td><?php echo e($row->count); ?></td>
                    <td><?php echo e($row->due_date); ?></td>
                    <td class="cell-text-right"><?php echo e($row->payment); ?></td>
                    <td class="cell-text-right"><?php echo e($row->interest); ?></td>
                    <td class="cell-text-right"><?php echo e($row->principal); ?></td>
                    <td class="cell-text-right"><?php echo e($row->balance); ?></td>
                </tr>
            <?php endif; ?>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('reports.layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\xampp\htdocs\19\dan\smartmicro\resources\views/reports/calculator.blade.php ENDPATH**/ ?>