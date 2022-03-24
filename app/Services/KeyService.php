<?php

namespace App\Services;

class KeyService {
    
    public static function prepareUsersForPost($ids, $names, $mains)
    {
        // dd($ids, $names);
        if (isset($ids) && $ids[0] == null && isset($names) && $names[0] == null) return null;
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

    public static function prepareImage(&$va)
    {
        if (isset($va['nomenclatorImage'])) {
            $image = [];
            $image['structure'] = $va['structure'];
            $image['hasInstructions'] = $va['hasInstructions'];

            $va['images'] = $image;                               // skusil som dat do pola lebo bez neho sa nenahralo ale ani takto nie zatial

            unset($va['structure']);
            unset($va['hasInstructions']);
        }
    }

}
