# DevOps Take‑Home Test

## Overview

Create an automated CI/CD pipeline that builds, tests, and packages this Node.js service as a Docker image. The goal is to evaluate automation, reproducibility, security, and Docker image efficiency. Timebox: **2–4 hours** for a take‑home assignment (or 60–90 minutes for an on‑site exercise).

---

## Goal & Objectives

- Upload the code to **AWS CodeCommit** (or provide a mirror link).
- Implement a CI pipeline with **CodeBuild** and **CodePipeline** that runs tests and pushes a built image to **ECR**.
- Reduce Docker image size (use multi‑stage build / smaller base images).
- Provide `docker-compose.yml` to run the app locally and a `buildspec.yml` for CodeBuild.
- Supply clear documentation and verification steps.

---

## Prerequisites

- AWS account with permissions to create CodeCommit, ECR, CodeBuild, CodePipeline, and IAM roles.
- Docker installed locally (for local verification).
- Git configured for commits and pushes.

---

## Tasks (deliverables)

1. Repository

   - Push the project to **AWS CodeCommit** (or provide a public mirror).
   - Deliverable: CodeCommit repo URL or Git mirror link.

2. CI/CD pipeline (mandatory)

   - Create a **CodeBuild** project that:
     - Installs dependencies and runs `npm test`.
     - Builds a Docker image and pushes it to **ECR**.
     - Uses a `buildspec.yml` located in the repository.
   - Create a **CodePipeline** that triggers on commits to the CodeCommit repo and runs the build.
   - Deliverable: Pipeline ARN or URL and build logs.

3. Docker image size reduction

   - Use a multi‑stage Dockerfile and a small base image (e.g., `node:18-alpine` or distroless).
   - Aim: image < 100MB (target < 50MB).
   - Deliverable: optimized `Dockerfile` and `docker images` size output.

4. Local compose

   - Add `docker-compose.yml` to run the service with environment variables and healthcheck.
   - Deliverable: `docker-compose.yml` and verification command(s).

5. Tests & verification

   - Ensure `npm test` runs and passes in CodeBuild.
   - Provide steps to verify the running service and health endpoint.
   - Deliverable: test logs or screenshots.

6. Documentation
   - Update `README.MD` with instructions for running locally, verifying pipeline, and acceptance criteria.
   - Deliverable: this README updated with clear verification steps.

---

## Acceptance Criteria

- Repository is available (CodeCommit URL or mirror).
- Pipeline is automated: commits trigger a build; tests run and pass; image is pushed to ECR.
- `npm test` is included in build logs and passes.
- Docker image is reduced (target < 100MB) with rationale documented.
- `docker-compose up` starts the service and `GET /<APP_NAME>/health` returns 200 + `Hello World!`.
- No secrets or credentials are committed; pipeline uses IAM roles or Parameter Store for credentials.

---

## Optional stretch goals (bonus)

- Add an ECS Fargate deploy stage (with IaC templates).
- Add image scanning (Trivy or ECR scan) in the pipeline.
- Provide a GitHub Actions variant for cross‑platform evaluation.

---

## Submission

Provide a repository link (CodeCommit or mirror) including:

- `buildspec.yml` used by CodeBuild
- Optimized `Dockerfile` and `docker-compose.yml`
- Any IaC (Terraform) templates if used
- Short verification notes describing commands and sample outputs


