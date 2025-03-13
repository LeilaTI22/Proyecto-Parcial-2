import { LibroComponent } from './pages/libro/libro.component'; 
import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProductoComponent } from './pages/producto/producto.component'; 
import { HomeComponent } from './pages/home/home.component';
import { EjercicioComponent } from './pages/ejercicio/ejercicio.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'producto',
        loadComponent: () => import('./pages/producto/producto.component').then(m => m.ProductoComponent)
    },
    {
        path: 'libro',
        loadComponent: () => import('./pages/libro/libro.component').then(m => m.LibroComponent)
    },
    {
        path: 'ejercicio',
        loadComponent: () => import('./pages/ejercicio/ejercicio.component').then(m => m.EjercicioComponent)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];