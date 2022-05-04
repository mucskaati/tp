<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Key extends Model {
    public const AWAITING = 'awaiting';
    public const APPROVED = 'approved';
    public const DELETED = 'deleted';
    public const REJECTED = 'rejected';
    public const STATES = ['awaiting', 'approved', 'deleted', 'rejected'];
}