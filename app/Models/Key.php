<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Key extends Model
{
    public const AWAITING = 'awaiting';
    public const APPROVED = 'approved';
    public const DELETED = 'rejected';
    public const REJECTED = 'revise';
    public const STATES = ['awaiting', 'approved', 'rejected', 'revise'];
}
