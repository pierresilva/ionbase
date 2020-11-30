<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
// header section
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\View;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;

// end header section

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

// boot section
        // common variable
        View::share('model_title_list', [
            'users' => 'USUARIOS',
            'categories' => 'CATEGORÍAS',
            'tags' => 'ETIQUETAS',
            'posts' => 'ENTRADAS',
            'comments' => 'COMENTARIOS',
            'images' => 'IMÁGENES',
            'roles' => 'ROLES',
            'permissions' => 'PERMISOS',
        ]);
        
        // Add Pagenate to Collectoin
        if (!Collection::hasMacro('paginate')) {
        
            Collection::macro('paginate', 
                function ($perPage = 15, $page = null, $options = []) {
                $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
                return (new LengthAwarePaginator(
                    $this->forPage($page, $perPage), $this->count(), $perPage, $page, $options))
                    ->withPath('');
            });
        }
// end boot section

    }
}
