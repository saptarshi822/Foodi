# 🍔 Foodi - Scalable Food Delivery Platform

A production-inspired food delivery application built using **Java, Spring Boot, React, PostgreSQL, Kafka, Redis, Docker, and Microservices Architecture**.

The goal of this project is to demonstrate how large-scale food delivery platforms like Swiggy, Zomato, and Uber Eats can be designed using modern backend technologies and distributed systems.

---

## 🚀 Features

### 👤 User
- User Registration & Login
- JWT Authentication & Authorization
- Browse Restaurants
- Search Food Items
- Add/Remove Items from Cart
- Place Orders
- Order History
- Live Order Status

### 🍽 Restaurant
- Restaurant Registration
- Menu Management
- Accept/Reject Orders
- Update Order Status

### 🚚 Delivery
- Delivery Partner Login
- Accept Delivery Requests
- Live Order Tracking
- Update Delivery Status

### 💳 Payments
- Secure Payment Processing
- Payment Status Updates
- Event Driven Communication

### 📢 Notifications
- Order Confirmation
- Payment Success
- Delivery Updates
- Email/SMS Support (Future)

---

# 🏗 Architecture

The project follows **Microservices Architecture**.

```
                        Client (React)

                               │

                         API Gateway

                               │

        ┌──────────────┬──────────────┬──────────────┐
        │              │              │              │
   Auth Service   User Service   Restaurant Service  Order Service
        │              │              │              │
        └──────────────┴──────────────┴──────────────┘
                               │
                    Kafka Event Bus
                               │
        ┌──────────────┬──────────────┬──────────────┐
        │              │              │              │
 Payment Service  Delivery Service Notification Service
                               │
                           Redis Cache
                               │
                         PostgreSQL
```

---

# 🛠 Tech Stack

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Spring Cloud
- JWT Authentication
- REST APIs
- Hibernate
- Kafka
- Redis
- PostgreSQL
- Docker

---

## Frontend

- React
- TypeScript
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS

---

## DevOps

- Docker
- Docker Compose
- AWS (Deployment)
- GitHub Actions (Future)

---

# 📦 Microservices

| Service | Responsibility |
|----------|----------------|
| Auth Service | Authentication & JWT |
| User Service | User Profile |
| Restaurant Service | Restaurant & Menu |
| Order Service | Order Management |
| Payment Service | Payment Processing |
| Delivery Service | Delivery Assignment |
| Notification Service | Email/SMS Notifications |
| API Gateway | Routing & Security |
| Eureka Server | Service Discovery |
| Config Server | Centralized Configuration |

---

# 📂 Project Structure

```
Foodi/
│
├── auth-service/
├── user-service/
├── restaurant-service/
├── order-service/
├── payment-service/
├── delivery-service/
├── notification-service/
├── api-gateway/
├── discovery-server/
├── config-server/
├── frontend/
├── docker-compose.yml
└── README.md
```

---

# 🔄 Order Flow

1. User logs in.
2. JWT token is generated.
3. User browses restaurants.
4. User adds food to cart.
5. Order Service creates an order.
6. Kafka publishes Order Created event.
7. Payment Service processes payment.
8. Delivery Service assigns a delivery partner.
9. Notification Service sends updates.
10. User tracks the order in real time.

---

# ⚡ Event-Driven Communication

Kafka is used for asynchronous communication between services.

Example Events:

- Order Created
- Payment Completed
- Payment Failed
- Delivery Assigned
- Order Delivered
- Notification Sent

---

# 🗄 Database

Each microservice owns its own database.

Example:

- Auth DB
- User DB
- Restaurant DB
- Order DB
- Payment DB

This follows the **Database Per Service** pattern.

---

# 🔐 Security

- JWT Authentication
- Spring Security
- Password Encryption (BCrypt)
- Role Based Access Control
- API Gateway Security

---

# ⚡ Caching

Redis is used for:

- Restaurant Cache
- Menu Cache
- Frequently Accessed Data
- Session Optimization

---

# 📈 Future Improvements

- Kubernetes Deployment
- CI/CD Pipeline
- Elasticsearch
- Prometheus & Grafana Monitoring
- OpenTelemetry Tracing
- RabbitMQ Support
- AI-based Food Recommendations
- Real-time Delivery Tracking using WebSockets

---

# 💻 Getting Started

## Clone Repository

```bash
git clone https://github.com/your-username/Foodi.git
```

---

## Backend

```bash
cd auth-service
./mvnw spring-boot:run
```

Run all services similarly.

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Docker

```bash
docker-compose up --build
```

---

# 📚 Learning Objectives

This project demonstrates:

- Microservices Architecture
- Event-Driven Design
- Distributed Systems
- REST API Development
- Authentication using JWT
- Spring Security
- Kafka Messaging
- Redis Caching
- Docker Containerization
- API Gateway
- Service Discovery
- Database Per Service Pattern

---

# 🤝 Contributing

Contributions are welcome!

Feel free to fork the repository and submit a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It motivates me to build more open-source projects.
