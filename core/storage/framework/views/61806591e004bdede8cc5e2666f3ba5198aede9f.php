<table width="100%">
    <tr>
        <td align="left" class="cell-title-medium">
            <?php if($setting->logo_url != '' ): ?>
                <img src="<?php echo e($setting->logo_url); ?>" width="100" height="100" class="logo" alt="logo"/>
            <?php endif; ?>
        </td>
        <td align="center" class="cell-title-large cell-text-center">
            <h3><?php echo e(Illuminate\Support\Str::limit($setting->business_name, 30)); ?></h3>
            <p>
                <?php if(isset($setting->postal_address)): ?>
                    <?php echo e(Illuminate\Support\Str::limit($setting->postal_address, 25)); ?>

                <?php endif; ?>
                <?php if(isset($setting->physical_address)): ?>
                    <?php echo e(Illuminate\Support\Str::limit($setting->physical_address, 25)); ?>

                <?php endif; ?>
            </p>
            <p>
                <?php if(isset($setting->phone)): ?>
                    Phone:  <?php echo e(Illuminate\Support\Str::limit($setting->phone, 13)); ?>

                <?php endif; ?>
                <?php if(isset($setting->email)): ?>
                        Email:  <?php echo e(Illuminate\Support\Str::limit($setting->email, 25)); ?>

                <?php endif; ?>
            </p>
        </td>
        <td class="cell-title-medium cell-text-center"></td>
    </tr>
</table>
<hr/><?php /**PATH E:\xampp\htdocs\signalevanto\backend\resources\views/reports/layouts/header.blade.php ENDPATH**/ ?>