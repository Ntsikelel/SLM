<?php $__env->startSection('title', 'Database'); ?>
<?php $__env->startSection('container'); ?>
    <?php echo Form::open(array('url' => url('install/database'), 'method' => 'post', 'name' => 'form',"enctype"=>"multipart/form-data")); ?>

    <div class="row">
        <div class="col-6">
            <div class="form-group">
                <?php echo Form::label('port', 'Port', array('class'=>'')); ?>

                <?php echo Form::text('port', 3306, array('class' => 'form-control','required'=>'required')); ?>

            </div>
        </div>
        <div class="col-6">
            <div class="form-group">
                <?php echo Form::label('host', 'Host', array('class'=>'')); ?>

                <?php echo Form::text('host', 'localhost', array('class' => 'form-control','required'=>'required')); ?>

            </div>
        </div>
    </div>

    <div class="form-group">
        <?php echo Form::label('name', 'Database Name', array('class'=>'')); ?>

        <?php echo Form::text('name', null, array('class' => 'form-control','required'=>'required')); ?>

    </div>

    <div class="form-group">
        <?php echo Form::label('username', 'Username', array('class'=>'')); ?>

        <?php echo Form::text('username', null, array('class' => 'form-control','required'=>'required')); ?>

    </div>
    <div class="form-group">
        <?php echo Form::label('password', 'Password', array('class'=>'')); ?>

        <?php echo Form::text('password', null, array('class' => 'form-control')); ?>

    </div>

    <div class="form-group">
        <button type="submit" class="btn btn-info pull-right"> Continue</button>
    </div>

    <?php echo Form::close(); ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('install.layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH E:\xampp\htdocs\19\dan\smartmicro\resources\views/install/database.blade.php ENDPATH**/ ?>