<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Key extends Model{
    public const NEW = 'new';
    public const APPROVED = 'approved';
    public const DELETED = 'deleted';
}