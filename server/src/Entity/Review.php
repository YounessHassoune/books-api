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
 * @ApiResource(normalizationContext={"groups"={"review:read"}},denormalizationContext={"groups"={"review:write"}})
 * @ORM\Entity()
 */
class Review
{
    /**
     * The id of the review.
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"review:read","book:read"})
     */
    private $id;

    /**
     * The full name of the reviewer.
     * 
     * @ORM\Column(length=255)
     * @Groups({"review:read", "review:write","book:read"})
     */
    private $fullName;

    /**
     * The email of the reviewer.
     * 
     * @ORM\Column(length=255)
     * @Groups({"review:read", "review:write","book:read"})
     */
    private $email;

    /**
     * The rating of the reviewer.
     * 
     * @ORM\Column(type="text")
     * @Groups({"review:read", "review:write","book:read"})
     */
    private $comment;

    /**
     * The date of the review.
     * 
     * @ORM\Column(type="date")
     * @Groups({"review:read", "review:write","book:read"})
     */
    private $creationDate;


    /**
     * The book of the review.
     * 
     * @ORM\ManyToOne(targetEntity="Book", inversedBy="reviews")
     * @Groups({"review:read", "review:write"})
     */
    private $book;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(string $fullName): self
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getCreationDate(): ?\DateTime
    {
        return $this->creationDate;
    }

    public function setCreationDate(\DateTime $creationDate): self
    {
        $this->creationDate = $creationDate;

        return $this;
    }

    public function getBook(): ?Book
    {
        return $this->book;
    }

    public function setBook(?Book $book): self
    {
        $this->book = $book;

        return $this;
    }

   
}