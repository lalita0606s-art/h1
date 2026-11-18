# Day 1 — Scaffold Clean Hexagonal Architecture

A small NestJS + TypeScript Task API demonstrating domain modeling, repository ports,
dependency inversion, and unit tests.

## Requirements

- Node.js 20 or newer
- npm

## Install and run

```bash
npm install
npm test
npm run build
npm run start:dev
```

The API starts at `http://localhost:3000`.

## Try the API

Create a task:

```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Learn Hexagonal Architecture\",\"description\":\"Create domain and application layers\",\"points\":100}"
```

List tasks:

```bash
curl http://localhost:3000/api/tasks
```

## Architecture

- `domain/entities`: business objects and invariants; no database or HTTP dependencies.
- `domain/repositories`: repository port (interface) and injection token.
- `application/use-cases`: application workflows that depend on the port.
- `infrastructure/persistence`: adapter implementing the repository port.
- `presentation`: NestJS HTTP controller.
- `tasks.module.ts`: dependency injection wiring.

The application depends on `TaskRepository`, not `InMemoryTaskRepository`.
The module connects the port token to the in-memory adapter. A PostgreSQL/Prisma
adapter can later replace it without rewriting the use case.

## Tests

```bash
npm test
npm run test:cov
```

- `task.entity.spec.ts` tests valid and invalid domain entity data.
- `create-task.use-case.spec.ts` injects a fake implementation of the repository
  interface, proving the use case does not need a concrete database adapter.

## Important scope note

The challenge brief asks for domain entities, repositories, use cases, and unit tests.
This starter demonstrates those requirements using an in-memory adapter. It is not
a production deployment and does not yet include PostgreSQL, authentication,
authorization, DTO validation pipes, migrations, or a code-execution sandbox.
Those should be added when the project requirements call for them.
