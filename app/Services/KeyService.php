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

    public static function setMainUsersString(&$keys)
    {
        foreach ($keys as $ind => $key) {
            $names = [];

            foreach ($key['keyUsers'] as $user) {
                if ($user['isMainUser']) $names[] = $user['name'];
            }

            $keys[$ind]['mainUsersString'] = implode(', ', $names);
        }
    }

    public static function setDateString(&$keys)
    {
        foreach ($keys as $ind => $key) {
            $str = '';
            if ($key['usedAround']) $str = $key['usedAround'];
            else {
                if ($key['usedFrom']) $str .= 'from ' . date('Y-m-d', strtotime($key['usedFrom']));
                if ($key['usedFrom'] && $key['usedTo']) $str .= ' ';
                if ($key['usedTo']) $str .= 'to ' . date('Y-m-d', strtotime($key['usedTo']));
            }
            $keys[$ind]['date'] = $str;
        }
    }
}
