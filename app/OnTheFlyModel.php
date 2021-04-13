<?php

namespace App;

use App\Facades\OnTheFly;
use Illuminate\Database\Eloquent\Model;

class OnTheFlyModel extends Model
{
    //
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->setConnection(OnTheFly::getConnectionName());
    }
}
