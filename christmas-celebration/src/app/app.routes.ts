import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EnqueryComponent } from './pages/enquery/enquery.component';
import { BookComponent } from './pages/book/book.component';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "enquery",
        component: EnqueryComponent
    },
    {
        path: "book",
        component: BookComponent
    },
    {
        path: "registration",
        component: RegistrationComponent
    },
];
