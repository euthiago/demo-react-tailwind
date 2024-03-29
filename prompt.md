Using React and typescript, connect to a public weather and geocoding REST APIs. Display the 7 day forecast for a specified address on an HTML page.

US Census Geocoding service for converting addresses into latitude and longitude: https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf

US National Weather Service API: https://www.weather.gov/documentation/services-web-api

Use whatever tools you like. We're big fans of VSCode, but you're welcome to use whatever environment you're proficient with. This is your opportunity to show off. Think about the technical design of the solution, and how the different components fit together. How will you test your application? We'll be walking through your solution together during your interview, so make sure it's running locally and you can share your screen via Teams. Once the candidate has completed the audition, please make the code available via either a shared repository or an archive attached to an email. We'll review your solution then schedule a follow-up session to review your running solution and make a small change together via screenshare.

---

The app allows users to search for geo locations.
Once those geo locations are found, use the geo points (latitude,longitide) to fetch a valid weather info for that particular point.
When available, this weather info can be used to fetch the weather forecast.

Suggested features from here:

-   Allow multiple saved geo points
-   Use the device location to get the geo point
-   Show alerts for the selected location
