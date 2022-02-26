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
