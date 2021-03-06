<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace App\Repositories;

use App\Models\UserWalletFailLogs;
use Carbon\Carbon;
use Discuz\Foundation\AbstractRepository;
use Illuminate\Database\Eloquent\Builder;

class UserWalletFailLogsRepository extends AbstractRepository
{
    /**
     * Get a new query builder for the categories table.
     *
     * @return Builder
     */
    public function query()
    {
        return UserWalletFailLogs::query();
    }

    /**
     * get fail data by user_id
     * @param $user_id
     * @return int
     */
    public function getCountByUserId($user_id)
    {
        return $this->query()
            ->where('user_id', $user_id)
            ->whereBetween('created_at', [Carbon::today(),Carbon::tomorrow()])
            ->count();
    }
}
