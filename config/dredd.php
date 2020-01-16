<?php

require_once __DIR__."/../vendor/autoload.php";

use Dredd\Hooks;

Hooks::beforeEach(function(&$transaction) {
    $transaction->request->headers['X-AUTH-TOKEN'] = 'yV_Y_mSKBkbCbdsw7S64oVnm5tGRQoQRuQNPoHPCU40';
});