<?php

namespace App\Entity;

use App\Repository\AsesoramientoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AsesoramientoRepository::class)]
class Asesoramiento
{
  

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $IdAssessorament;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Data;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $Objecte;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $FranjaHora;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $ObservacionsAssessorament;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Especialitat;

   

    public function getIdAssessorament(): ?int
    {
        return $this->IdAssessorament;
    }

    public function setIdAssessorament(int $IdAssessorament): self
    {
        $this->IdAssessorament = $IdAssessorament;

        return $this;
    }

    public function getData(): ?string
    {
        return $this->Data;
    }

    public function setData(?string $Data): self
    {
        $this->Data = $Data;

        return $this;
    }

    public function getObjecte(): ?string
    {
        return $this->Objecte;
    }

    public function setObjecte(?string $Objecte): self
    {
        $this->Objecte = $Objecte;

        return $this;
    }

    public function getFranjaHora(): ?string
    {
        return $this->FranjaHora;
    }

    public function setFranjaHora(?string $FranjaHora): self
    {
        $this->FranjaHora = $FranjaHora;

        return $this;
    }

    public function getObservacionsAssessorament(): ?string
    {
        return $this->ObservacionsAssessorament;
    }

    public function setObservacionsAssessorament(?string $ObservacionsAssessorament): self
    {
        $this->ObservacionsAssessorament = $ObservacionsAssessorament;

        return $this;
    }

    public function getEspecialitat(): ?int
    {
        return $this->Especialitat;
    }

    public function setEspecialitat(?int $Especialitat): self
    {
        $this->Especialitat = $Especialitat;

        return $this;
    }
}
