import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Res } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './model/book.model';
import { Response } from 'express';

@Controller('book')
export class BookController {

    constructor(@Inject() private readonly bookService: BookService) { }
    @Get()
    async getAllBook(@Res() res: Response): Promise<any> {
        const books = await this.bookService.getAllBook();
        return res.status(200).json({
            status_code: "Ok!",
            message: "Fetch success",
            data: books
        });
    }

    @Post()
    async createBook(@Body() body: any): Promise<Book> {
        return await this.bookService.createBook(body);
    }

    @Put(':id')
    async updateBook(@Param('id') id: number, @Body() body: any): Promise<Book> {
        return await this.bookService.updateBook(id, body);
    }

    @Get(':id')
    async getBook(@Param('id') id: number): Promise<Book | null> {
        return await this.bookService.getBook(id);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: number): Promise<Book> {
        return await this.bookService.deleteBook(id);
    }
}
