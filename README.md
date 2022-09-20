# NODE KICKSTARTER

![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)

A boilerplate TypeScript project for building RESTful APIs using Node.js and Restify. By running a few commands, you 
will get a production-ready Node.js server installed and fully configured on your machine. 
The server comes with many built-in features. 

## Quick Start

Run the following commands to get everything working:

```bash
npm i 
npm run build 
npm run start
```

Check the scripts section in package.json to change the commands to fit your needs. 

## Project Structure 

```
src\
 |--config\          # Environment variables and configuration related things
 |--controllers\    # Controller layer
 |--middlewares\    # Custom middlewares
 |--models\         # Database models (data layer)
 |--modules\        # In case the project is using modularized approach.
 |--resources\      # Special resources such as sol files for cryptocurrency.
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--tests\          # Test files.
 |--types\          # TypeScript custom types.
 |--utils\          # Utility classes and functions
 |--index.ts        # App entry point
```

## License

[MIT](LICENSE)