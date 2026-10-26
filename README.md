# Beyond 8000 – Exam Project

## Live Demo

[https://your-live-project-url.com/](https://your-live-project-url.com/)

## GitHub Repository
https://github.com/alis-g/beyond-8000

# Functional Guide

---

## 1. Project Overview

### Application Name

Beyond 8000 Meters

### Application Category / Topic

Mountaineering Expedition Planning

### Main Purpose

Beyond 8000 Meters is a mountaineering expedition planning platform. Registered users can create their own expeditions, join expeditions created by other climbers, and easily track the expeditions they have created or joined.

---

## 2. User Access & Permissions

### Guest (Not Authenticated)

Unauthenticated users can:

- **Available pages / routes:**
  - Home page
  - Expeditions page
  - Expedition details page
  - Login page
  - Register page

- **Public data shown:**
  - Available expeditions
  - Expedition details such as mountain, country, difficulty, duration, altitude, start date, and number of participants

Guests can browse expeditions and view their details, but they cannot join, create, edit, or delete expeditions.

### Authenticated User

Logged-in users can:

- **Main sections / pages:**
  - Home page
  - Expeditions
  - My Expeditions
  - Create Expedition

- **Details pages:**
  - View details of any expedition
  - Join available expeditions
  - Leave expeditions they have joined

- **Create / Edit / Delete actions:**
  - Create new expeditions
  - Edit their own expeditions
  - Delete their own expeditions
  - Join expeditions created by other users
  - Leave joined expeditions

Users can also use the **My Expeditions** page to see the expeditions they have created and the expeditions they have joined.

---

## 3. Authentication & Session Handling

### Authentication Flow

1. Supabase Authentication is used to handle user registration, login, and logout.
2. When a user registers, the application sends their email and password to the Supabase Auth API. After successful registration, the authentication data is stored locally and the user is redirected to the Home page.
3. When a user logs in, the application sends their credentials to Supabase and receives an authentication response containing an access token and user information.
4. The authentication data is stored in `localStorage` and managed through the `AuthContext`.
5. The `AuthContext` provides the current user, access token, and `isAuthenticated` state to the rest of the application.
6. When the user logs out, the application sends a logout request to Supabase and removes the stored authentication data.
7. If an authenticated request returns a `401 Unauthorized` response, the stored authentication data is removed and the user is redirected to the Login page.

### Session Persistence

- **How is the user session stored?**
  - Authentication data, including the access token and user information, is stored in `localStorage`.
  - The `AuthContext` manages this data and provides authentication information to the application.

- **How is automatic login handled after a page refresh?**
  - The authentication data is loaded from `localStorage` when the `AuthProvider` is initialized.
  - This allows the application to restore the user's authenticated state after a page refresh.

- **Authentication provider:**
  - Supabase Authentication is used for registration, login, and logout.
  - API requests include the stored access token in the `Authorization` header.
  - If the access token is no longer valid, the application handles the `401` response by clearing the stored authentication data and redirecting the user to `/login`.

---

## 4. Routing Structure

### Access Control Logic

The application uses React Router for client-side routing and `AuthContext` to manage the user's authentication state.

The Header displays different navigation options depending on whether the user is authenticated:

- Guests can access Home, Expeditions, Login, and Register.
- Authenticated users can access My Expeditions and Create Expedition.
- Authenticated users also have access to expedition management actions such as Edit and Delete for their own expeditions.

### Main Routes

The application uses the following routes:

- `/` — Home page
- `/expeditions` — Expeditions list
- `/expeditions/:expeditionId` — Expedition details
- `/create` — Create a new expedition
- `/edit/:expeditionId` — Edit an existing expedition
- `/my-expeditions` — User's created and joined expeditions
- `/login` — Login page
- `/register` — Registration page
- `/logout` — Logout action

### Nested & Parameterized Routes

The application does not use nested routes.

It uses parameterized routes for working with specific expeditions:

- `/expeditions/:expeditionId` — Displays the details of a selected expedition.
- `/edit/:expeditionId` — Opens the selected expedition in the edit form.

The `expeditionId` is accessed using React Router's `useParams()` hook.

The application also uses `useNavigate()` for programmatic navigation, for example after successfully deleting an expedition or completing authentication.

---

## 5. List → Details Flow

### Catalog / List Page

The Expeditions page displays all available expeditions fetched from the backend.

Each expedition is displayed as an `ExpeditionCard` containing basic information about the expedition and the current number of participants.

Users can select an expedition by clicking the **View Expedition** link on the expedition card.

If there are no expeditions, the application displays an empty state message.

### Details Page

When a user selects an expedition, they are navigated to:

`/expeditions/:expeditionId`

The `expeditionId` is passed through the URL as a route parameter and is accessed using React Router's `useParams()` hook.

The Details page uses this ID to fetch the selected expedition from Supabase and displays its full information.

Navigation from the list to the details page is handled using React Router's `Link` component.

---

## 6. Data Source & Backend

### Backend Type

- **Real backend:**
  - Supabase

### Database

- `expeditions` — stores information about mountaineering expeditions.
- `participants` — stores the relationship between users and the expeditions they have joined.

---

## 7. Data Operations (CRUD)

> All four operations — Create, Read, Update, and Delete — are required for the collection described in the Technical Requirements.

### Create (POST)

- **How does the user create new data?**
  - Authenticated users create a new expedition through the Create Expedition form.
- **Which form is used?**
  - `ExpeditionForm`
- **Which API endpoint handles the request?**
  - `POST /expeditions`

### Read (GET)

- **Where is data fetched?**
  - From the Supabase `expeditions` table.
- **Where is it displayed?**
  - On the Expeditions, Expedition Details, and My Expeditions pages.
- **Which pages use the fetched data?**
  - `/expeditions`
  - `/expeditions/:expeditionId`
  - `/my-expeditions`

### Update (PUT)

- **How does the author edit an existing record?**
  - The author edits the expedition through the `ExpeditionForm`.
- **Which route is used for editing?**
  - `/edit/:expeditionId`
- **Which API endpoint handles the request?**
  - `PUT /expeditions?id=eq.{expeditionId}`
- **How is the UI updated after the change?**
  - After a successful update, the user is redirected to the expedition details page.

### Delete

- **How does the author delete an existing record?**
  - The author uses the Delete action for their own expedition.
- **Is there a confirmation before deletion?**
  - Yes, a confirmation dialog is displayed.
- **How is the UI updated after the change?**
  - After successful deletion, the user is redirected to `/expeditions`.

---

## 8. Forms & Validation

### Forms Used

- Login form
- Register form
- Create / Edit Expedition form

### Validation Rules

- **Title**
  Rules:
  - The value cannot be empty or contain only whitespace.

- **Mountain**
  Rules:
  - The value cannot be empty or contain only whitespace.

- **Duration**
  Rules:
  - The value cannot be empty.
  - Must be a whole number.

- **Maximum participants**
  Rules:
  - The value cannot be empty.
  - Must be a whole number.
  - Must be at least 1.

- **Start date**
  Rules:
  - The value cannot be empty.

### Validation Feedback

- Validation is performed before form submission.
- Validation errors are displayed using toast notifications.
- If validation fails, the form submission is stopped.

---

## 9. React-Specific Techniques

### Hooks & Component Lifecycle

The application uses the following React hooks:

- `useState` — used for managing component state, such as form values and fetched expedition data.
- `useEffect` — used for fetching data when a component mounts or when dependencies change.
- `useContext` — used to access the authentication context.
- `useNavigate` — used for programmatic navigation after actions such as login, update, or delete.
- `useParams` — used to access the `expeditionId` from parameterized routes.
- **Custom hooks** — used for reusable logic such as authentication, expeditions, participants, and local storage.

**Lifecycle example:**

The Details component uses `useEffect` to fetch the selected expedition when the component mounts. It also runs again when `expeditionId` changes because it is included in the dependency array.

### Context API

- `AuthContext` shares:
  - Current user
  - Access token
  - Authentication state
  - Login, registration, and logout functions
- The context is consumed by components that need authentication information, such as `Header`, `Details`, and authentication-related components.
- Authentication state is accessed through `useContext(AuthContext)` or the custom `useAuth()` hook.

### Custom Hooks

- `useAuth` — provides access to authentication context.
- `useLocalStorage` — stores and retrieves data from `localStorage`.
- `useExpeditions` — fetches expeditions and provides expedition-related data and functionality.
- `useParticipants` — manages participants for a specific expedition, including joining and leaving.

### Component Styling

- The application uses regular CSS files for styling.
- `index.css` imports the other CSS files used by the application.
- The styles are organized by purpose, such as navigation, home page, expeditions, forms, authentication, footer, and responsive styles.
- CSS Modules are not used.
- No styling library is used.

---

## 10. Typical User Flow

1. User opens the application and lands on the Home page.
2. User browses the available expeditions.
3. User opens an expedition details page.
4. User registers or logs in.
5. User joins an expedition.
6. User can view the joined expedition in **My Expeditions**.
7. User can leave an expedition.
8. User can create their own expedition.
9. User can edit or delete expeditions they created.
10. User logs out.

---

## 11. Error & Edge Case Handling

### Authentication Errors

- **Invalid login credentials**
  - An error message is displayed using an alert.
- **Registration errors**
  - Registration errors are displayed using an alert.
- **Existing email**
  - A toast notification displays "Email already exists".
- **Expired authentication session**
  - If an API request returns `401 Unauthorized`, the stored authentication data is removed and the user is redirected to the Login page.

### Network or Data Errors

- **Failed API requests**
  - API errors are caught and displayed to the user.
- **Server errors**
  - The error status is handled by the request utility and the error is displayed to the user.
- **Failed create / update / delete operations**
  - Errors are caught and displayed using alerts or toast notifications depending on the operation.
- **Error notifications**
  - The application uses `react-toastify` for toast notifications.

### Empty or Missing Data States

- **No created expeditions**
  - An empty state message is displayed in My Expeditions.
- **No joined expeditions**
  - An empty state message is displayed in My Expeditions.
- **No participants**
  - The participant count is displayed as 0.
- **Missing expedition data**
  - The application handles failed or missing data requests with an error notification.
- **Full expedition**
  - Users cannot join an expedition when the maximum participant limit has been reached.

### Form Errors

- **Required fields**
  - Validation prevents submission when required form values are missing.
- **Invalid numeric values**
  - Duration and altitude must be whole numbers.
  - Maximum participants must be a whole number greater than or equal to 1.
- **Invalid dates**
  - The start date must be provided.
- **Invalid or missing data**
  - Validation errors are displayed using toast notifications.

---

## 12. Additional Notes

### Project Structure

The project is organized into separate folders for components, API services, hooks, context, utilities, and CSS files.

### Important Technical Decisions

- React is used for building the user interface.
- React Router is used for client-side routing.
- Supabase is used as the backend, database, and authentication service.
- Reusable custom hooks are used to manage shared logic.
- `AuthContext` is used to manage authentication state.

### Security Considerations

- Authentication is handled through Supabase Auth.
- Row Level Security (RLS) policies are enabled for the `expeditions` and `participants` tables.
- Users can manage only their own expeditions.
- Users can join or leave expeditions using their authenticated user ID.
- API requests use the authenticated user's access token.

### Future Improvements

- Add more advanced expedition filtering and search.
- Add stronger form validation.
- Improve error handling and user feedback.
- Add more detailed expedition and participant management.
