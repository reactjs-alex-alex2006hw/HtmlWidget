<?php
@ini_set('display_errors', E_ALL);

require('../../Importer/src/php/Importer.php');
require('../HtmlWidget.php');

$importer = new Importer();
HtmlWidget::enqueueAssets(array($importer,'enqueue'));
$importer->register('assets', HtmlWidget::assets('../', true, true));

function widget( $widget, $attr=array(), $data=array() )
{
    echo HtmlWidget::widget( $widget, $attr, $data );
}

function options( $options, $key=null, $val=null )
{
    return HtmlWidget::options( $options, $key, $val );
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <style type="text/css">
    .box {
        width: 600px; height: 200px;
        position: relative;
        border: 1px solid #BBB;
        background: #EEE;
        margin-left: 100px;
    }
    .w-menu-controller-bt {
        cursor: pointer;
        display: none;
    }
    .w-vertical-menu {
        width: 300px;
    }
    @media all and (max-width : 768px) {

    .w-vertical-menu.w-mobile > .w-menu-controller-bt,
    .w-dropdown-menu.w-mobile > .w-menu-controller-bt {
        display: block;
        position: absolute;
        top: 0; left: 0;
    }
    }
    </style>
    <title>HtmlWidgets Test page</title>
</head>
<body class="fluid col-1-1" style="padding:10px 20px">
    <h1>HtmlWidgets Test page</h1>
    
    <hr />
    
    <fieldset><legend>Menus</legend>
    
    <div class="w-dropdown-menu"><ul>
    <li class="w-submenu-item">
        <a href="#">Item</a>
        <ul>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li class="w-submenu-item">
            <a href="#">sub Item</a>
            <ul>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li class="w-submenu-item">
                <a href="#">sub sub Item</a>
                <ul>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </li>
    <li class="active"><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    </ul></div>
    
    <hr />
    <div class="w-dropdown-menu w-mobile" style="z-index:300">
    <label for="mobile-menu" class="w-menu-controller-bt"><i class="fa fa-bars fa-2x"></i>&nbsp;</label>
    <input id="mobile-menu" type="checkbox" class="w-menu-controller" value="1" />
    <ul>
    <li class="w-submenu-item">
        <a href="#">Item</a>
        <ul>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li class="w-submenu-item">
            <a href="#">sub Item</a>
            <ul>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li class="w-submenu-item">
                <a href="#">sub sub Item</a>
                <ul>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </li>
    <li class="active"><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    </ul></div>

    <hr />
    
    <div class="w-vertical-menu" style="z-index:200"><ul>
    <li class="w-submenu-item">
        <a href="#">Item</a>
        <ul>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li class="w-submenu-item">
            <a href="#">sub Item</a>
            <ul>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li class="w-submenu-item">
                <a href="#">sub sub Item</a>
                <ul>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </li>
    <li class="active"><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    </ul></div>
    
    <hr />
    
    <div class="w-vertical-menu w-mobile" style="z-index:100">
    <label for="mobile-menu2" class="w-menu-controller-bt"><i class="fa fa-bars fa-2x"></i>&nbsp;</label>
    <input id="mobile-menu2" type="checkbox" class="w-menu-controller" value="1" />
    <ul>
    <li class="w-submenu-item">
        <a href="#">Item</a>
        <ul>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li><a href="#">sub Item</a></li>
        <li class="w-submenu-item">
            <a href="#">sub Item</a>
            <ul>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li><a href="#">sub sub Item</a></li>
            <li class="w-submenu-item">
                <a href="#">sub sub Item</a>
                <ul>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                <li><a href="#">sub sub sub Item</a></li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    </li>
    <li class="active"><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    </ul></div>
    
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Buttons</legend>
    <?php widget('button',array('class'=>'w-small','icon'=>'plus'),array('text'=>'small')); ?>
    <?php widget('button',array('class'=>'','icon'=>'plus'),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large','icon'=>'times-circle','disabled'=>1),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge','icon'=>'info-circle','readonly'=>1),array('text'=>'xlarge')); ?>
    <?php widget('button',array('class'=>'','icon'=>'plus')); ?>
    <?php widget('button',array('class'=>'w-large','icon'=>'times-circle')); ?>
    <?php widget('button',array('class'=>'w-xlarge','icon'=>'info-circle')); ?>
    <?php widget('button',array('class'=>'w-primary','icon'=>'plus','disabled'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-green','icon'=>'plus','readonly'=>1),array('text'=>'button')); ?>
    <?php widget('button',array('class'=>'w-large w-orange','icon'=>'times-circle'),array('text'=>'large')); ?>
    <?php widget('button',array('class'=>'w-xlarge w-red','icon'=>'info-circle'),array('text'=>'xlarge')); ?>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Dropdowns</legend>
    <?php widget('dropdown',array('placeholder'=>'select..'),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    <?php widget('dropdown',array('placeholder'=>'large..','class'=>'w-large','disabled'=>1),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    <?php widget('dropdown',array('placeholder'=>'xlarge..','class'=>'w-xlarge','readonly'=>1),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    
    <hr />
    
    <?php widget('select2',array('placeholder'=>'select..'),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    <?php widget('select2',array('placeholder'=>'large..','class'=>'w-large','disabled'=>1),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    <?php widget('select2',array('placeholder'=>'xlarge..','class'=>'w-xlarge','readonly'=>1),array('options'=>options(array(
        1 => 'option 1',
        2 => 'option 2'
    ),-1))); ?>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Colorpicker</legend>
    <?php widget('colorpicker',array(
        'title'=>'Select color',
        'data'=>array(
            'colorpicker-format' => 'rgba'
        )
    ),array(
        'color'=>'rgba(210,0,0,0.7)'
    )); ?>
    <?php widget('colorpicker',array(
        'title'=>'Select color',
        'class' => 'w-large',
        'data'=>array(
            'colorpicker-format' => 'rgba'
        )
    ),array(
        'color'=>'rgba(210,0,0,0.7)'
    )); ?>
    <?php widget('colorpicker',array(
        'title'=>'Select color',
        'class' => 'w-xlarge',
        'data'=>array(
            'colorpicker-format' => 'rgba'
        )
    ),array(
        'color'=>'rgba(210,0,0,0.7)'
    )); ?>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Datetimepicker</legend>
    <?php widget('datetimepicker',array(
        'title'=>'Select date-time',
        'data'=>array(
            'datetime-format' => 'Y-m-d H:i:s',
            'datetime-time' => 1,
            'datetime-seconds' => 1
        )
    ),array(
        'value'=>'2016-01-24 12:00:00'
    )); ?>
    <?php widget('datetimepicker',array(
        'title'=>'Select date-time',
        'class' => 'w-large',
        'disabled' => 1,
        'data'=>array(
            'datetime-format' => 'Y-m-d H:i:s',
            'datetime-time' => 1,
            'datetime-seconds' => 1
        )
    ),array(
        'value'=>'2016-01-24 12:00:00'
    )); ?>
    <?php widget('datetimepicker',array(
        'title'=>'Select date-time',
        'class' => 'w-xlarge',
        'readonly' => 1,
        'data'=>array(
            'datetime-format' => 'Y-m-d H:i:s',
            'datetime-time' => 1,
            'datetime-seconds' => 1
        )
    ),array(
        'value'=>'2016-01-24 12:00:00'
    )); ?>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Ratings</legend>
    <?php widget('rating',array('title'=>'Please rate:','icon'=>'star'),array('value'=>'3')); ?>
    <?php widget('rating',array('title'=>'Please rate:','class'=>'w-large','icon'=>'star','disabled'=>1),array('value'=>'3')); ?>
    <?php widget('rating',array('title'=>'Please rate:','class'=>'w-xlarge','icon'=>'star','readonly'=>1),array('value'=>'3')); ?>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Textboxes</legend>
    <?php widget('textbox',array('title'=>'text..','icon'=>'pencil'),array('value'=>'')); ?>
    <?php widget('textbox',array('class'=>'w-large','title'=>'large..','icon'=>'pencil','disabled'=>1),array('value'=>'')); ?>
    <?php widget('textbox',array('class'=>'w-xlarge','title'=>'xlarge..','icon'=>'pencil','readonly'=>1),array('value'=>'')); ?>
    
    <hr />
    
    <?php widget('textarea',array('title'=>'text..','icon'=>'pencil'),array('value'=>'')); ?>
    <?php widget('textarea',array('class'=>'w-large','title'=>'large..','icon'=>'pencil','disabled'=>1),array('value'=>'')); ?>
    <?php widget('textarea',array('class'=>'w-xlarge','title'=>'xlarge..','icon'=>'pencil','readonly'=>1),array('value'=>'')); ?>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Wysiwyg Editor</legend>
    <?php widget('wysiwyg-editor',array('placeholder'=>'rich text..'),array('value'=>'<i>hello</i>')); ?>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Syntax Editor</legend>
    <?php widget('syntax-editor',array('placeholder'=>'source text..','data'=>array('cm-mode'=>'text/html')),array('value'=>'<p>Hello</p>')); ?>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Google Map</legend>
    <?php /*widget('map', array(
        'title' => 'Here',
        'style' => 'width:100%',
        'options' => array(
            'center'        => array(39.5455, 22.345353),
            'centerMarker'  => true,
            'zoom'          => 12,
            'type'          => 'ROADMAP',
            'responsive'    => true
        )
    ));*/ ?>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Checkboxes</legend>
    <?php widget('checkbox',array('title'=>'Check'),array('value'=>'1')); ?>
    <?php widget('checkbox',array('title'=>'Check','class'=>'w-large','disabled'=>1),array('value'=>'1')); ?>
    <?php widget('checkbox',array('title'=>'Check','class'=>'w-xlarge','readonly'=>1),array('value'=>'1')); ?>
    
    <hr />
    
    <?php widget('radio',array('title'=>'Check','name'=>'radio'),array('value'=>'1')); ?>
    <?php widget('radio',array('title'=>'Check','name'=>'radio','class'=>'w-large','disabled'=>1),array('value'=>'1')); ?>
    <?php widget('radio',array('title'=>'Check','name'=>'radio','class'=>'w-xlarge','readonly'=>1),array('value'=>'1')); ?>
    
    <hr />
    
    <?php widget('switch',array('title'=>'Check','readonly'=>1),array('value'=>'1')); ?>
    <?php widget('switch',array('title'=>'Check','class'=>'w-large','iconon'=>'check','iconoff'=>'times-circle','disabled'=>1),array('value'=>'1')); ?>
    <?php widget('switch',array('title'=>'Check','class'=>'w-xlarge','iconon'=>'check','iconoff'=>'times-circle'),array('value'=>'1')); ?>
    
    <hr />
    <?php widget('checklist',array('name'=>'demo_list_1[]'),array('options'=>options(array(
        '1' => 'Option 1',
        '2' => 'Option 2',
        '3' => 'Option 3'
    ),-1), 'value'=>array(2,3))); ?>
    <?php widget('radiolist',array('class'=>'w-large','name'=>'demo_list_2'),array('options'=>options(array(
        '1' => 'Option 1',
        '2' => 'Option 2',
        '3' => 'Option 3'
    ),-1), 'value'=>1)); ?>
    <?php widget('radiolist',array('class'=>'w-xlarge','name'=>'demo_list_3','disabled'=>1),array('options'=>options(array(
        '1' => 'Option 1 very loooong option very loooong option very loooong option very loooong option very loooong option very loooong option',
        '2' => 'Option 2 very loooong option very loooong option very loooong option very loooong option very loooong option very loooong option',
        '3' => 'Option 3 very loooong option very loooong option very loooong option very loooong option very loooong option very loooong option'
    ),-1), 'value'=>3)); ?>
    
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Tooltips</legend>
    <div class="w-tooltip"><i class="fa fa-info-circle"></i> Tooltip Right <span class="w-tooltip-arrow w-arrow-right"></span></div>
    <hr /><br /><br />
    <div class="w-tooltip"><i class="fa fa-info-circle"></i> Tooltip Bottom <span class="w-tooltip-arrow w-arrow-bottom"></span></div>
    <hr /><br /><br />
    <div class="w-tooltip"><i class="fa fa-info-circle"></i> Tooltip Left <span class="w-tooltip-arrow w-arrow-left"></span></div>
    <hr /><br /><br />
    <div class="w-tooltip"><i class="fa fa-info-circle"></i> Tooltip Top <span class="w-tooltip-arrow w-arrow-top"></span></div>
    </fieldset>
    
    <hr /><br /><br />
    
    <fieldset><legend>Spinners</legend>
    <div class="box w-delayable w-delayed"></div>
    <div class="box"><div class="w-spinner w-spinner-dots2 active"></div></div>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Ribbons</legend>
    <div class="box">
       <div class="w-ribbon-dtl w-red w-ribbon-fold w-large"><span>Ribbon</span></div>
       <div class="w-ribbon-dtr w-blue"><span>Ribbon</span></div>
    </div>
    </fieldset>
    
    <hr />
    
    <fieldset><legend>Messages</legend>
    <div class="w-msg w-msg-ok">
        <i class="fa fa-check"></i> <strong>Success!</strong>
        This msg indicates a successful or positive action.
    </div>
    <div class="w-msg w-msg-info">
        <i class="fa fa-info"></i> <strong>Info!</strong>
        This msg indicates a neutral informative change or action. 
    </div>
    <div class="w-msg w-msg-warn">
        <i class="fa fa-exclamation-circle"></i> <strong>Warning!</strong>
        This msg indicates a warning that might need attention.
    </div>
    <div class="w-msg w-msg-err">
        <i class="fa fa-exclamation-triangle"></i> <strong>Error!</strong>
        This msg indicates a dangerous or potentially negative action. 
    </div>
    </fieldset>
    
    <?php
    //$importer->enqueue('scripts','-external-google-maps-api');
    $importer->enqueue('styles','responsive.css');
    $importer->enqueue('styles','fontawesome.css');
    $importer->enqueue('scripts','jquery');
    $importer->enqueue('scripts','tooltipster');
    echo $importer->assets('styles');
    echo $importer->assets('scripts');
    ?>
</body>
</html>