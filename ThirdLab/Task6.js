class CustomError extends Error {
    constructor(statusCode, message){
        super(statusCode, message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

// 400 HTTP status code = bad request
function loginUser(username, password) {
    if (username !== "admin" && password !== "qwerty") {
      throw new CustomError(400, "Invalid username or password")
    }
   
    return "Successfully logged in"
}

function processLogin(username, password) {
    try {
        const result = loginUser(username, password)
        return {
            statusCode: 200,
            result
        }
    } catch(e) {
        if(e instanceof CustomError) {
            return {
                statusCode: e.statusCode,
                result: e.message
            }
        }
    }
}

console.log(processLogin("admin", "qwerty")) // { statusCode: 200, result: "Successfully logged in" }
console.log(processLogin("123", "123")) /// { statusCode: 400, result: "Invalid username or password" }


