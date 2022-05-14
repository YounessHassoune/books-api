<?php

namespace App\Tests;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;

class BooksTest extends ApiTestCase
{
    public function testGetBooks(): void
    {
        $response = static::createClient()->request('GET', '/api/books', [
            'headers' => ['Accept' => 'application/json']
        ]);
        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(200);
        $this->assertCount(8, $response->toArray());
    }

    public function testGetBooksWithQueryParameters(): void
    {
        $response = static::createClient()->request('GET', '/api/books?title=UNDER THE VOLCANO', [
            'headers' => ['Accept' => 'application/json']
        ]);
        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(200);
        $this->assertCount(1, $response->toArray());
    }

    public function  testCreateBook(): void
    {

        static::createClient()->request('POST', '/api/books', [
            'json' => [
                "title" => "Black Pearl",
                "description" => "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .",
                "publicationDate" => "2022-05-14T15:56:25.768Z",
                "genre" => "Drama",
                "cover" => "https://images-na.ssl-images-amazon.com/images/I/91I0tXmZ87L.jpg",
                "author" => "/api/authors/5",
            ]
        ]);
        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(201);
    }

    public function testUpdateBook(): void
    {
        static::createClient()->request('PUT', '/api/books/1', [
            'json' => [
                "title" => "The Black Pearl",
            ]
        ]);
        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(200);
    }

    public function testDeleteBook(): void
    {
        static::createClient()->request('DELETE', '/api/books/1');
        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(204);
    } 
}
