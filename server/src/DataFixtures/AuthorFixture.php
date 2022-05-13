<?php

namespace App\DataFixtures;

use App\Entity\Author;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AuthorFixture extends Fixture
{
    public const AUTHOR_REFERENCE = 'author';
    private $firstNames = array(
        "William",
        "Agatha",
        "Barbara",
        "Danielle",
        "Georges",
        "Sidney",
        "Eiichiro",
        "J. K."
    );

    private $lastNames = array(
        "Shakespeare",
        "Christie",
        "Cartland",
        "Steel",
        "Simenon",
        "Sheldon",
        "Oda",
        "Rowling"
    );
   
    private $biographie="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .";



    public function load(ObjectManager $manager): void
    {

        for ($count = 0; $count < 8; $count++) {
            $autor = new Author();
            $autor->setFirstName($this->firstNames[$count]);
            $autor->setLastName($this->lastNames[$count]);
            $autor->setBibliography($this->biographie);
            $this->setReference(self::AUTHOR_REFERENCE,  $autor);
            $manager->persist($autor);
        }

        $manager->flush();
    }
}
