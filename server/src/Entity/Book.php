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
 * @ApiResource(normalizationContext={"groups"={"book:read"}},denormalizationContext={"groups"={"book:write"}})
 * @ORM\Entity()
 * @ApiFilter(SearchFilter::class, properties={"title":"word_start", "author","genre":"word_start"})
 */
class Book
{

    public function __construct()
    {
        $this->reviews = new ArrayCollection();
    }


    /**
     * The id of a book.
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"book:read","book:write","author:read","review:read"})
     */
    private  $id;


    /**
     * The title of a book.
     * 
     * @ORM\Column(length=255)
     * @Groups({"book:read", "book:write","author:read","review:read"})
     */
    private $title;


    /**
     * The description of a book.
     * 
     * @ORM\Column(type="text")
     * @Groups({"book:read", "book:write","author:read","review:read"})
     */
    private $description;


    /**
     * The publication date  of a book.
     * 
     * @ORM\Column(type="date")
     * @Groups({"book:read", "book:write","author:read","review:read"})
     */
    private $publicationDate;

    /**
     * The type|category of a book.
     * 
     * @ORM\Column(length=255)
     * @Groups({"book:read", "book:write","author:read","review:read"})
     */
    private $genre;


    /**
     * The cover uri of a book.
     * 
     * @ORM\Column(type="text")
     * @Groups({"book:read", "book:write","author:read","review:read"})
     * 
     */
    private $cover;

    /**
     * The author of the book.
     *
     * @ORM\ManyToOne(targetEntity="Author", inversedBy="books")
     * @Groups({"book:read", "book:write","review:read","author:read"})
     */
    private $author;


    /**
     * The reviews of the book.
     *
     * @ORM\OneToMany(
     * targetEntity="Review" ,
     * mappedBy="book" ,
     * cascade={"persist" , "remove"} )
     * @Groups({"book:read","book:write"})
     */
    private iterable $reviews;

    public function getId(): ?int
    {
        return $this->id;
    }
    public function getTitle(): ?string
    {
        return $this->title;
    }
    public function getDescription(): ?string
    {
        return $this->description;
    }
    public function getPublicationDate(): ?\DateTime
    {
        return $this->publicationDate;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function getAuthor(): ?Author
    {
        return $this->author;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function setCover(string $cover): self
    {
        $this->cover = $cover;

        return $this;
    }

    public function getCover(): ?string
    {
        return $this->cover;
    }


    /**
     * @return Review[]
     * 
     */
    public function getReviews(): Collection
    {
        return $this->reviews;
    }

    public function setPublicationDate(\DateTime $publicationDate): self
    {
        $this->publicationDate = $publicationDate;

        return $this;
    }

    public function setGenre(string $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    public function setAuthor(?Author $author): self
    {
        $this->author = $author;

        return $this;
    }
}
