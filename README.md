 Sensor Map Application (Dockerized Full Stack Project)

##  Overview

Cette application full-stack permet de **collecter, stocker et visualiser des données géographiques de capteurs routiers** sur une carte interactive.

Le projet met en œuvre une architecture basée sur des microservices conteneurisés avec Docker, en intégrant un backend API, une base de données NoSQL et une interface web dynamique.

---

## Key Features

* 📥 Import automatique de données depuis un fichier CSV
* 🗄️ Stockage dans une base de données MongoDB
* ⚙️ API REST développée avec Flask
* 🌍 Visualisation des capteurs sur une carte interactive (Leaflet)
* 🐳 Conteneurisation complète avec Docker (sans docker-compose)

---

##  Architecture

```id="9avt5u"
[ CSV Dataset ]
       ↓
[ Flask Backend API ]
       ↓
[ MongoDB Database ]
       ↓
[ Frontend (Nginx + Leaflet Map) ]
```

---

##  Tech Stack

| Layer    | Technologies              |
| -------- | ------------------------- |
| Backend  | Python, Flask             |
| Database | MongoDB                   |
| Frontend | HTML, JavaScript, Leaflet |
| DevOps   | Docker                    |
| Data     | CSV (Sensor Metadata)     |

---

##  Project Structure

```id="w1xyj5"
docker-sensors/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   
│__ Docker compose .yml
└── README.md
```

---

##  How to Run

docker compose up --build


##  Application Access

*  API Endpoint

http://localhost:5000/sensors
```

*  Interactive Map

http://localhost:8082


## 🔍 How It Works

1. Le backend charge les données du fichier CSV
2. Les données sont insérées dans MongoDB
3. Une API REST expose les coordonnées des capteurs
4. Le frontend récupère ces données via fetch()
5. Les capteurs sont affichés sous forme de points sur la carte

---

##  Technical Highlights

*  Communication inter-conteneurs via réseau Docker
*  Injection automatique des données au démarrage
*  Séparation claire Frontend / Backend / Database
*  Déploiement simplifié sans dépendances locales

---




##  Project Value

Ce projet démontre :

* La maîtrise de Docker et des architectures conteneurisées
* L’intégration d’une base de données NoSQL
* Le développement d’une API REST
* La visualisation de données géospatiales

---
