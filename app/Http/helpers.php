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
        if (!$v && $v !== false) unset($arr[$key]);                 // maybe change to if ($v === null) instead of if (!$v)
    }
    return $arr;
}

function getStateColor($state)
{
    switch ($state) {
        case Key::NEW:
            return (object)['text' => 'text-yellow-500', 'bg' => 'bg-yellow-500', 'border' => 'border-yellow-500'];
        case Key::APPROVED:
            return (object)['text' => 'text-green-500', 'bg' => 'bg-green-500', 'border' => 'border-green-500'];
        case Key::DELETED:
            return (object)['text' => 'text-red-500', 'bg' => 'bg-red-500', 'border' => 'border-red-500'];
        default:
            return (object)['text' => 'text-gray-700', 'bg' => 'bg-gray-700', 'border' => 'border-gray-700'];
    }
}

function isUserSubmitter($keyOrId)
{
    return true;            // zmazat tento riadok ked bude na logine prichadzat id
    return (is_numeric($keyOrId) ? $keyOrId : $keyOrId['state']['createdById']) == loggedUser()['id'];
}