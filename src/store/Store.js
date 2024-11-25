import { configureStore } from '@reduxjs/toolkit';
import CustomizerReducer from './customizer/CustomizerSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import NotesReducer from './apps/notes/NotesSlice';
import EmailReducer from './apps/email/EmailSlice';
import TicketReducer from './apps/tickets/TicketSlice';
import ItemReducer from './apps/items/ItemSlice';
import PatientsReducer from './apps/patients/PatientSlice';
import PharmaciesReducer from './apps/pharmacies/PharmacySlice';
import PharmacistsReducer from './apps/pharmacists/PharmacistSlice';
import EcommerceReducer from './apps/eCommerce/EcommerceSlice';
import UserProfileReducer from './apps/userProfile/UserProfileSlice';
import BlogReducer from './apps/blog/BlogSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    chatReducer: ChatsReducer,
    emailReducer: EmailReducer,
    notesReducer: NotesReducer,
    patientsReducer: PatientsReducer,
    pharmaciesReducer: PharmaciesReducer,
    pharmacistsReducer: PharmacistsReducer,
    ticketReducer: TicketReducer,
    itemReducer: ItemReducer,
    ecommerceReducer: EcommerceReducer,
    userpostsReducer: UserProfileReducer,
    blogReducer: BlogReducer,
  },
});

export default store;
