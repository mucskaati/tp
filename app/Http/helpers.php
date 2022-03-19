<?php

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
        if (!$v) unset($arr[$key]);
    }
    return $arr;
}