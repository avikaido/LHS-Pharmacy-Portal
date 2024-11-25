import mock from './mock';
import './notes/NotesData';
import './chat/Chatdata';
import './email/EmailData';
import './ticket/TicketData';
import './item/ItemData';
import './patients/PatientsData';
import './pharmacies/PharmaciesData';
import './pharmacists/PharmacistsData';
import './eCommerce/ProductsData';
import './userprofile/PostData';
import './userprofile/UsersData';
import './blog/blogData';
import './language/LanguageData';
import './kanban/KanbanData';
import './invoice/invoiceLists';
import './request/requestLists';

mock.onAny().passThrough();
