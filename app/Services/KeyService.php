<?php

namespace App\Services;

class KeyService
{

    public static function prepareUsersForPost($ids, $names, $mains)
    {

        $keyUsers = [];


        foreach ($names as $key => $name) {
            $keyUsers[$key]['name'] = $name;
        }

        foreach ($ids as $key => $id) {
            $keyUsers[$key]['id'] = (isset($keyUsers[$key]['name']) && $keyUsers[$key]['name']) ? null : $id;
        }

        foreach ($mains as $key => $main) {
            $keyUsers[$key]['isMainUser'] = $main;
        }


        return collect($keyUsers)->map(function ($item) {
            return [
                'id' => $item['id'],
                'name' => $item['name'],
                'isMainUser' => (isset($item['isMainUser'])) ? (bool) $item['isMainUser'] : false
            ];
        })->toArray();
    }

    public static function unsetFormKeyUsersData(&$va)
    {
        unset($va['keyUserId']);
        unset($va['keyUserName']);
        unset($va['keyUserMain']);
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
