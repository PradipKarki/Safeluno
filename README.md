## 📁 **Safeluno Repository Structure (Simple + Scalable)**

```
safeluno/
  frontend/              # Next.js + NextAuth (Google + Apple)
    src/
    public/
    package.json
    next.config.js

  backend/               # NestJS API
    src/
    test/
    package.json
    nest-cli.json

  infra/                 # Azure infra (Container Apps, Key Vault, App Config)
    bicep/ or terraform/
    scripts/

  docs/                  # Architecture diagrams, design notes, API docs
    architecture.md
    roadmap.md

  .github/
    workflows/
      frontend-ci.yml
      backend-ci.yml
      infra-ci.yml

  README.md
  LICENSE
```

This is intentionally minimal. Anyone landing on the repo will understand it instantly.

---

## 📝 **Starter README for Safeluno**

# **Safeluno**
A secure, open‑source digital vault for organizing life documents, insurance policies, and financial account information. Built with **Next.js**, **NestJS**, **MongoDB Atlas**, and **Azure Container Apps**.

Safeluno is designed to be a modern, privacy‑focused alternative to expensive life‑planning platforms — simple, secure, and open to everyone.

---

## 🚀 Features
- Secure document storage using Azure Blob Storage  
- Google & Apple login via NextAuth  
- Encrypted metadata stored in MongoDB Atlas  
- Clean, modern UI built with Next.js  
- API powered by NestJS  
- Azure‑ready deployment (Container Apps, Key Vault, App Config)  
- Open‑source and community‑friendly  

---

## 📁 Repository Structure
```
frontend/   → Next.js + NextAuth
backend/    → NestJS API
infra/      → Azure infra (Container Apps, Key Vault, App Config)
docs/       → Architecture, design, and API documentation
```

---

## 🧱 Tech Stack
- **Frontend:** Next.js, NextAuth, TypeScript  
- **Backend:** NestJS, TypeScript  
- **Database:** MongoDB Atlas (Free Tier)  
- **Storage:** Azure Blob Storage  
- **Hosting:** Azure Container Apps  
- **Secrets:** Azure Key Vault  
- **Config:** Azure App Configuration  

---

## 🛠️ Development Setup
### 1. Clone the repo
```
git clone https://github.com/<your-username>/safeluno.git
cd safeluno
```

### 2. Install dependencies
```
cd frontend && npm install
cd ../backend && npm install
```

### 3. Environment variables
Create `.env.local` in `frontend/` and `.env` in `backend/` with your local secrets.

---

## 📦 Deployment
Safeluno is designed for Azure Container Apps.

You’ll deploy:
- `frontend` → one container app  
- `backend` → one container app  

Infra templates live in `/infra`.

---

## 🤝 Contributing
Safeluno is open to contributions.  
See `docs/` for architecture and roadmap.

---

## 📄 License
MIT License.
