<?php

use App\Models\Key;

function loggedUser()
{
    $user = session('user');
    return ($user) ?: false;
}

function loggedIsAdmin()
{
    $user = session('user');
    return ($user &&
        isset($user['isAdmin']) &&
        $user['isAdmin']) ? true : false;
}

function unsetMissingValues($arr)
{
    foreach ($arr as $key => $v) {                  // cuz if value == null api still reads it as submitted
        if (!$v) unset($arr[$key]);                 // maybe change to if ($v === null) instead of if (!$v)
    }
    return $arr;
}

function getStateColor($state)
{
    switch ($state) {
        case Key::NEW:
            return 'text-cyan-600';
        case Key::APPROVED:
            return 'text-green-500';
        case Key::DELETED:
            return 'text-red-500';
        default:
            return 'text-black';
    }
}