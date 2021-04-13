<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;

class ApiController extends Controller
{
    protected $perPage = 20;

    /**
     * Return a response error
     *
     * @param string $message
     * @param array $errors
     * @param integer $code
     * @param integer $status
     * @return \Illuminate\Http\JsonResponse
     */
    public function responseError(
        string $message = 'Error',
        $errors = [],
        int $code = 400,
        int $status = 1
    ): \Illuminate\Http\JsonResponse
    {
        $body = [
            'status' => $status,
            'message' => $message,
            'response' => [
                'errors' => $errors,
            ],
        ];

        return response()->json($body, $code);
    }

    /**
     * Return a success response
     *
     * @param string $message
     * @param array $data
     * @param bool $meta
     * @param bool $notify
     * @param integer $code
     * @param integer $status
     * @return \Illuminate\Http\JsonResponse
     */
    public function responseSuccess(
        string $message = 'OK',
        $data = [],
        bool $meta = true,
        bool $notify = false,
        int $code = 200,
        int $status = 0
    ): \Illuminate\Http\JsonResponse
    {
        $lists = isset($data['lists']) ? $data['lists'] : null;
        unset($data['lists']);
        $body = [
            'status' => $status,
            'message' => $message,
            'notify' => $notify,
            'data' => isset($data['data']) ? ($this->getArrayData($data['data']) ?? $this->getData($data)) : $data,
            'lists' => $lists,
            'meta' => $meta ? ($data['meta'] ?? $this->getMeta($data)) : null,
        ];

        return response()->json($body, $code);
    }

    /**
     * Return a pagination meta array
     *
     * @param array $data
     * @return array
     */
    public function getMeta($data = []): array
    {
        if (!is_array($data)) {
            return [];
        }

        if (isset($data['data']) && null !== @$data['data']) {
            unset($data['data']);
            unset($data['lists']);
            return $data;
        }

        return $data;
    }

    /**
     * Return pagination data   array
     *
     * @param array $data
     * @return array
     */
    public function getData(array $data = []): array
    {
        if (isset($data['data']) && null !== @$data['data']) {
            return $this->getArrayData($data['data']);
        }

        return $this->getArrayData($data);
    }

    /**
     * Filter the query
     *
     * @param $request
     * @param $query
     * @return mixed
     */
    public function filtering($request, $query)
    {

        if (is_array($request->input('q'))) {

            $keyCount = 0;
            foreach ($request->input('q') as $key => $value) {

                if ($key !== 's') {

                    $parts = preg_split('~:(?=[^:]*$)~', $key);

                    $searchParts = preg_split('~\.(?=[^\.]*$)~', $parts[0]);

                    $column_name = $searchParts[0];
                    $related_column_name = isset($searchParts[1]) ? $searchParts[1] : '';

                    $operatorSymbol = isset($parts[1]) ? $parts[1] : 'cont';

                    if ($operatorSymbol == 'eq') {
                        $operator = '=';
                    } elseif ($operatorSymbol == 'cont') {
                        $operator = 'like';
                        if ($value && $value != '') {
                            $value = '%' . $value . '%';
                        }
                    } elseif ($operatorSymbol == 'gt') {
                        $operator = '>=';
                    } elseif ($operatorSymbol == 'lt') {
                        $operator = '<=';
                    } elseif ($operatorSymbol == 'notnull') {
                        $operator = 'notNull';
                    } elseif ($operatorSymbol == 'null') {
                        $operator = 'null';
                    } else {
                        $operator = 'like';
                        if ($value && $value != '') {
                            $value = '%' . $value . '%';
                        }
                    }

                    if ($related_column_name !== '') {  // search at related table column
                        $filterJoin = ($keyCount > 0) ? 'orWhereHas' : 'orWhereHas';
                        $keyCount++;

                        if ($operator == 'nullNull' && $value && $value != '') {
                            $query = $query->{$filterJoin}($column_name, function ($q) use ($column_name, $related_column_name, $operator, $value) {
                                return $q->whereNotNull($related_column_name);
                            });
                            continue;
                        }

                        if ($operator == 'null' && $value && $value != '') {
                            $query = $query->{$filterJoin}($column_name, function ($q) use ($column_name, $related_column_name, $operator, $value) {
                                return $q->whereNull($related_column_name);
                            });
                            continue;
                        }

                        if ($value && $value != '') {
                            $query = $query->{$filterJoin}($column_name, function ($q) use ($column_name, $related_column_name, $operator, $value) {
                                return $q->where($related_column_name, $operator, $value);
                            });
                            continue;
                        }

                    } else {

                        if ($operator == 'nullNull' && $value && $value != '') {
                            $query = $query->whereNotNull($column_name);
                            continue;
                        }

                        if ($operator == 'null' && $value && $value != '') {
                            $query = $query->whereNull($column_name);
                            continue;
                        }

                        if ($value && $value != '') {
                            $query = $query->orWhere($column_name, $operator, $value);
                            continue;
                        }
                    }
                }
            }
        }

        return $query;
    }

    /**
     * Sorting the query
     *
     * @param $request
     * @param $query
     * @return mixed
     */
    public function sorting($request, $query)
    {
        $q_s = $request->input('q.s');

        // dd($q_s);

        // ToDo: Revisar performance. sort vs order
        /*$isRelation = strpos($q_s, '.');
        if ($isRelation) {
          return $query;
        }*/

        if ($q_s) {
            // sort dir and sort column
            if (substr($q_s, -5, 5) === ':desc') {
                $sort_column = substr($q_s, 0, strlen($q_s) - 5);
                $query = $query->sortByDesc($sort_column);
            } elseif (substr($q_s, -4, 4) === ':asc') {
                $sort_column = substr($q_s, 0, strlen($q_s) - 4);
                $query = $query->sortBy($sort_column);
            } else {
                $sort_column = $q_s;
                $query = $query->sortByDesc($sort_column);
            }
        } else {
            $query = $query->sortByDesc('id');
        }

        return $query;
    }

    /**
     * @param $data
     * @return array
     */
    protected function getArrayData($data)
    {

        if (!is_array($data)) {
            return $data;
        }

        $array = [];

        foreach ($data as $key => $value) {
            $array[] = $value;
        }

        return $array;
    }
}
