<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Queue\Middleware\RateLimited;
use Illuminate\Routing\Route;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // RateLimited::for('api', function(Request $request){
        //     return limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        // });

        // $this->routes(function(){
        //     Route::middleware('api')->prefix('api')->group(base_path('routes/api.php'));

        // });
    }
}
