<?php

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(normalizationContext={"groups"={"author:read"}},denormalizationContext={"groups"={"author:write"}})
 * @ORM\Entity()
 * @ApiFilter(SearchFilter::class, properties={"firstName":"partial", "lastName":"partial"})
 * 
 */
class Author
{

    public function __construct()
    {
        $this->books = new ArrayCollection();
    }


    /**
     * The id of a author.
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"author:read","book:read"})
     */
    private  $id;

    /**
     * The firstName of a author.
     * 
     * @ORM\Column(length=255)
     * @Groups({"author:read", "author:write","book:read"})
     */
    private $firstName;

    /**
     * The lastName of a author.
     * 
     * @ORM\Column(length=255)
     * @Groups({"author:read", "author:write","book:read"})
     */
    private $lastName;


    /**
     * The lastName of a author.
     * 
     * @ORM\Column(type="text")
     * @Groups({"author:read", "author:write","book:read"})
     */
    private $bibliography;

    /**
     * The books of a author.
     * 
     * @ORM\OneToMany(
     * targetEntity="Book" ,
     * mappedBy="author" ,
     * cascade={"persist" , "remove"} )
     * @Groups({"autho __read"})
     *
     * 
     */
    private iterable $books;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getBibliography(): ?string
    {
        return $this->bibliography;
    }

    public function setBibliography(string $bibliography): self
    {
        $this->bibliography = $bibliography;

        return $this;
    }


    /**
     * @return Book[]
     * 
     */
    public function getBooks(): Collection
    {
        return $this->books;
    }
}
