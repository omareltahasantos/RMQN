<?php

namespace App\Entity;

use App\Repository\ObjetosRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ObjetosRepository::class)]
class Objetos
{
    
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $idObjecte;

    #[ORM\Column(type: 'string', length: 1500, nullable: true)]
    private $NomObjecte;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $IdUsuari;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $DataEntradaObjecte;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $PesObjecte;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $NumDiposit;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $DiagnosiUsuari;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $DescripcioAssessorament;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private $Finalitzat;

    #[ORM\Column(type: 'boolean', nullable: true)]
    private $Reparat;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $TipusArranjament;


    public function getIdObjecte(): ?int
    {
        return $this->idObjecte;
    }

    public function setIdObjecte(int $idObjecte): self
    {
        $this->idObjecte = $idObjecte;

        return $this;
    }

    public function getNomObjecte(): ?string
    {
        return $this->NomObjecte;
    }

    public function setNomObjecte(?string $NomObjecte): self
    {
        $this->NomObjecte = $NomObjecte;

        return $this;
    }

    public function getIdUsuari(): ?int
    {
        return $this->IdUsuari;
    }

    public function setIdUsuari(int $IdUsuari): self
    {
        $this->IdUsuari = $IdUsuari;

        return $this;
    }

    public function getDataEntradaObjecte(): ?string
    {
        return $this->DataEntradaObjecte;
    }

    public function setDataEntradaObjecte(?string $DataEntradaObjecte): self
    {
        $this->DataEntradaObjecte = $DataEntradaObjecte;

        return $this;
    }

    public function getPesObjecte(): ?string
    {
        return $this->PesObjecte;
    }

    public function setPesObjecte(?string $PesObjecte): self
    {
        $this->PesObjecte = $PesObjecte;

        return $this;
    }

    public function getNumDiposit(): ?int
    {
        return $this->NumDiposit;
    }

    public function setNumDiposit(?int $NumDiposit): self
    {
        $this->NumDiposit = $NumDiposit;

        return $this;
    }

    public function getDiagnosiUsuari(): ?string
    {
        return $this->DiagnosiUsuari;
    }

    public function setDiagnosiUsuari(?string $DiagnosiUsuari): self
    {
        $this->DiagnosiUsuari = $DiagnosiUsuari;

        return $this;
    }

    public function getDescripcioAssessorament(): ?string
    {
        return $this->DescripcioAssessorament;
    }

    public function setDescripcioAssessorament(?string $DescripcioAssessorament): self
    {
        $this->DescripcioAssessorament = $DescripcioAssessorament;

        return $this;
    }

    public function getFinalitzat(): ?bool
    {
        return $this->Finalitzat;
    }

    public function setFinalitzat(?bool $Finalitzat): self
    {
        $this->Finalitzat = $Finalitzat;

        return $this;
    }

    public function getReparat(): ?bool
    {
        return $this->Reparat;
    }

    public function setReparat(?bool $Reparat): self
    {
        $this->Reparat = $Reparat;

        return $this;
    }

    public function getTipusArranjament(): ?string
    {
        return $this->TipusArranjament;
    }

    public function setTipusArranjament(?string $TipusArranjament): self
    {
        $this->TipusArranjament = $TipusArranjament;

        return $this;
    }
}
