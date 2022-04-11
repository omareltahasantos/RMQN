<?php

namespace App\Entity;

use App\Repository\TalleristasRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TalleristasRepository::class)]
class Talleristas
{
   
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $idProfesor;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Nom;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Telefon;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $mail;

   

    public function getIdProfesor(): ?int
    {
        return $this->idProfesor;
    }

    public function setIdProfesor(int $idProfesor): self
    {
        $this->idProfesor = $idProfesor;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->Nom;
    }

    public function setNom(?string $Nom): self
    {
        $this->Nom = $Nom;

        return $this;
    }

    public function getTelefon(): ?string
    {
        return $this->Telefon;
    }

    public function setTelefon(?string $Telefon): self
    {
        $this->Telefon = $Telefon;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(?string $mail): self
    {
        $this->mail = $mail;

        return $this;
    }
}
