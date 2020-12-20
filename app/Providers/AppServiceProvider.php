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
        if ($this->app->isLocal()) {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }
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
            'userProfiles' => 'PERFILES DE USUARIOS',
            'systCities' => 'CIUDADES',
            'systRegions' => 'DEPARTAMENTOS',
            'systCountries' => 'PAISES',
            'companies' => 'EMPRESAS',
            'compPhones' => 'TELÉFONOS DE EMPRESAS',
            'compAddresses' => 'EMPRESAS DIRECCIONES',
            'compContacts' => 'EMPRESAS CONTACTOS',
            'systPositions' => 'CARGOS',
            'systParameters' => 'PARAMETROS',
            'systParameterGroups' => 'GRUPOS DE PARAMETROS',
            'compResponsabilities' => 'EMPRESAS RESPONSABILIDADES LEGALES',
            'housUnits' => 'UNIDADES HABITACIONALES',
            'housUnitAreas' => 'UNIDADES HABITACIONALES AREAS',
            'operSectors' => 'OPERATIVIDAD SECTORES',
            'counMeetings' => 'JUNTAS DEL CONSEJO',
            'counMeetingAgendas' => 'JUNTAS AGENDAS',
            'counMeetingCitations' => 'JUNTAS CITACIONES',
            'operSchedules' => 'OPERATRIVIDAD AJENDAS',
            'operContractors' => 'CONTRATISTAS OPERATIVOS',
            'operMovements' => 'MOVIMIENTOS OPERATIVOS',
            'counMembers' => 'JUNTAS MIEMBROS',
            'mailTemplates' => 'CORREOS PLANTILLAS',
            'mails' => 'CORREOS',
            'files' => 'JUNTAS ARCHIVOS DE AGENDAS',
            'corrPackets' => 'CORRESPONDENCIA PAQUETES',
            'settings' => 'AJUSTES',
            'settingGroups' => 'AJUSTES GRUPOS',
            'userRoles' => 'USUARIOS ROLES',
            'userPermissions' => 'USUARIOS PERMISOS',
            'operMachines' => 'OPERATIVIDAD MAQUINARIA',
            'operPreventiveMaintenances' => 'OPERATIVIDAD MTTO PREVENTIVOS',
            'operReplacements' => 'OPERATIVIDAD REPUESTOS',
            'operItems' => 'OPERATIVIDAD ITEMS MTTO CORRECTIVO',
            'operReasons' => 'OPERATIVIDAD MOTIVOS MTTO CORRECTIVO',
            'operCorrectiveMaintenances' => 'OPERATIVIDAD MTTO CORRECTIVOS',
            'operMaintenanceRepairs' => 'OPERATIVIDAD REPARACIONES',
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
