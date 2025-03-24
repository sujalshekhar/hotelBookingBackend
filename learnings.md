# Node.js Application Architecture

## **1. Application Flow**
```
index.js -> routes (may contain middlewares) -> controllers -> services -> repositories
```
- **Controllers**: Handle requests, call services, and return responses.
- **Services**: Contain business logic, interact with repositories.
- **Repositories**: Perform database operations.
- **Base Repository**: Contains generic CRUD operations (no `try-catch` here; errors propagate to the service layer).

## **2. Error Handling**

### **Global Error Handler**
- Centralized error handling for all controllers.
- Use `next(error)` in controllers to pass errors to the global handler.
- Express automatically **skips all middlewares** and directly calls the error-handling middleware.
- Express identifies an error middleware by its function signature:
  ```js
  (req, res, next) -> Regular middleware
  (err, req, res, next) -> Error-handling middleware
  ```

### **Where to Use `try-catch`?**
| Layer         | `try-catch` Required? | Reason |
|--------------|-------------------|--------|
| **Controllers** | ✅ Yes | Catch errors and pass to global handler via `next(error)`. |
| **Services** | ✅ Yes | Handle business logic errors, call repositories. |
| **Repositories** | ❌ No | Let errors propagate to the service layer. |

## **3. Validations**
- Maintain **separate validation files** for each route.
- Used to validate incoming client data before processing.

## **4. Migrations**
- Managed using **Sequelize CLI**.
- Helps version control and manage database schema changes.

## **5. Custom Error & Response Classes**

### **Custom Error Class (`ApiError`)**
- Used for structured error handling with status codes.
- Example:
  ```js
  class ApiError extends Error {
      constructor(statusCode, message, isOperational = true, stack = '') {
          super(message);
          this.statusCode = statusCode;
          this.isOperational = isOperational;
          if (stack) {
              this.stack = stack;
          } else {
              Error.captureStackTrace(this, this.constructor);
          }
      }
  }
  ```

### **Custom Response Class (`ApiResponse`)**
- Used for consistent API responses.
- Uses **static methods** to avoid unnecessary object instantiation, saving memory.
- Example:
  ```js
  const { StatusCodes } = require('http-status-codes');
  
  class ApiResponse {
      static success(res, message, data = {}) {
          return res.status(StatusCodes.OK).json({ success: true, message, data });
      }
  
      static error(res, message, statusCode = StatusCodes.INTERNAL_SERVER_ERROR) {
          return res.status(statusCode).json({ success: false, message });
      }
  }
  ```
- **Why use static methods?**
  - Utility functions should not require instantiation.
  - Saves memory and avoids unnecessary object creation.

## **6. Issue: `this` Context Lost in Express Controllers**
### **Problem**
When using class-based controllers in Express, methods lose their `this` context when passed as route handlers, leading to errors like:
```js
Cannot read properties of undefined (reading 'userService')
```
This happens because `this` is not automatically bound to class methods when they are used as callbacks.

### **Solution 1: Bind Methods in the Constructor**
Manually bind methods inside the constructor:
```js
class UserController {
    constructor() {
        this.userService = new UserService();
        this.getUser = this.getUser.bind(this);
        this.createUser = this.createUser.bind(this);
    }
}
```

### **Solution 2: Use Arrow Functions**
Arrow functions automatically retain `this` context:
```js
getUser = async (req, res, next) => {
    const userId = req.params.id;
    const user = await this.userService.get(userId);
    res.json(user);
};
```

### **Solution 3: Export an Instance Instead of the Class**
```js
module.exports = new UserController();
```

## **Summary**
- **Follow a structured flow**: `index.js -> routes -> controllers -> services -> repositories`.
- **Centralized error handling** using a global error middleware.
- **Use `next(error)` in controllers** to pass errors to the handler.
- **Try-catch only in controllers and services**, not in repositories.
- **Use separate validation files** for incoming request validation.
- **Use Sequelize migrations** for database schema management.
- **Custom error and response classes** for clean, reusable error and response handling.
- **Fix `this` binding issues** in Express controllers by binding methods, using arrow functions, or exporting an instance.

This document serves as a **guide to maintain consistency and best practices** in Node.js development.

