<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Key extends Model {
    public const NEW = 'new';
    public const APPROVED = 'approved';
    public const DELETED = 'deleted';
    public const REJECTED = 'rejected';
    public const UPDATED = 'updated';
    public const STATES = ['new', 'approved', 'deleted', 'rejected', 'updated'];
}