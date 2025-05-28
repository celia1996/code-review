# Changelog

## [1.0.0] – 2025-05-28

### Added
- Reusable utility classes for buttons, forms and message cards to centralize styling logic and prepare for a future design system.
- Unit & integration tests covering:
  - `Message` model
  - `MessageService`
  - `ChatComponent`
  - `CreateMessageComponent`

### Changed
- **app.component.ts**  
  - Corrected HTTP method for sending messages (switched invalid GET to POST and added proper headers).
  - Moved `MessageService` provider to the root component to ensure a single shared instance across the app.
- **Project structure**  
  - Refactored so each component lives in its own folder for a cleaner, more scalable architecture.
- **openapi.yaml**  
  - Updated spec to replace a GET-with-body by a proper POST `/messages/send` with `requestBody`, aligning with OpenAPI standards, Swagger UI and REST best practices.
- **UI/UX improvements**  
  - Enhanced spacing between elements and improved visual hierarchy (title styling, margins) for better clarity.

### Fixed
- Ensured OpenAPI compatibility with client code generators by adjusting the endpoint definition.
