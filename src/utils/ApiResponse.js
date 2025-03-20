class ApiResponse {
    constructor(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode >= 200 && statusCode < 300;
    }

    static success(message, data = null, statusCode = 200) {
        return new ApiResponse(statusCode, message, data);
    }

    static error(message, data = null, statusCode = 500) {
        return new ApiResponse(statusCode, message, data);
    }
}

module.exports = ApiResponse;