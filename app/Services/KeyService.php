<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

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

    public static function prepareImagesForPost($request, $structures, $instructions, $url)
    {
        $nomenclatorImages = [];

        $urls = self::createImages($request, $url);

        foreach ($urls as $key => $url) {
            $nomenclatorImages[$key]['url'] = $url;
        }

        foreach ($structures as $key => $structure) {
            $nomenclatorImages[$key]['structure'] = $structure;
        }

        foreach ($instructions as $key => $instruction) {
            $nomenclatorImages[$key]['hasInstructions'] = $instruction;
        }

        return collect($nomenclatorImages)->map(function ($item) {
            return [
                'url' => $item['url'],
                'structure' => $item['structure'],
                'hasInstructions' => (isset($item['hasInstructions'])) ? (bool) $item['hasInstructions'] : false,
                'isLocal' => true
            ];
        })->toArray();
    }

    public static function createImages($request, $url)
    {
        $req = Http::withHeaders([
            'authorization' => loggedUser()['token']
        ]);

        if ($request->hasFile('nomenclatorImages')) {
            /** @var UploadedFile $f */
            foreach ($request->file('nomenclatorImages') as $f) {
                $req->attach('nomenclatorImages[]', file_get_contents($f), $f->getClientOriginalName());
            }
        }

        $url = $url . '/nomenclatorKeyImages';

        $req = $req->asMultipart();
        $resp = $req->post($url, []);

        $body = json_decode($resp->body());


        if (!is_array($body->urls)) {
            return [];
        }
        //$body['urls'] = [
        //    'link1.test',
        //    'link2.test'
        //];

        return $body->urls;
    }
}
