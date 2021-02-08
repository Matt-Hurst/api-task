# api-task

## Getting Started

1. Clone the repo

```
git clone https://github.com/Matt-Hurst/api-task.git
cd api-task
```

2. Install dependecies

```
npm install
```

3. Run tests

```
npm run test:watch
```

## Routes
#### add new courier to database
```
post: '/couriers'
body: { id: 1234abc, max_capacity: 40 }
```
#### change couriers available capacity
```
put: '/couriers'
body: { id: 1234abc, new_capacity: 10 }
```
#### remove courier from database
```
delete: '/couriers'
body: { id: 1234abc }
```
#### get all couriers with capacity matching requirements
```
get: '/couriers/lookup'
body: { capacity_required: 14 }
```

## Improvements
- Implement swagger to autogenerate API documentation.
- Additional route allowing couriers max_capacity to be edited.
- WebSocket setup to allow for instant communication between servers.
