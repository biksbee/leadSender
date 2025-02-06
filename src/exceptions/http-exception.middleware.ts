export class HttpException extends Error {
    public status: number;
    constructor(status: number, message: string) {
        super();
        this.status = status;
        this.message = message;
    }

    static notFoundException(message: string = 'Not Found') {
        return new HttpException(401, message)
    }
}