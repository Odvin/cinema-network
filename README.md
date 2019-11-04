# Requirements

Implement HTTP API for the Cinema Network Project.

Data entry required:
1. Cinemas (city, cinema name);
2. Halls with reference to the cinema (name of the cinema hall, number of seats);
3. Movies (name, year, duration);
4. Sessions with reference to the hall;

API has to support:
1. GET list of cinemas;
2. GET list of the cinema halls;
3. GET movie list;
4. GET list of sessions that are added on a specific day;
    1. at the cinema;
    2. in the hall;

# Implementation

## Data storage model
![ER-diagram](/db/ER-diagram.png)

## API Routes
__GET Requests__
```
host/api/v1/cinemas
host/api/v1/halls/{cinema_id}
host/api/v1/movies
host/api/v1/sessions/{day}/{month}/{year}/{cinema_id}
host/api/v1/sessions/{day}/{month}/{year}/{hall_id}
```