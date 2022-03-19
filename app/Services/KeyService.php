<?php

namespace App\Services;

class KeyService {
    
    public static function prepareUsersForPost($ids, $names, $mains)
    {
        $keyUsers = [];
        // potom to naloopovat ked pridame viacere
        // este si nie som isty strukturou preto teraz robim len na 1
        $keyUser = (isset($mains[0]) && $mains[0]) ? ['isMainUser' => true] : [];
        if (isset($ids[0]) && $ids[0]) {
            $keyUser['id'] = $ids[0];
        } else if (isset($names[0]) && $names[0]) {
            $keyUser['name'] = $names[0];
        }
        $keyUsers[] = $keyUser;

        return $keyUsers;
    }

    public static function unsetFormKeyUsersData(&$va)
    {
        unset($va['keyUserId']); unset($va['keyUserName']); unset($va['keyUserMain']);
    }

}
