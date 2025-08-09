# MoviesDatabase API

## API Overview
MoviesDatabase is a comprehensive movie, series, and episode information service. It provides data on over 9 million titles and 11 million cast and crew members. You can access details such as biographies, awards, YouTube trailer URLs, and other rich metadata.([rapidapi.com](https://rapidapi.com/SAdrian/api/moviesdatabase?utm_source=chatgpt.com))

## Version
The API version isn’t explicitly stated in the available documentation. Please check the RapidAPI introduction panel or API response headers for version details.

## Available Endpoints
Although full endpoint documentation isn’t publicly visible, typical endpoints include:
- **Search Titles** — Find movies or shows by title or keywords.
- **Get Title Details** — Retrieve comprehensive information for a specific title (e.g., cast, synopsis, awards).
- **Get Person Details** — Fetch biographies and filmography for actors or crew.
- **Get Trailer** — Obtain a YouTube trailer link for a specific title.

*Note: Be sure to refer to the RapidAPI playground panel for the exact list, parameter names, and URL paths.*

## Request and Response Format
- **Request:** Typically uses HTTP `GET` requests with query parameters (e.g. `?query=Inception`) and necessary headers.
- **Response:** Usually in JSON format, returning structured objects such as:
  ```json
  {
    "title": "...",
    "year": "...",
    "actors": [ ... ],
    "awards": "...",
    "trailer_url": "...",
    ...
  }
