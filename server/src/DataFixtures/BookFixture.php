<?php

namespace App\DataFixtures;

use App\Entity\Book;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class BookFixture extends Fixture  implements DependentFixtureInterface
{


    private $titles = array(
        "ULYSSES",
        "THE GREAT GATSBY",
        "A PORTRAIT OF THE ARTIST",
        "BRAVE NEW WORLD",
        "THE GREAT GATSBY",
        "THE SOUND AND THE FURY",
        "DARKNESS AT NOON",
        "UNDER THE VOLCANO"
    );

    private $descriptions ="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .";
    private $genres = array(
        "Drama",
        "Fantasy",
        "Mystery",
        "Thriller",
        "Drama",
        "Fantasy",
        "Mystery",
        "Thriller"
    );
    
    private $covers = array(
        "https://pictures.abebooks.com/inventory/22780694277.jpg",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457",
        "https://i.pinimg.com/originals/51/6f/87/516f87679031b575966d249954816ada.jpg",
        "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/1631/posts/32582/image/Book%20Cover%20Template%20for%20Crime%20Thriller%20Novel%20copy.jpg",
        "https://www.adobe.com/express/create/cover/media_1f7a106c92cf2f05ba44cebd18452c2dd4a4bf2a4.jpeg?width=400&format=jpeg&optimize=medium",
        "https://images-na.ssl-images-amazon.com/images/I/91CmjOBztYL.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/91I0tXmZ87L.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/A12CNpbW5pL.jpg"

    );
     

        


    public function load(ObjectManager $manager): void
    {

        for ($count = 0; $count < 8; $count++) {
            $book = new Book();
            $book->setTitle($this->titles[$count]);
            $book->setDescription($this->descriptions);
            $book->setPublicationDate(new \DateTime());
            $book->setGenre($this->genres[$count]);
            $book->setAuthor($this->getReference(AuthorFixture::AUTHOR_REFERENCE));
            $book->setCover($this->covers[$count]);
            $manager->persist($book);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            AuthorFixture::class,
        ];
    }
}
