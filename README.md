# FlyRank Capstone Project

This repository contains the capstone project being developed as part of the FlyRank internship track.

## Capstone Project

**Casefile AI** is an AI-powered browser detective game where players investigate structured mysteries through evidence collection, location exploration, suspect interviews, timeline analysis, contradiction discovery, and final theory submission.

The current Foundations release contains the complete application skeleton, responsive navigation, routed investigation workspaces, environment-variable structure, and deployment health checks. Core gameplay and AI systems will be implemented incrementally during later phases.

## Planned Core Systems

- case library and difficulty levels
- explorable investigation locations
- structured evidence collection
- AI-powered suspect interviews
- evidence-board connections
- contradiction discovery
- case timeline analysis
- detective notebook and theories
- final accusation workflow
- AI evaluation of player reasoning
- generated mysteries with validation
- detective profiles, ranks, and achievements

## Live Deployment

- **Live Application:** https://flyrank-capstone-beta.vercel.app/
- **Repository:** https://github.com/burair-hyder/flyrank-capstone
- **Health Check:** https://flyrank-capstone-beta.vercel.app/health
- **Health API:** https://flyrank-capstone-beta.vercel.app/api/health

## Project Status

The project is currently in the setup phase. The development environment, repository standards, Git workflow, and AI-assisted development process are being configured.

## Planned Technology Stack

* Node.js LTS
* TypeScript
* React
* Git and GitHub
* Cursor for AI-assisted development

The technology stack may be refined once the final capstone requirements are confirmed.

## Development Principles

* Follow Conventional Commits.
* Keep commits small and focused.
* Write readable and maintainable code.
* Review AI-generated changes before accepting them.
* Do not commit secrets or private credentials.
* Document important technical decisions.

## Getting Started

The repository is in the setup phase. There is no `package.json` yet, so only the clone step below works today.

Clone the repository:

```bash
git clone https://github.com/burair-hyder/flyrank-capstone
cd flyrank-capstone
```

After the React/TypeScript application is initialized, install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Repository Structure

```text
flyrank-capstone/
├── .cursor/
│   └── rules/
│       └── project.mdc
├── .gitignore
├── LICENSE
└── README.md
```

The source-code structure will be added during the implementation phase.

## AI-Assisted Development

Cursor is used to help with:

* Reviewing documentation
* Understanding project files
* Suggesting improvements
* Implementing features
* Identifying possible defects
* Supporting testing and refactoring

Every AI-generated change must be reviewed before it is committed.

## Author

Syed Muhammad Burair Hyder
