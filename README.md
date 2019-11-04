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
![ER-diagram](/data/ER-diagram.png)

It is possible to demoralize entities: Cinema and Hall and merge them into one Mongo collection. But if two cinema company rents the same halls then the relation between Cinema and Hall will be many-to-many. That's why we keep normalization, it gives us flexibility and opportunity to migration to PostgreSQL, easy to create resolves with GraphQL schema. 

## API Routes
__GET Requests__
```
host/api/v1/cinema/list
host/api/v1/halls/{cinema_id}
host/api/v1/movies
host/api/v1/sessions/{day}/{month}/{year}/{cinema_id}
host/api/v1/sessions/{day}/{month}/{year}/{hall_id}
```

__POST Requests__
```
host/api/v1/cinema
```

## DEV requirements
1. Docker
2. Docker-compose

To start the project run in the root directory:
```
docker-compose up
```
To set up *env* params create file __.env__ file in the root directory, see __.env.config__ (if you skip this step then the default values will be used).

*docker-compose* is used during development and may run and connect several services. For deployment individual *Docker* file will be used for each service.

## Seeding Database
To seed, the database, invoke the route.
```
host/api/v1/seed
```
The database will be cleaned and populated with predefined data.